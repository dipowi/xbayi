import { useState, useEffect, useCallback } from "react";
import { type PhaseKey, CLINICAL_DATA } from "@/data/clinicalData";
import { getDailyLog, saveDailyLog, createEmptyLog, getToday } from "@/lib/db";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Sparkles, BookOpen } from "lucide-react";

interface StimulationListProps {
  phaseKey: PhaseKey;
}

const StimulationList = ({ phaseKey }: StimulationListProps) => {
  const phase = CLINICAL_DATA[phaseKey];
  const allActivities = phase.categories.flatMap((c) => c.activities);
  const today = getToday();

  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Load today's completion state from IndexedDB
  useEffect(() => {
    (async () => {
      let log = await getDailyLog(today);
      if (!log) {
        log = createEmptyLog(today);
        await saveDailyLog(log);
      }
      // Read activity-level checks from the log's extras
      const stored: Record<string, boolean> = {};
      for (const act of allActivities) {
        stored[act.id] = (log as any)[act.id] === true;
      }
      setChecked(stored);
    })();
  }, [today, phaseKey]);

  const toggle = useCallback(
    async (activityId: string) => {
      const next = { ...checked, [activityId]: !checked[activityId] };
      setChecked(next);

      // Persist: load log, merge activity checks, save
      let log = (await getDailyLog(today)) || createEmptyLog(today);
      (log as any)[activityId] = next[activityId];

      // Recalculate completion based on checked activities
      const doneCount = allActivities.filter((a) => next[a.id]).length;
      log.completion_rate = Math.round((doneCount / allActivities.length) * 100);
      await saveDailyLog(log);
    },
    [checked, today, allActivities]
  );

  const doneCount = allActivities.filter((a) => checked[a.id]).length;
  const progressPct = allActivities.length > 0 ? Math.round((doneCount / allActivities.length) * 100) : 0;

  return (
    <div className="space-y-5">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-body text-sm font-medium text-text-body">
            Progres Hari Ini
          </span>
          <span className="font-body text-sm font-semibold text-sage">
            {doneCount}/{allActivities.length} Selesai
          </span>
        </div>
        <Progress value={progressPct} className="h-2.5 bg-muted [&>div]:bg-sage [&>div]:rounded-full" />
      </div>

      {/* Categories */}
      {phase.categories.map((category) => (
        <div key={category.name} className="space-y-2">
          <h4 className="font-heading text-base font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary" />
            {category.name}
          </h4>

          <Accordion type="multiple" className="space-y-2">
            {category.activities.map((act) => {
              const isChecked = !!checked[act.id];
              return (
                <AccordionItem
                  key={act.id}
                  value={act.id}
                  className="border-none"
                >
                  <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline gap-3">
                      <div className="flex items-center gap-3 flex-1 text-left">
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={() => toggle(act.id)}
                          onClick={(e) => e.stopPropagation()}
                          className="h-5 w-5 rounded border-2 border-sage/40 data-[state=checked]:bg-sage data-[state=checked]:border-sage shrink-0"
                        />
                        <span
                          className={`font-body text-sm transition-all duration-300 ${
                            isChecked
                              ? "line-through text-muted-foreground"
                              : "text-foreground font-medium"
                          }`}
                        >
                          {act.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-0">
                      <div className="bg-background rounded-xl p-4 space-y-3 border-l-4 border-secondary">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <BookOpen className="w-3.5 h-3.5 text-secondary" />
                            <span className="font-body text-xs font-semibold text-secondary uppercase tracking-wide">
                              Cara
                            </span>
                          </div>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            {act.cara}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <Sparkles className="w-3.5 h-3.5 text-sage" />
                            <span className="font-body text-xs font-semibold text-sage uppercase tracking-wide">
                              Manfaat
                            </span>
                          </div>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            {act.manfaat}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default StimulationList;
