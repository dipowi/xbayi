import { KPSPItem } from "@/data/stimulationData";
import { Star } from "lucide-react";

interface KPSPCardProps {
  milestones: KPSPItem[];
  onToggle: (id: string) => void;
}

const KPSPCard = ({ milestones, onToggle }: KPSPCardProps) => {
  const achieved = milestones.filter((m) => m.achieved).length;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold text-text-heading">
          Milestone KPSP
        </h3>
        <span className="text-xs font-body px-3 py-1 rounded-full bg-terra-pale text-terra font-medium">
          {achieved}/{milestones.length} tercapai
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {milestones.map((m) => (
          <button
            key={m.id}
            onClick={() => onToggle(m.id)}
            className={`flex items-start gap-3 p-4 rounded-2xl text-left transition-all duration-200 shadow-sm hover:shadow-md ${
              m.achieved
                ? "bg-sage-pale border border-sage/20"
                : "bg-card border border-transparent"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                m.achieved ? "bg-sage text-primary-foreground" : "bg-muted text-text-muted-custom"
              }`}
            >
              <Star className="w-4 h-4" />
            </div>
            <span
              className={`text-sm font-body leading-snug ${
                m.achieved ? "text-sage font-medium" : "text-text-body"
              }`}
            >
              {m.task}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default KPSPCard;
