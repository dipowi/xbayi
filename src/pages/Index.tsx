import { useState } from "react";
import CoverSection from "@/components/CoverSection";
import StickyNav from "@/components/StickyNav";
import AgeGroupDashboard from "@/components/AgeGroupDashboard";
import SchedulePlanner from "@/components/SchedulePlanner";
import PanduanSection from "@/components/PanduanSection";
import { AgeGroupKey, AGE_GROUP_LABELS } from "@/data/stimulationData";

const AGE_KEYS = Object.keys(AGE_GROUP_LABELS) as AgeGroupKey[];

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [activeKey, setActiveKey] = useState<string>("0-3");

  if (!showDashboard) {
    return <CoverSection onEnter={() => setShowDashboard(true)} />;
  }

  const renderContent = () => {
    if (activeKey === "panduan") return <PanduanSection />;
    if (activeKey === "jadwal") return <SchedulePlanner />;
    if (AGE_KEYS.includes(activeKey as AgeGroupKey)) {
      return <AgeGroupDashboard ageGroup={activeKey as AgeGroupKey} />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyNav activeKey={activeKey} onSelect={setActiveKey} />
      {renderContent()}
    </div>
  );
};

export default Index;
