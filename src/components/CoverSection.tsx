import { Baby, BookOpen, CalendarDays, ClipboardCheck } from "lucide-react";

interface CoverSectionProps {
  onEnter: () => void;
}

const badges = [
  { icon: ClipboardCheck, label: "Ceklis Harian" },
  { icon: CalendarDays, label: "Jadwal Mingguan" },
  { icon: BookOpen, label: "Jurnal Refleksi" },
  { icon: Baby, label: "KPSP Milestone" },
];

const CoverSection = ({ onEnter }: CoverSectionProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-sage/20 via-sage-pale to-background">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage/10 mb-4">
            <Baby className="w-10 h-10 text-sage" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-text-heading leading-tight">
            Jurnal Stimulasi Bayi
            <br />
            <span className="text-sage">0 – 24 Bulan</span>
          </h1>
          <p className="text-text-body text-sm mt-3 leading-relaxed">
            Panduan stimulasi sensorik harian, tracking milestone KPSP, dan jurnal refleksi mingguan untuk tumbuh kembang optimal si kecil.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium font-body bg-sage/10 text-sage border border-sage/20 backdrop-blur-sm"
            >
              <b.icon className="w-3.5 h-3.5" />
              {b.label}
            </span>
          ))}
        </div>

        <button
          onClick={onEnter}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-sage text-primary-foreground font-body font-semibold text-sm shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
        >
          Mulai Jurnal
        </button>
      </div>
    </div>
  );
};

export default CoverSection;
