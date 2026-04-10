interface JournalReflectionProps {
  questions: string[];
  getEntry: (index: number) => string;
  onUpdate: (index: number, value: string) => void;
}

const JournalReflection = ({ questions, getEntry, onUpdate }: JournalReflectionProps) => {
  return (
    <div className="space-y-3">
      <h3 className="font-heading text-lg font-semibold text-text-heading">
        Jurnal Refleksi Mingguan
      </h3>
      {questions.map((q, idx) => (
        <div key={idx} className="border-l-4 border-terra bg-cream-dark p-4 rounded-r-2xl">
          <label className="block text-sm font-body font-medium text-text-heading mb-2">
            {q}
          </label>
          <textarea
            value={getEntry(idx)}
            onChange={(e) => onUpdate(idx, e.target.value)}
            placeholder="Tulis catatan Anda di sini..."
            rows={3}
            className="w-full bg-background/50 rounded-lg p-3 text-sm font-body text-text-body placeholder:text-text-muted-custom border border-transparent focus:border-terra focus:outline-none focus:ring-1 focus:ring-terra/30 transition-colors resize-none"
          />
        </div>
      ))}
    </div>
  );
};

export default JournalReflection;
