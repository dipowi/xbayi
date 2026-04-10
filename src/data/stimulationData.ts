export type ChecklistItem = {
  id: string;
  task: string;
  completed: boolean;
};

export type SensoryCategory =
  | "penglihatan"
  | "pendengaran"
  | "perabaan"
  | "penciuman"
  | "pengecapan"
  | "vestibular"
  | "propriosepsi";

export const SENSORY_LABELS: Record<SensoryCategory, string> = {
  penglihatan: "Penglihatan",
  pendengaran: "Pendengaran",
  perabaan: "Perabaan",
  penciuman: "Penciuman",
  pengecapan: "Pengecapan",
  vestibular: "Vestibular",
  propriosepsi: "Propriosepsi",
};

export type KPSPItem = {
  id: string;
  task: string;
  achieved: boolean;
};

export type JournalEntries = Record<string, string>;

export type AgeGroupKey =
  | "0-3"
  | "3-6"
  | "6-9"
  | "9-12"
  | "12-15"
  | "15-18"
  | "18-24";

export const AGE_GROUP_LABELS: Record<AgeGroupKey, string> = {
  "0-3": "0–3 Bulan",
  "3-6": "3–6 Bulan",
  "6-9": "6–9 Bulan",
  "9-12": "9–12 Bulan",
  "12-15": "12–15 Bulan",
  "15-18": "15–18 Bulan",
  "18-24": "18–24 Bulan",
};

export type AgeGroupData = {
  daily_checklist: Record<SensoryCategory, ChecklistItem[]>;
  kpsp_milestones: KPSPItem[];
  journal_questions: string[];
  journal_entries?: Record<string, string>;
};

const DEFAULT_DATA: Record<AgeGroupKey, AgeGroupData> = {
  "0-3": {
    daily_checklist: {
      penglihatan: [
        { id: "v1", task: "Bermain contrast book (hitam-putih)", completed: false },
        { id: "v2", task: "Mengikuti gerakan mainan warna terang", completed: false },
        { id: "v3", task: "Kontak mata saat menyusui", completed: false },
      ],
      pendengaran: [
        { id: "a1", task: "Bercerita/bernyanyi saat menyusui", completed: false },
        { id: "a2", task: "Memperdengarkan suara alam/musik lembut", completed: false },
        { id: "a3", task: "Memanggil nama bayi dari berbagai arah", completed: false },
      ],
      perabaan: [
        { id: "t1", task: "Pijat bayi lembut (5-10 menit)", completed: false },
        { id: "t2", task: "Sentuh dengan tekstur berbeda (halus, kasar)", completed: false },
        { id: "t3", task: "Skin-to-skin contact", completed: false },
      ],
      penciuman: [
        { id: "s1", task: "Kenalkan aroma alami (bunga, buah)", completed: false },
        { id: "s2", task: "Dekatkan baju ibu untuk kenyamanan", completed: false },
      ],
      pengecapan: [
        { id: "g1", task: "ASI eksklusif (stimulasi rasa alami)", completed: false },
      ],
      vestibular: [
        { id: "ve1", task: "Tummy time 1-3 menit", completed: false },
        { id: "ve2", task: "Goyangkan lembut saat digendong", completed: false },
        { id: "ve3", task: "Ayunkan pelan di ayunan bayi", completed: false },
      ],
      propriosepsi: [
        { id: "p1", task: "Pegang & lepas jari orang tua", completed: false },
        { id: "p2", task: "Gerakkan tangan & kaki bayi lembut", completed: false },
      ],
    },
    kpsp_milestones: [
      { id: "m1", task: "Mengikuti gerakan bola wool merah", achieved: false },
      { id: "m2", task: "Mempertahankan leher tegak saat tengkurap", achieved: false },
      { id: "m3", task: "Refleks Moro masih ada", achieved: false },
      { id: "m4", task: "Tersenyum sosial spontan", achieved: false },
      { id: "m5", task: "Bereaksi terhadap suara keras", achieved: false },
      { id: "m6", task: "Menggenggam benda yang disentuhkan", achieved: false },
    ],
    journal_questions: [
      "Apa milestone baru yang dicapai minggu ini?",
      "Bagaimana respons bayi terhadap stimulasi hari ini?",
      "Catatan perkembangan lainnya",
    ],
  },
  "3-6": {
    daily_checklist: {
      penglihatan: [
        { id: "v1", task: "Bermain peek-a-boo", completed: false },
        { id: "v2", task: "Tunjukkan mainan warna-warni", completed: false },
        { id: "v3", task: "Cermin bayi (lihat refleksi diri)", completed: false },
      ],
      pendengaran: [
        { id: "a1", task: "Mainkan bunyi rattle/kerincingan", completed: false },
        { id: "a2", task: "Bacakan buku cerita pendek", completed: false },
        { id: "a3", task: "Ajak bicara & respons celotehan bayi", completed: false },
      ],
      perabaan: [
        { id: "t1", task: "Bermain sensory mat/textured toys", completed: false },
        { id: "t2", task: "Main air hangat (supervised)", completed: false },
        { id: "t3", task: "Pijat bayi rutin", completed: false },
      ],
      penciuman: [
        { id: "s1", task: "Kenalkan aroma makanan saat masak", completed: false },
        { id: "s2", task: "Aroma terapi lavender sebelum tidur", completed: false },
      ],
      pengecapan: [
        { id: "g1", task: "Perkenalan MPASI awal (jika 6 bulan)", completed: false },
      ],
      vestibular: [
        { id: "ve1", task: "Tummy time 5-10 menit", completed: false },
        { id: "ve2", task: "Duduk dengan support/bantal", completed: false },
        { id: "ve3", task: "Berguling latihan", completed: false },
      ],
      propriosepsi: [
        { id: "p1", task: "Meraih & menggenggam mainan", completed: false },
        { id: "p2", task: "Memindahkan benda antar tangan", completed: false },
      ],
    },
    kpsp_milestones: [
      { id: "m1", task: "Tengkurap dan mengangkat dada", achieved: false },
      { id: "m2", task: "Berguling dari tengkurap ke telentang", achieved: false },
      { id: "m3", task: "Meraih benda di depannya", achieved: false },
      { id: "m4", task: "Tertawa keras", achieved: false },
      { id: "m5", task: "Menoleh ke sumber suara", achieved: false },
      { id: "m6", task: "Duduk dengan bantuan", achieved: false },
    ],
    journal_questions: [
      "Apa milestone baru yang dicapai minggu ini?",
      "Bagaimana respons bayi terhadap stimulasi hari ini?",
      "Catatan perkembangan lainnya",
    ],
  },
  "6-9": {
    daily_checklist: {
      penglihatan: [
        { id: "v1", task: "Bermain cilukba dengan variasi", completed: false },
        { id: "v2", task: "Tunjukkan buku bergambar warna cerah", completed: false },
      ],
      pendengaran: [
        { id: "a1", task: "Bernyanyi bersama", completed: false },
        { id: "a2", task: "Mainkan alat musik sederhana", completed: false },
      ],
      perabaan: [
        { id: "t1", task: "Bermain finger food tekstur berbeda", completed: false },
        { id: "t2", task: "Main pasir kinetik (supervised)", completed: false },
      ],
      penciuman: [
        { id: "s1", task: "Kenalkan bau bumbu dapur aman", completed: false },
      ],
      pengecapan: [
        { id: "g1", task: "Variasi rasa MPASI", completed: false },
        { id: "g2", task: "Finger food lembut", completed: false },
      ],
      vestibular: [
        { id: "ve1", task: "Merangkak di permukaan berbeda", completed: false },
        { id: "ve2", task: "Duduk tanpa bantuan", completed: false },
      ],
      propriosepsi: [
        { id: "p1", task: "Bermain tarik-dorong mainan", completed: false },
        { id: "p2", task: "Tepuk tangan & main pukul drum", completed: false },
      ],
    },
    kpsp_milestones: [
      { id: "m1", task: "Duduk tanpa bantuan", achieved: false },
      { id: "m2", task: "Merangkak", achieved: false },
      { id: "m3", task: "Mengambil benda kecil dengan jari", achieved: false },
      { id: "m4", task: "Babbling (mama, dada)", achieved: false },
      { id: "m5", task: "Stranger anxiety muncul", achieved: false },
    ],
    journal_questions: [
      "Apa milestone baru yang dicapai minggu ini?",
      "Bagaimana respons bayi terhadap stimulasi hari ini?",
      "Catatan perkembangan lainnya",
    ],
  },
  "9-12": {
    daily_checklist: {
      penglihatan: [
        { id: "v1", task: "Main tumpuk balok warna", completed: false },
        { id: "v2", task: "Tunjuk & sebut nama benda", completed: false },
      ],
      pendengaran: [
        { id: "a1", task: "Respons instruksi sederhana", completed: false },
        { id: "a2", task: "Dengarkan lagu & gerak bersama", completed: false },
      ],
      perabaan: [
        { id: "t1", task: "Main playdough aman", completed: false },
        { id: "t2", task: "Eksplorasi tekstur outdoor (rumput, daun)", completed: false },
      ],
      penciuman: [
        { id: "s1", task: "Cium & kenalkan buah segar", completed: false },
      ],
      pengecapan: [
        { id: "g1", task: "Self-feeding finger food", completed: false },
      ],
      vestibular: [
        { id: "ve1", task: "Berdiri berpegangan", completed: false },
        { id: "ve2", task: "Jalan merambat", completed: false },
      ],
      propriosepsi: [
        { id: "p1", task: "Main lempar-tangkap bola lembut", completed: false },
        { id: "p2", task: "Naik-turun dari sofa rendah", completed: false },
      ],
    },
    kpsp_milestones: [
      { id: "m1", task: "Berdiri berpegangan", achieved: false },
      { id: "m2", task: "Jalan merambat", achieved: false },
      { id: "m3", task: "Mengatakan 1-2 kata bermakna", achieved: false },
      { id: "m4", task: "Menunjuk benda yang diinginkan", achieved: false },
      { id: "m5", task: "Melambaikan tangan (da-da)", achieved: false },
    ],
    journal_questions: [
      "Apa milestone baru yang dicapai minggu ini?",
      "Bagaimana respons bayi terhadap stimulasi hari ini?",
      "Catatan perkembangan lainnya",
    ],
  },
  "12-15": {
    daily_checklist: {
      penglihatan: [
        { id: "v1", task: "Bermain puzzle sederhana (2-3 pcs)", completed: false },
        { id: "v2", task: "Mencoret-coret dengan crayon jumbo", completed: false },
      ],
      pendengaran: [
        { id: "a1", task: "Menyebut nama anggota tubuh", completed: false },
        { id: "a2", task: "Bernyanyi dengan gerakan", completed: false },
      ],
      perabaan: [
        { id: "t1", task: "Main air & tuang-menuang", completed: false },
        { id: "t2", task: "Bermain pasir/beras", completed: false },
      ],
      penciuman: [
        { id: "s1", task: "Kenalkan aroma rempah & bunga", completed: false },
      ],
      pengecapan: [
        { id: "g1", task: "Makan sendiri dengan sendok", completed: false },
      ],
      vestibular: [
        { id: "ve1", task: "Berjalan beberapa langkah sendiri", completed: false },
        { id: "ve2", task: "Naik tangga dengan bantuan", completed: false },
      ],
      propriosepsi: [
        { id: "p1", task: "Mendorong mainan beroda", completed: false },
        { id: "p2", task: "Main bola tendang", completed: false },
      ],
    },
    kpsp_milestones: [
      { id: "m1", task: "Berjalan sendiri", achieved: false },
      { id: "m2", task: "Mengatakan 3-5 kata", achieved: false },
      { id: "m3", task: "Menunjuk apa yang diinginkan", achieved: false },
      { id: "m4", task: "Minum dari cangkir", achieved: false },
    ],
    journal_questions: [
      "Apa milestone baru yang dicapai minggu ini?",
      "Bagaimana respons bayi terhadap stimulasi hari ini?",
      "Catatan perkembangan lainnya",
    ],
  },
  "15-18": {
    daily_checklist: {
      penglihatan: [
        { id: "v1", task: "Bermain sorting shapes", completed: false },
        { id: "v2", task: "Mencoret dengan pola", completed: false },
      ],
      pendengaran: [
        { id: "a1", task: "Ikuti instruksi 2 langkah", completed: false },
        { id: "a2", task: "Bacakan buku & tanya isi", completed: false },
      ],
      perabaan: [
        { id: "t1", task: "Bermain finger painting", completed: false },
        { id: "t2", task: "Main playdough bentuk-bentuk", completed: false },
      ],
      penciuman: [
        { id: "s1", task: "Identifikasi bau makanan", completed: false },
      ],
      pengecapan: [
        { id: "g1", task: "Coba variasi tekstur makanan baru", completed: false },
      ],
      vestibular: [
        { id: "ve1", task: "Berlari pendek", completed: false },
        { id: "ve2", task: "Naik-turun tangga", completed: false },
      ],
      propriosepsi: [
        { id: "p1", task: "Lempar bola ke keranjang", completed: false },
        { id: "p2", task: "Dorong-tarik mainan besar", completed: false },
      ],
    },
    kpsp_milestones: [
      { id: "m1", task: "Berlari walau belum stabil", achieved: false },
      { id: "m2", task: "Mengatakan 5-10 kata", achieved: false },
      { id: "m3", task: "Menumpuk 2-3 balok", achieved: false },
      { id: "m4", task: "Menunjuk gambar di buku", achieved: false },
    ],
    journal_questions: [
      "Apa milestone baru yang dicapai minggu ini?",
      "Bagaimana respons bayi terhadap stimulasi hari ini?",
      "Catatan perkembangan lainnya",
    ],
  },
  "18-24": {
    daily_checklist: {
      penglihatan: [
        { id: "v1", task: "Bermain puzzle 4-6 keping", completed: false },
        { id: "v2", task: "Menggambar garis & lingkaran", completed: false },
      ],
      pendengaran: [
        { id: "a1", task: "Menceritakan ulang cerita pendek", completed: false },
        { id: "a2", task: "Bernyanyi bersama lagu favorit", completed: false },
      ],
      perabaan: [
        { id: "t1", task: "Bermain sensory bin (beras, pasta)", completed: false },
        { id: "t2", task: "Main dengan air & sabun", completed: false },
      ],
      penciuman: [
        { id: "s1", task: "Tebak-tebakan bau buah", completed: false },
      ],
      pengecapan: [
        { id: "g1", task: "Makan beragam makanan keluarga", completed: false },
      ],
      vestibular: [
        { id: "ve1", task: "Melompat di tempat", completed: false },
        { id: "ve2", task: "Berjalan di garis lurus", completed: false },
      ],
      propriosepsi: [
        { id: "p1", task: "Menendang bola ke target", completed: false },
        { id: "p2", task: "Memanjat playground kecil", completed: false },
      ],
    },
    kpsp_milestones: [
      { id: "m1", task: "Kalimat 2 kata (mama makan)", achieved: false },
      { id: "m2", task: "Naik tangga sendiri", achieved: false },
      { id: "m3", task: "Menumpuk 4-6 balok", achieved: false },
      { id: "m4", task: "Bermain pura-pura (pretend play)", achieved: false },
      { id: "m5", task: "Menunjukkan bagian tubuh saat ditanya", achieved: false },
    ],
    journal_questions: [
      "Apa milestone baru yang dicapai minggu ini?",
      "Bagaimana respons bayi terhadap stimulasi hari ini?",
      "Catatan perkembangan lainnya",
    ],
  },
};

export function getDefaultData(ageGroup: AgeGroupKey): AgeGroupData {
  return JSON.parse(JSON.stringify(DEFAULT_DATA[ageGroup]));
}
