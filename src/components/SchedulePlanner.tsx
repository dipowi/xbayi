import { useState } from "react";

const DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

type ActivityCategory = "sensori" | "motorik" | "sosial";

const CATEGORY_STYLES: Record<ActivityCategory, string> = {
  sensori: "bg-sage-pale text-sage",
  motorik: "bg-terra-pale text-terra",
  sosial: "bg-blush-pale text-accent-foreground",
};

const CATEGORY_LABELS: Record<ActivityCategory, string> = {
  sensori: "Sensori",
  motorik: "Motorik",
  sosial: "Sosial",
};

type CellData = {
  activity: string;
  category: ActivityCategory;
};

const DEFAULT_SCHEDULE: Record<string, Record<string, CellData | null>> = {};
DAYS.forEach((day) => {
  DEFAULT_SCHEDULE[day] = { AM: null, PM: null };
});

const STORAGE_KEY = "jurnal-schedule";

function loadSchedule() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
}

const SchedulePlanner = () => {
  const [schedule, setSchedule] = useState<Record<string, Record<string, CellData | null>>>(loadSchedule);
  const [editing, setEditing] = useState<{ day: string; slot: string } | null>(null);
  const [editValue, setEditValue] = useState("");
  const [editCat, setEditCat] = useState<ActivityCategory>("sensori");

  const save = (updated: typeof schedule) => {
    setSchedule(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleCellClick = (day: string, slot: string) => {
    const existing = schedule[day][slot];
    setEditing({ day, slot });
    setEditValue(existing?.activity ?? "");
    setEditCat(existing?.category ?? "sensori");
  };

  const handleSave = () => {
    if (!editing) return;
    const updated = JSON.parse(JSON.stringify(schedule));
    if (editValue.trim()) {
      updated[editing.day][editing.slot] = { activity: editValue.trim(), category: editCat };
    } else {
      updated[editing.day][editing.slot] = null;
    }
    save(updated);
    setEditing(null);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      <h2 className="font-heading text-2xl font-bold text-text-heading">
        Jadwal Mingguan
      </h2>
      <p className="text-sm font-body text-text-body">
        Rencanakan aktivitas stimulasi AM & PM setiap hari
      </p>

      <div className="flex gap-2 mb-2">
        {(Object.keys(CATEGORY_LABELS) as ActivityCategory[]).map((cat) => (
          <span key={cat} className={`px-3 py-1 rounded-full text-xs font-body font-medium ${CATEGORY_STYLES[cat]}`}>
            {CATEGORY_LABELS[cat]}
          </span>
        ))}
      </div>

      <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm font-body">
          <thead>
            <tr className="border-b border-divider">
              <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted-custom uppercase tracking-wider">Hari</th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted-custom uppercase tracking-wider">AM</th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted-custom uppercase tracking-wider">PM</th>
            </tr>
          </thead>
          <tbody>
            {DAYS.map((day) => (
              <tr key={day} className="border-b border-divider/50 last:border-b-0">
                <td className="py-3 px-4 font-medium text-text-heading">{day}</td>
                {["AM", "PM"].map((slot) => {
                  const cell = schedule[day][slot];
                  return (
                    <td key={slot} className="py-3 px-4">
                      {editing?.day === day && editing?.slot === slot ? (
                        <div className="flex flex-col gap-2">
                          <input
                            autoFocus
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            placeholder="Aktivitas..."
                            className="w-full px-2 py-1.5 text-xs rounded-lg border border-divider bg-background focus:border-sage focus:outline-none"
                          />
                          <div className="flex gap-1">
                            {(Object.keys(CATEGORY_LABELS) as ActivityCategory[]).map((cat) => (
                              <button
                                key={cat}
                                onClick={() => setEditCat(cat)}
                                className={`px-2 py-0.5 rounded-full text-xs ${
                                  editCat === cat
                                    ? CATEGORY_STYLES[cat] + " ring-1 ring-sage"
                                    : "bg-muted text-text-muted-custom"
                                }`}
                              >
                                {CATEGORY_LABELS[cat]}
                              </button>
                            ))}
                          </div>
                          <div className="flex gap-1">
                            <button onClick={handleSave} className="px-3 py-1 bg-sage text-primary-foreground rounded-full text-xs font-medium">
                              Simpan
                            </button>
                            <button onClick={() => setEditing(null)} className="px-3 py-1 bg-muted text-text-body rounded-full text-xs">
                              Batal
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleCellClick(day, slot)}
                          className="w-full text-left min-h-[32px] rounded-lg hover:bg-sage-pale/50 transition-colors px-2 py-1"
                        >
                          {cell ? (
                            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${CATEGORY_STYLES[cell.category]}`}>
                              {cell.activity}
                            </span>
                          ) : (
                            <span className="text-xs text-text-muted-custom">+ Tambah</span>
                          )}
                        </button>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchedulePlanner;
