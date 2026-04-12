import { useState, useEffect, useCallback } from "react";
import { type StimPhase } from "@/data/stimulasiDB";
import { getDailyLog, saveDailyLog, createEmptyLog, getToday } from "@/lib/db";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Sparkles, BookOpen, Lightbulb, ListChecks } from "lucide-react";

interface StimulationListProps {
  phase: StimPhase;
}

const StimulationList = ({ phase }: StimulationListProps) => {
  const allActivities = phase.categories.flatMap((c) => c.activities);
  const today = getToday();

  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    (async () => {
      let log = await getDailyLog(today);
      if (!log) {
        log = createEmptyLog(today);
        await saveDailyLog(log);
      }
      const stored: Record<string, boolean> = {};
      for (const act of allActivities) {
        stored[act.id] = (log as any)[act.id] === true;
      }
      setChecked(stored);
    })();
  }, [today, phase.id]);

  const toggle = useCallback(
    async (activityId: string) => {
      const next = { ...checked, [activityId]: !checked[activityId] };
      setChecked(next);

      let log = (await getDailyLog(today)) || createEmptyLog(today);
      (log as any)[activityId] = next[activityId];

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
        <div key={category.id} className="space-y-2">
          <h4 className="font-heading text-base font-semibold text-foreground flex items-center gap-2">
            <span className="text-lg">{category.icon}</span>
            {category.label}
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
                        {/* Description */}
                        <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                          {act.description}
                        </p>

                        {/* Steps */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <ListChecks className="w-3.5 h-3.5 text-secondary" />
                            <span className="font-body text-xs font-semibold text-secondary uppercase tracking-wide">
                              Langkah-langkah
                            </span>
                          </div>
                          <ol className="list-decimal list-inside space-y-1">
                            {act.steps.map((step, i) => (
                              <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed">
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>

                        {/* Tips */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <Lightbulb className="w-3.5 h-3.5 text-sage" />
                            <span className="font-body text-xs font-semibold text-sage uppercase tracking-wide">
                              Tips
                            </span>
                          </div>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            {act.tips}
                          </p>
                        </div>

                        {/* Frequency */}
                        {act.frequency && (
                          <div className="flex items-center gap-1.5 pt-1">
                            <Sparkles className="w-3.5 h-3.5 text-secondary/70" />
                            <span className="font-body text-xs text-secondary/70">
                              Frekuensi: {act.frequency}
                            </span>
                          </div>
                        )}
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
