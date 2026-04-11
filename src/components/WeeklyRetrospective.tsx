import { useState, useEffect } from "react";
import {
  DailyLog,
  getLast7Days,
  getLogsForDateRange,
  createEmptyLog,
} from "@/lib/db";
import { SENSORY_LABELS, type SensoryCategory } from "@/data/stimulationData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Eye, Ear, Hand, Wind, Utensils, RotateCcw, Dumbbell, type LucideIcon } from "lucide-react";

const CATEGORIES: SensoryCategory[] = [
  "penglihatan", "pendengaran", "perabaan", "penciuman",
  "pengecapan", "vestibular", "propriosepsi",
];

const CATEGORY_ICONS: Record<SensoryCategory, LucideIcon> = {
  penglihatan: Eye, pendengaran: Ear, perabaan: Hand,
  penciuman: Wind, pengecapan: Utensils, vestibular: RotateCcw,
  propriosepsi: Dumbbell,
};

const WeeklyRetrospective = () => {
  const [logs, setLogs] = useState<Record<string, DailyLog>>({});
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const days = getLast7Days();
  const today = days[days.length - 1];

  useEffect(() => {
    (async () => {
      const data = await getLogsForDateRange(days[0], days[days.length - 1]);
      const map: Record<string, DailyLog> = {};
      data.forEach((l) => (map[l.date] = l));
      setLogs(map);
    })();
  }, []);

  const getColor = (rate: number) => {
    if (rate === 100) return "bg-sage";
    if (rate >= 50) return "bg-secondary";
    if (rate > 0) return "bg-accent";
    return "bg-muted";
  };

  const getDayLabel = (date: string) => {
    const d = new Date(date + "T00:00:00");
    return d.toLocaleDateString("id-ID", { weekday: "short" }).slice(0, 3);
  };

  const getDateNum = (date: string) => new Date(date + "T00:00:00").getDate();

  const selectedLog = selectedDay ? logs[selectedDay] || createEmptyLog(selectedDay) : null;

  return (
    <div className="px-4 pb-8 space-y-6 max-w-lg mx-auto">
      <div className="pt-4">
        <h2 className="font-heading text-xl font-bold text-text-heading">
          Riwayat 7 Hari
        </h2>
        <p className="font-body text-sm text-text-muted-custom mt-1">
          Ketuk hari sebelumnya untuk melihat detail
        </p>
      </div>

      {/* Week bar */}
      <div className="flex gap-2 justify-between">
        {days.map((date) => {
          const log = logs[date];
          const rate = log?.completion_rate ?? 0;
          const isToday = date === today;

          return (
            <button
              key={date}
              onClick={() => date !== today && setSelectedDay(date)}
              disabled={isToday}
              className={`flex flex-col items-center gap-1.5 flex-1 py-3 rounded-2xl transition-all ${
                isToday ? "ring-2 ring-sage bg-sage-pale" : "hover:bg-card"
              }`}
            >
              <span className="font-body text-[10px] text-text-muted-custom uppercase">
                {getDayLabel(date)}
              </span>
              <span className="font-body text-xs font-semibold text-text-heading">
                {getDateNum(date)}
              </span>
              {/* Mini bar */}
              <div className="w-3 h-10 rounded-full bg-muted overflow-hidden flex flex-col-reverse">
                <div
                  className={`w-full rounded-full transition-all duration-500 ${getColor(rate)}`}
                  style={{ height: `${Math.max(rate, 4)}%` }}
                />
              </div>
              <span className="font-body text-[9px] text-text-muted-custom">
                {rate}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex gap-4 justify-center flex-wrap">
        {[
          { color: "bg-sage", label: "100%" },
          { color: "bg-secondary", label: "≥50%" },
          { color: "bg-accent", label: "<50%" },
          { color: "bg-muted", label: "0%" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-full ${l.color}`} />
            <span className="font-body text-[10px] text-text-muted-custom">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Read-only modal */}
      <Dialog open={!!selectedDay} onOpenChange={() => setSelectedDay(null)}>
        <DialogContent className="bg-background rounded-2xl max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-heading text-lg">
              {selectedDay && new Date(selectedDay + "T00:00:00").toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </DialogTitle>
            <DialogDescription className="font-body text-sm text-text-muted-custom">
              Riwayat stimulasi — hanya baca
            </DialogDescription>
          </DialogHeader>
          {selectedLog && (
            <div className="space-y-2 mt-2">
              {CATEGORIES.map((cat) => {
                const done = selectedLog[cat];
                const Icon = CATEGORY_ICONS[cat];
                return (
                  <div
                    key={cat}
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      done ? "bg-sage-pale/70" : "bg-muted/50"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${done ? "text-sage" : "text-text-muted-custom"}`} />
                    <span
                      className={`font-body text-sm ${
                        done ? "text-sage font-medium" : "text-text-muted-custom line-through"
                      }`}
                    >
                      {SENSORY_LABELS[cat]}
                    </span>
                    <span className="ml-auto font-body text-xs">
                      {done ? "✓" : "—"}
                    </span>
                  </div>
                );
              })}
              <p className="text-center font-body text-xs text-text-muted-custom pt-2">
                Pencapaian: {selectedLog.completion_rate}%
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WeeklyRetrospective;
