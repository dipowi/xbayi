import { useRef, useEffect } from "react";
import { AgeGroupKey, AGE_GROUP_LABELS } from "@/data/stimulationData";

const NAV_ITEMS: { key: string; label: string }[] = [
  { key: "panduan", label: "Panduan" },
  ...Object.entries(AGE_GROUP_LABELS).map(([key, label]) => ({
    key,
    label: label.replace(" Bulan", " Bln"),
  })),
  { key: "jadwal", label: "Jadwal" },
];

interface StickyNavProps {
  activeKey: string;
  onSelect: (key: string) => void;
}

const StickyNav = ({ activeKey, onSelect }: StickyNavProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const el = activeRef.current;
      const left = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeKey]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-divider">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide px-4 gap-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeKey === item.key;
          return (
            <button
              key={item.key}
              ref={isActive ? activeRef : undefined}
              onClick={() => onSelect(item.key)}
              className={`whitespace-nowrap px-4 py-3 text-sm font-body font-medium transition-colors duration-200 border-b-2 shrink-0 ${
                isActive
                  ? "border-sage text-sage"
                  : "border-transparent text-text-body hover:text-text-heading"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default StickyNav;
