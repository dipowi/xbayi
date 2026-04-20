import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import {
  CalendarIcon,
  Baby,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { calculateAgeContext } from "@/data/clinicalData";

interface OnboardingScreenProps {
  onComplete: (name: string, dob: string) => void;
}

type Step = 0 | 1 | 2 | 3; // 0 welcome, 1 name, 2 dob, 3 graduation

const slideVariants = {
  enter: { x: 40, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -40, opacity: 0 },
};

const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [step, setStep] = useState<Step>(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState<Date>();

  const ageInfo = useMemo(() => {
    if (!date) return null;
    const dob = date.toISOString().slice(0, 10);
    const ctx = calculateAgeContext(dob);
    return { ...ctx, dob, isGraduated: ctx.months >= 24 };
  }, [date]);

  const handleNext = () => {
    if (step === 0) setStep(1);
    else if (step === 1 && name.trim()) setStep(2);
    else if (step === 2 && ageInfo) {
      if (ageInfo.isGraduated) setStep(3);
      else onComplete(name.trim(), ageInfo.dob);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep((step - 1) as Step);
  };

  const handleRestart = () => {
    setName("");
    setDate(undefined);
    setStep(0);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress dots */}
      {step < 3 && (
        <div className="pt-8 pb-4 px-6 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === step ? "w-8 bg-sage" : i < step ? "w-1.5 bg-sage/60" : "w-1.5 bg-sage/20"
              )}
            />
          ))}
        </div>
      )}

      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-[460px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="welcome"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-center space-y-8"
              >
                <div className="relative w-28 h-28 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-sage-pale animate-pulse" />
                  <div className="relative w-full h-full rounded-full bg-sage-pale flex items-center justify-center">
                    <Baby className="w-14 h-14 text-sage" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-heading leading-tight">
                    Selamat Datang di
                    <br />
                    Jurnal Bidan Amanah
                  </h1>
                  <p className="font-body text-base text-text-body leading-relaxed max-w-sm mx-auto">
                    Pendamping stimulasi tumbuh kembang si kecil di Masa Emas{" "}
                    <span className="text-sage font-medium">0–24 bulan</span>.
                  </p>
                </div>
                <Button
                  onClick={handleNext}
                  className="w-full h-13 py-3.5 rounded-full bg-sage text-primary-foreground font-body font-semibold text-base hover:bg-sage-light transition-all"
                >
                  Mulai
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs font-body text-text-muted-custom flex items-center justify-center gap-1.5">
                  <Heart className="w-3 h-3" /> Data tersimpan aman di perangkat Anda
                </p>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="name"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="space-y-2 text-center">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading">
                    Siapa nama buah hati Anda?
                  </h2>
                  <p className="font-body text-sm text-text-body">
                    Kami akan menyapanya setiap hari di jurnal ini.
                  </p>
                </div>
                <div className="pt-4">
                  <Input
                    autoFocus
                    placeholder="Nama buah hati"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && name.trim() && handleNext()}
                    className="h-14 text-center font-heading text-xl bg-transparent border-0 border-b-2 border-divider rounded-none focus-visible:ring-0 focus-visible:border-sage placeholder:text-text-muted-custom/60 transition-colors"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={handleBack}
                    variant="ghost"
                    className="h-12 px-5 rounded-full font-body text-text-body"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Kembali
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!name.trim()}
                    className="flex-1 h-12 rounded-full bg-sage text-primary-foreground font-body font-semibold hover:bg-sage-light transition-all disabled:opacity-30"
                  >
                    Lanjutkan <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="dob"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="space-y-2 text-center">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading">
                    Kapan {name || "ia"} lahir?
                  </h2>
                  <p className="font-body text-sm text-text-body">
                    Tanggal lahir membantu kami menyusun stimulasi yang tepat.
                  </p>
                </div>

                <div className="space-y-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-body h-14 rounded-2xl bg-card border-divider text-base",
                          !date && "text-text-muted-custom"
                        )}
                      >
                        <CalendarIcon className="mr-3 h-5 w-5 text-sage" />
                        {date
                          ? format(date, "dd MMMM yyyy", { locale: idLocale })
                          : "Pilih tanggal lahir"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d > new Date() || d < new Date("2020-01-01")}
                        initialFocus
                        defaultMonth={date}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>

                  <AnimatePresence>
                    {ageInfo && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex justify-center"
                      >
                        <div
                          className={cn(
                            "inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-medium",
                            ageInfo.isGraduated
                              ? "bg-terra-pale text-secondary"
                              : "bg-sage-pale text-sage"
                          )}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          Usia: {ageInfo.displayAge}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={handleBack}
                    variant="ghost"
                    className="h-12 px-5 rounded-full font-body text-text-body"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Kembali
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!date}
                    className="flex-1 h-12 rounded-full bg-sage text-primary-foreground font-body font-semibold hover:bg-sage-light transition-all disabled:opacity-30"
                  >
                    {ageInfo?.isGraduated ? "Lanjutkan" : "Mulai Jurnal"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && ageInfo && (
              <motion.div
                key="graduation"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center space-y-7"
              >
                <div className="relative w-28 h-28 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-terra-pale" />
                  <div className="relative w-full h-full rounded-full bg-terra-pale flex items-center justify-center">
                    <GraduationCap className="w-14 h-14 text-secondary" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h1 className="font-heading text-2xl md:text-3xl font-bold text-text-heading leading-tight">
                    Selamat! 🎉
                  </h1>
                  <p className="font-body text-base text-text-heading leading-relaxed">
                    Buah hati Anda telah melewati Masa Emas{" "}
                    <span className="font-semibold text-secondary">
                      1000 Hari Pertama Kehidupan
                    </span>
                    .
                  </p>
                  <div className="bg-card border border-divider rounded-2xl p-5 text-left">
                    <p className="font-body text-sm text-text-body leading-relaxed">
                      Jurnal Bidan Amanah dirancang khusus untuk memantau stimulasi intensif
                      dari usia <span className="font-medium text-text-heading">0 hingga 24 bulan</span>.
                      Karena {name || "buah hati Anda"} sudah melewati fase ini, Anda dapat
                      tetap melihat panduan umum, namun{" "}
                      <span className="font-medium text-text-heading">
                        ceklis harian otomatis dinonaktifkan
                      </span>
                      .
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button
                    onClick={() => onComplete(name.trim(), ageInfo.dob)}
                    className="w-full h-12 rounded-full bg-secondary text-primary-foreground font-body font-semibold hover:opacity-90 transition-all"
                  >
                    Lihat Panduan Umum
                  </Button>
                  <Button
                    onClick={handleRestart}
                    variant="ghost"
                    className="w-full h-11 rounded-full font-body text-text-body"
                  >
                    Mulai Ulang
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
