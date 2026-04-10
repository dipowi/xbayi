import { ChecklistItem, SensoryCategory, SENSORY_LABELS } from "@/data/stimulationData";
import {
  Eye,
  Ear,
  Hand,
  Wind,
  Utensils,
  RotateCcw,
  Dumbbell,
  type LucideIcon,
} from "lucide-react";

const CATEGORY_ICONS: Record<SensoryCategory, LucideIcon> = {
  penglihatan: Eye,
  pendengaran: Ear,
  perabaan: Hand,
  penciuman: Wind,
  pengecapan: Utensils,
  vestibular: RotateCcw,
  propriosepsi: Dumbbell,
};

interface SensoryChecklistProps {
  checklist: Record<SensoryCategory, ChecklistItem[]>;
  onToggle: (category: SensoryCategory, itemId: string) => void;
}

const SensoryChecklist = ({ checklist, onToggle }: SensoryChecklistProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-heading text-lg font-semibold text-text-heading">
        Stimulasi 7 Sistem Sensorik
      </h3>
      {(Object.keys(checklist) as SensoryCategory[]).map((category) => {
        const items = checklist[category];
        const Icon = CATEGORY_ICONS[category];
        const doneCount = items.filter((i) => i.completed).length;

        return (
          <div key={category} className="bg-card rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-sage-pale flex items-center justify-center">
                <Icon className="w-4 h-4 text-sage" />
              </div>
              <span className="font-body font-semibold text-sm text-text-heading">
                {SENSORY_LABELS[category]}
              </span>
              <span className="ml-auto text-xs font-body text-text-muted-custom">
                {doneCount}/{items.length}
              </span>
            </div>
            <div className="space-y-1">
              {items.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center gap-3 py-2 px-2 rounded-lg cursor-pointer hover:bg-sage-pale/50 transition-colors duration-150"
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => onToggle(category, item.id)}
                    className="w-5 h-5 rounded border-2 border-divider accent-sage text-sage focus:ring-sage/30 transition-colors"
                  />
                  <span
                    className={`text-sm font-body transition-all duration-300 ${
                      item.completed
                        ? "line-through text-text-muted-custom"
                        : "text-text-body"
                    }`}
                  >
                    {item.task}
                  </span>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SensoryChecklist;
