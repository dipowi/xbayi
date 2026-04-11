import { useState, useEffect, useCallback } from "react";
import {
  DailyLog,
  BabyProfile,
  getDailyLog,
  saveDailyLog,
  createEmptyLog,
  getToday,
  formatDateID,
  getAgeInMonths,
  getAgeGroup,
  AGE_GROUP_LABELS,
} from "@/lib/db";
import { SENSORY_LABELS, type SensoryCategory } from "@/data/stimulationData";
import ProgressRing from "./ProgressRing";
import {
  Eye, Ear, Hand, Wind, Utensils, RotateCcw, Dumbbell,
  type LucideIcon,
} from "lucide-react";

const CATEGORIES: SensoryCategory[] = [
  "penglihatan", "pendengaran", "perabaan", "penciuman",
  "pengecapan", "vestibular", "propriosepsi",
];

const CATEGORY_ICONS: Record<SensoryCategory, LucideIcon> = {
  penglihatan: Eye,
  pendengaran: Ear,
  perabaan: Hand,
  penciuman: Wind,
  pengecapan: Utensils,
  vestibular: RotateCcw,
  propriosepsi: Dumbbell,
};

const CATEGORY_COLORS: Record<SensoryCategory, string> = {
  penglihatan: "bg-sage-pale text-sage",
  pendengaran: "bg-sage-pale text-sage",
  perabaan: "bg-sage-pale text-sage",
  penciuman: "bg-terra-pale text-secondary",
  pengecapan: "bg-terra-pale text-secondary",
  vestibular: "bg-blush-pale text-accent-foreground",
  propriosepsi: "bg-blush-pale text-accent-foreground",
};

interface TodayDashboardProps {
  profile: BabyProfile;
}

const TodayDashboard = ({ profile }: TodayDashboardProps) => {
  const [log, setLog] = useState<DailyLog | null>(null);
  const today = getToday();

  useEffect(() => {
    (async () => {
      let existing = await getDailyLog(today);
      if (!existing) {
        existing = createEmptyLog(today);
        await saveDailyLog(existing);
      }
      setLog(existing);
    })();
  }, [today]);

  const toggle = useCallback(
    async (cat: SensoryCategory) => {
      if (!log) return;
      const updated = { ...log, [cat]: !log[cat] };
      const done = CATEGORIES.filter((c) => updated[c] === true).length;
      updated.completion_rate = Math.round((done / 7) * 100);
      setLog(updated);
      await saveDailyLog(updated);
    },
    [log]
  );

  if (!log) return null;

  const ageMonths = getAgeInMonths(profile.dob);
  const ageGroup = getAgeGroup(ageMonths);
  const completed = CATEGORIES.filter((c) => log[c]).length;

  return (
    <div className="px-4 pb-8 space-y-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center space-y-1 pt-4">
        <p className="font-body text-sm text-text-muted-custom capitalize">
          {formatDateID(today)}
        </p>
        <h2 className="font-heading text-xl font-bold text-text-heading">
          Halo, {profile.name} 👋
        </h2>
        <span className="inline-block px-3 py-1 rounded-full bg-sage-pale text-sage font-body text-xs font-medium">
          {AGE_GROUP_LABELS[ageGroup]} · {ageMonths} bulan
        </span>
      </div>

      {/* Progress Ring */}
      <div className="flex justify-center">
        <ProgressRing completed={completed} total={7} size={110} />
      </div>

      {/* Checklist */}
      <div className="space-y-3">
        <h3 className="font-heading text-lg font-semibold text-text-heading">
          Stimulasi Hari Ini
        </h3>
        {CATEGORIES.map((cat) => {
          const Icon = CATEGORY_ICONS[cat];
          const checked = log[cat];
          return (
            <button
              key={cat}
              onClick={() => toggle(cat)}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all duration-200 ${
                checked
                  ? "bg-sage-pale/70 shadow-none"
                  : "bg-card shadow-sm hover:shadow-md"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${CATEGORY_COLORS[cat]}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span
                className={`font-body text-sm text-left transition-all duration-300 ${
                  checked ? "line-through text-text-muted-custom" : "text-text-heading font-medium"
                }`}
              >
                {SENSORY_LABELS[cat]}
              </span>
              <div className="ml-auto">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    checked ? "bg-sage border-sage" : "border-divider"
                  }`}
                >
                  {checked && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TodayDashboard;
