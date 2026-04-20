import type { StimActivity } from "@/data/stimulasiDB";

export type FrequencyKind = "daily" | "weekly" | "monthly";

export interface ParsedFrequency {
  kind: FrequencyKind;
  /** Times per period (per day for daily, per week for weekly, per month for monthly) */
  timesPerPeriod: number;
  raw: string;
}

/**
 * Parse the free-text Indonesian frequency string into a structured kind.
 * Heuristic but deterministic — same input always yields same output.
 */
export function parseFrequency(raw?: string): ParsedFrequency {
  const text = (raw || "").toLowerCase().trim();

  if (!text) return { kind: "daily", timesPerPeriod: 1, raw: raw || "" };

  // Monthly markers
  if (/\bbulan\b/.test(text) && !/\/hari|\/minggu|sehari|seminggu|setiap hari/.test(text)) {
    const m = text.match(/(\d+)\s*x?\s*\/?\s*bulan/);
    return { kind: "monthly", timesPerPeriod: m ? parseInt(m[1], 10) : 1, raw: raw! };
  }

  // Weekly markers
  if (/\/minggu|seminggu/.test(text)) {
    const m = text.match(/(\d+)(?:\s*[–-]\s*\d+)?\s*x?\s*\/?\s*minggu/);
    const m2 = text.match(/(\d+)(?:\s*[–-]\s*\d+)?\s*x?\s*seminggu/);
    const n = m?.[1] || m2?.[1];
    return { kind: "weekly", timesPerPeriod: n ? parseInt(n, 10) : 2, raw: raw! };
  }

  // Default: daily (covers "setiap hari", "Xx/hari", "sepanjang hari", "setiap kali...", etc.)
  const m = text.match(/(\d+)(?:\s*[–-]\s*\d+)?\s*x?\s*\/?\s*hari/);
  return { kind: "daily", timesPerPeriod: m ? parseInt(m[1], 10) : 1, raw: raw || "" };
}

/** Stable hash from a string → small non-negative int. */
function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h | 0);
}

/** ISO week number (1–53). */
function isoWeek(d: Date): number {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

/** Day-of-week index 0..6 from a YYYY-MM-DD string. */
function dowFromDate(dateStr: string): number {
  return new Date(dateStr + "T00:00:00").getDay();
}

/**
 * Decide whether an activity is "due" on a specific calendar date.
 * Uses a deterministic schedule so the same activity always lands on the
 * same days of the week / month — parents can rely on a stable rhythm.
 */
export function isDueOnDate(activity: StimActivity, dateStr: string): boolean {
  const f = parseFrequency(activity.frequency);
  const seed = hashString(activity.id);
  const date = new Date(dateStr + "T00:00:00");

  if (f.kind === "daily") return true;

  if (f.kind === "weekly") {
    const dow = dowFromDate(dateStr); // 0..6
    // Spread N times/week across the 7 days, anchored by activity hash.
    const slotSize = 7 / Math.max(1, Math.min(7, f.timesPerPeriod));
    for (let i = 0; i < f.timesPerPeriod; i++) {
      const target = Math.floor((seed + i * slotSize) % 7);
      if (target === dow) return true;
    }
    return false;
  }

  // Monthly
  const day = date.getDate();
  // Anchor day: 1..28 deterministically, then optionally extra days for >1×/month.
  const anchor = (seed % 28) + 1;
  for (let i = 0; i < f.timesPerPeriod; i++) {
    const d = ((anchor - 1 + Math.floor(i * (28 / f.timesPerPeriod))) % 28) + 1;
    if (d === day) return true;
  }
  return false;
}

export function filterDueActivities(activities: StimActivity[], dateStr: string): StimActivity[] {
  return activities.filter((a) => isDueOnDate(a, dateStr));
}
