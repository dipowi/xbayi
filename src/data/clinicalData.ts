import { STIMULASI_DB, type StimPhase, type StimCategory, type StimActivity } from "./stimulasiDB";

export type { StimActivity as Activity, StimCategory as Category, StimPhase as PhaseData };

export type PhaseKey = string;

// Re-export for compatibility
export const CLINICAL_DATA = STIMULASI_DB;

export function getPhaseByMonths(months: number): StimPhase {
  return STIMULASI_DB.phases.find(
    (phase) => months >= phase.minMonths && months < phase.maxMonths
  ) || STIMULASI_DB.phases[STIMULASI_DB.phases.length - 1];
}

export interface AgeContext {
  label: string;
  months: number;
  weeks: number;
  days: number;
  displayAge: string;
  phase: StimPhase;
}

export function calculateAgeContext(dob: string): AgeContext {
  const birth = new Date(dob);
  const now = new Date();
  const diffMs = now.getTime() - birth.getTime();
  const totalDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

  const months = Math.floor(totalDays / 30.44);
  const weeks = Math.floor(totalDays / 7);
  const remainderDays = totalDays % 7;

  let displayAge: string;
  if (totalDays < 30) {
    displayAge = `${weeks} Minggu, ${remainderDays} Hari`;
  } else {
    const remainderWeeks = Math.floor((totalDays - Math.floor(months * 30.44)) / 7);
    displayAge = `${months} Bulan, ${remainderWeeks} Minggu`;
  }

  const phase = getPhaseByMonths(months);

  return {
    label: phase.label,
    months,
    weeks,
    days: totalDays,
    displayAge,
    phase,
  };
}
