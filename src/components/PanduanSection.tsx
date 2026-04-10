import { BookOpen, Heart, Sparkles } from "lucide-react";

const PanduanSection = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <h2 className="font-heading text-2xl font-bold text-text-heading">
        Panduan Penggunaan
      </h2>

      <div className="space-y-4">
        <div className="bg-card rounded-2xl p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-sage" />
            </div>
            <h3 className="font-heading text-base font-semibold text-text-heading">
              Stimulasi Sensorik Harian
            </h3>
          </div>
          <p className="text-sm font-body text-text-body leading-relaxed">
            Setiap kelompok usia memiliki 7 sistem sensorik yang perlu distimulasi: penglihatan, pendengaran, perabaan, penciuman, pengecapan, vestibular, dan propriosepsi. Centang setiap aktivitas yang sudah dilakukan hari ini.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-terra-pale flex items-center justify-center">
              <Heart className="w-5 h-5 text-terra" />
            </div>
            <h3 className="font-heading text-base font-semibold text-text-heading">
              Milestone KPSP
            </h3>
          </div>
          <p className="text-sm font-body text-text-body leading-relaxed">
            KPSP (Kuesioner Pra Skrining Perkembangan) membantu memantau perkembangan motorik, bahasa, dan sosial bayi. Tandai milestone yang sudah tercapai untuk melacak kemajuan si kecil.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blush-pale flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="font-heading text-base font-semibold text-text-heading">
              Jurnal Refleksi
            </h3>
          </div>
          <p className="text-sm font-body text-text-body leading-relaxed">
            Setiap minggu, luangkan waktu untuk menulis refleksi tentang perkembangan bayi. Jurnal ini membantu Anda mengingat momen penting dan berkonsultasi dengan dokter anak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanduanSection;
