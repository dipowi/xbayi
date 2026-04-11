import { useState } from "react";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { CalendarIcon, Baby, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface OnboardingScreenProps {
  onComplete: (name: string, dob: string) => void;
}

const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState<Date>();

  const handleSubmit = () => {
    if (!name.trim() || !date) return;
    const dob = date.toISOString().slice(0, 10);
    onComplete(name.trim(), dob);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-sage-pale flex items-center justify-center mx-auto">
            <Baby className="w-8 h-8 text-sage" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-text-heading">
            Jurnal Stimulasi Bayi
          </h1>
          <p className="font-body text-sm text-text-body">
            Pantau perkembangan sensorik si kecil setiap hari
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="font-body text-sm font-medium text-text-heading">
              Nama Bayi
            </label>
            <Input
              placeholder="Masukkan nama bayi"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-card border-divider rounded-xl h-12 font-body text-text-heading placeholder:text-text-muted-custom"
            />
          </div>

          <div className="space-y-2">
            <label className="font-body text-sm font-medium text-text-heading">
              Tanggal Lahir
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-body h-12 rounded-xl bg-card border-divider",
                    !date && "text-text-muted-custom"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "dd MMMM yyyy", { locale: idLocale }) : "Pilih tanggal lahir"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d > new Date() || d < new Date("2024-01-01")}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          disabled={!name.trim() || !date}
          className="w-full h-12 rounded-full bg-sage text-primary-foreground font-body font-semibold text-base hover:bg-sage-light transition-all hover:-translate-y-0.5 shadow-md disabled:opacity-40"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Mulai Jurnal
        </Button>

        <p className="text-center text-xs font-body text-text-muted-custom">
          Data tersimpan di perangkat Anda
        </p>
      </div>
    </div>
  );
};

export default OnboardingScreen;
