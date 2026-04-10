interface ProgressTrackerProps {
  completed: number;
  total: number;
  progress: number;
}

const ProgressTracker = ({ completed, total, progress }: ProgressTrackerProps) => {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold text-text-heading">
          Progress Hari Ini
        </h3>
        <span className="text-sm font-body font-semibold text-sage">
          {completed}/{total}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-sage h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-text-body font-body">
        {progress}% stimulasi harian selesai
      </p>
    </div>
  );
};

export default ProgressTracker;
