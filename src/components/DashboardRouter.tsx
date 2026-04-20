import { type BabyProfile, formatDateID, getToday } from "@/lib/db";
import { calculateAgeContext } from "@/data/clinicalData";
import StimulationList from "./StimulationList";
import ProgressRing from "./ProgressRing";
import { useState, useEffect } from "react";
import { getDailyLog, createEmptyLog, saveDailyLog } from "@/lib/db";
import { filterDueActivities } from "@/lib/scheduler";

interface DashboardRouterProps {
  profile: BabyProfile;
}

const DashboardRouter = ({ profile }: DashboardRouterProps) => {
  const ageCtx = calculateAgeContext(profile.dob);
  const today = getToday();
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const allActs = ageCtx.phase.categories.flatMap((c) => c.activities);
    const dueActs = filterDueActivities(allActs, today);
    setTotal(dueActs.length);

    const check = async () => {
      let log = await getDailyLog(today);
      if (!log) {
        log = createEmptyLog(today);
        await saveDailyLog(log);
      }
      const done = dueActs.filter((a) => (log as any)[a.id] === true).length;
      setCompleted(done);
    };
    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, [ageCtx.phase.id, today]);

  return (
    <div className="px-4 pb-8 space-y-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center space-y-1 pt-4">
        <p className="font-body text-sm text-muted-foreground capitalize">
          {formatDateID(today)}
        </p>
        <h2 className="font-heading text-xl font-bold text-foreground">
          Halo, {profile.name} 👋
        </h2>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-block px-3 py-1 rounded-full bg-sage-pale text-sage font-body text-xs font-medium">
            {ageCtx.label}
          </span>
          <span className="inline-block px-3 py-1 rounded-full bg-terra-pale text-secondary font-body text-xs font-medium">
            Usia: {ageCtx.displayAge}
          </span>
        </div>
      </div>

      {/* Progress Ring */}
      <div className="flex justify-center">
        <ProgressRing completed={completed} total={total} size={110} />
      </div>

      {/* Stimulation Activities */}
      <StimulationList phase={ageCtx.phase} dateStr={today} />
    </div>
  );
};

export default DashboardRouter;
