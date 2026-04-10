import { AgeGroupKey, AGE_GROUP_LABELS } from "@/data/stimulationData";
import { useJournalState } from "@/hooks/useJournalState";
import ProgressTracker from "./ProgressTracker";
import SensoryChecklist from "./SensoryChecklist";
import KPSPCard from "./KPSPCard";
import JournalReflection from "./JournalReflection";

interface AgeGroupDashboardProps {
  ageGroup: AgeGroupKey;
}

const AgeGroupDashboard = ({ ageGroup }: AgeGroupDashboardProps) => {
  const {
    data,
    progress,
    completedCount,
    totalCount,
    toggleChecklist,
    toggleMilestone,
    updateJournal,
    getJournalEntry,
  } = useJournalState(ageGroup);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div className="space-y-1">
        <h2 className="font-heading text-2xl font-bold text-text-heading">
          {AGE_GROUP_LABELS[ageGroup]}
        </h2>
        <p className="text-sm font-body text-text-body">
          Stimulasi sensorik & milestone untuk periode ini
        </p>
      </div>

      <ProgressTracker
        completed={completedCount}
        total={totalCount}
        progress={progress}
      />

      <SensoryChecklist
        checklist={data.daily_checklist}
        onToggle={toggleChecklist}
      />

      <KPSPCard
        milestones={data.kpsp_milestones}
        onToggle={toggleMilestone}
      />

      <JournalReflection
        questions={data.journal_questions}
        getEntry={getJournalEntry}
        onUpdate={updateJournal}
      />
    </div>
  );
};

export default AgeGroupDashboard;
