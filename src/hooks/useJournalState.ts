import { useState, useCallback, useEffect } from "react";
import {
  AgeGroupKey,
  AgeGroupData,
  SensoryCategory,
  getDefaultData,
} from "@/data/stimulationData";

const STORAGE_KEY = "jurnal-stimulasi-bayi";

type StoredState = Record<AgeGroupKey, AgeGroupData>;

function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {} as StoredState;
}

function getOrInit(state: StoredState, key: AgeGroupKey): AgeGroupData {
  if (!state[key]) {
    state[key] = getDefaultData(key);
  }
  return state[key];
}

export function useJournalState(ageGroup: AgeGroupKey) {
  const [allState, setAllState] = useState<StoredState>(loadState);
  const data = getOrInit(allState, ageGroup);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allState));
  }, [allState]);

  // Ensure current age group is initialized
  useEffect(() => {
    setAllState((prev) => {
      if (prev[ageGroup]) return prev;
      return { ...prev, [ageGroup]: getDefaultData(ageGroup) };
    });
  }, [ageGroup]);

  const toggleChecklist = useCallback(
    (category: SensoryCategory, itemId: string) => {
      setAllState((prev) => {
        const copy = JSON.parse(JSON.stringify(prev)) as StoredState;
        const group = getOrInit(copy, ageGroup);
        const items = group.daily_checklist[category];
        const item = items.find((i) => i.id === itemId);
        if (item) item.completed = !item.completed;
        return copy;
      });
    },
    [ageGroup]
  );

  const toggleMilestone = useCallback(
    (milestoneId: string) => {
      setAllState((prev) => {
        const copy = JSON.parse(JSON.stringify(prev)) as StoredState;
        const group = getOrInit(copy, ageGroup);
        const m = group.kpsp_milestones.find((i) => i.id === milestoneId);
        if (m) m.achieved = !m.achieved;
        return copy;
      });
    },
    [ageGroup]
  );

  const updateJournal = useCallback(
    (questionIndex: number, value: string) => {
      setAllState((prev) => {
        const copy = JSON.parse(JSON.stringify(prev)) as StoredState;
        const group = getOrInit(copy, ageGroup);
        if (!group.journal_entries) {
          group.journal_entries = {};
        }
        (group as any).journal_entries[`q${questionIndex}`] = value;
        return copy;
      });
    },
    [ageGroup]
  );

  const getJournalEntry = useCallback(
    (questionIndex: number): string => {
      return (data as any).journal_entries?.[`q${questionIndex}`] ?? "";
    },
    [data]
  );

  // Progress calculation
  const allItems = Object.values(data.daily_checklist).flat();
  const completedCount = allItems.filter((i) => i.completed).length;
  const totalCount = allItems.length;
  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return {
    data,
    progress,
    completedCount,
    totalCount,
    toggleChecklist,
    toggleMilestone,
    updateJournal,
    getJournalEntry,
  };
}
