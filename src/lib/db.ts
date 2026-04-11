import { openDB, type DBSchema, type IDBPDatabase } from "idb";

export interface DailyLog {
  date: string; // YYYY-MM-DD
  penglihatan: boolean;
  pendengaran: boolean;
  perabaan: boolean;
  penciuman: boolean;
  pengecapan: boolean;
  vestibular: boolean;
  propriosepsi: boolean;
  completion_rate: number;
}

export interface BabyProfile {
  id: "main";
  name: string;
  dob: string; // YYYY-MM-DD
}

interface JurnalDB extends DBSchema {
  profile: {
    key: string;
    value: BabyProfile;
  };
  daily_logs: {
    key: string;
    value: DailyLog;
    indexes: { "by-date": string };
  };
}

let dbPromise: Promise<IDBPDatabase<JurnalDB>> | null = null;

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB<JurnalDB>("jurnal-stimulasi", 1, {
      upgrade(db) {
        db.createObjectStore("profile", { keyPath: "id" });
        const logStore = db.createObjectStore("daily_logs", { keyPath: "date" });
        logStore.createIndex("by-date", "date");
      },
    });
  }
  return dbPromise;
}

export async function getProfile(): Promise<BabyProfile | undefined> {
  const db = await getDB();
  return db.get("profile", "main");
}

export async function saveProfile(name: string, dob: string): Promise<void> {
  const db = await getDB();
  await db.put("profile", { id: "main", name, dob });
}

export function createEmptyLog(date: string): DailyLog {
  return {
    date,
    penglihatan: false,
    pendengaran: false,
    perabaan: false,
    penciuman: false,
    pengecapan: false,
    vestibular: false,
    propriosepsi: false,
    completion_rate: 0,
  };
}

export async function getDailyLog(date: string): Promise<DailyLog | undefined> {
  const db = await getDB();
  return db.get("daily_logs", date);
}

export async function saveDailyLog(log: DailyLog): Promise<void> {
  const db = await getDB();
  const categories: (keyof DailyLog)[] = [
    "penglihatan", "pendengaran", "perabaan", "penciuman",
    "pengecapan", "vestibular", "propriosepsi",
  ];
  const done = categories.filter((c) => log[c] === true).length;
  log.completion_rate = Math.round((done / 7) * 100);
  await db.put("daily_logs", log);
}

export async function getLogsForDateRange(
  startDate: string,
  endDate: string
): Promise<DailyLog[]> {
  const db = await getDB();
  const all = await db.getAll("daily_logs");
  return all.filter((l) => l.date >= startDate && l.date <= endDate);
}

export function getToday(): string {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

export function formatDateID(date: string): string {
  const d = new Date(date + "T00:00:00");
  return d.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long" });
}

export function getAgeInMonths(dob: string): number {
  const birth = new Date(dob);
  const now = new Date();
  let months = (now.getFullYear() - birth.getFullYear()) * 12;
  months += now.getMonth() - birth.getMonth();
  if (now.getDate() < birth.getDate()) months--;
  return Math.max(0, months);
}

export type AgeGroupKey = "0-3" | "3-6" | "6-9" | "9-12" | "12-15" | "15-18" | "18-24";

export function getAgeGroup(months: number): AgeGroupKey {
  if (months < 3) return "0-3";
  if (months < 6) return "3-6";
  if (months < 9) return "6-9";
  if (months < 12) return "9-12";
  if (months < 15) return "12-15";
  if (months < 18) return "15-18";
  return "18-24";
}

export const AGE_GROUP_LABELS: Record<AgeGroupKey, string> = {
  "0-3": "0–3 Bulan",
  "3-6": "3–6 Bulan",
  "6-9": "6–9 Bulan",
  "9-12": "9–12 Bulan",
  "12-15": "12–15 Bulan",
  "15-18": "15–18 Bulan",
  "18-24": "18–24 Bulan",
};

export function getLast7Days(): string[] {
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}
