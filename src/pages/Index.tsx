import { useState, useEffect, useCallback } from "react";
import { getProfile, saveProfile, type BabyProfile } from "@/lib/db";
import OnboardingScreen from "@/components/OnboardingScreen";
import DashboardRouter from "@/components/DashboardRouter";
import WeeklyRetrospective from "@/components/WeeklyRetrospective";
import DangerZone from "@/components/DangerZone";
import { CalendarCheck, History, Settings, Baby } from "lucide-react";

type Tab = "today" | "history" | "settings";

const Index = () => {
  const [profile, setProfile] = useState<BabyProfile | null | undefined>(undefined);
  const [tab, setTab] = useState<Tab>("today");

  useEffect(() => {
    getProfile().then((p) => setProfile(p ?? null));
  }, []);

  const handleOnboard = async (name: string, dob: string) => {
    await saveProfile(name, dob);
    setProfile({ id: "main", name, dob });
  };

  const handleReset = useCallback(async () => {
    const { deleteDatabase } = await import("idb");
    await deleteDatabase("jurnal-stimulasi");
    setProfile(null);
    setTab("today");
  }, []);

  if (profile === undefined) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Baby className="w-8 h-8 text-sage animate-pulse" />
      </div>
    );
  }

  if (profile === null) {
    return <OnboardingScreen onComplete={handleOnboard} />;
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {tab === "today" && <DashboardRouter profile={profile} />}
      {tab === "history" && <WeeklyRetrospective />}
      {tab === "settings" && <DangerZone onReset={handleReset} />}

      <nav className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-md border-t border-divider z-50">
        <div className="max-w-lg mx-auto flex">
          {([
            { key: "today" as Tab, icon: CalendarCheck, label: "Hari Ini" },
            { key: "history" as Tab, icon: History, label: "Riwayat" },
            { key: "settings" as Tab, icon: Settings, label: "Pengaturan" },
          ]).map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
                tab === key ? "text-sage" : "text-muted-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-body text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;
