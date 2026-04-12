export interface Activity {
  id: string;
  title: string;
  cara: string;
  manfaat: string;
}

export interface Category {
  name: string;
  activities: Activity[];
}

export interface PhaseData {
  label: string;
  categories: Category[];
}

export type PhaseKey = "0_3_months" | "3_6_months" | "6_9_months" | "9_12_months" | "12_18_months" | "18_24_months";

export const CLINICAL_DATA: Record<PhaseKey, PhaseData> = {
  "0_3_months": {
    label: "0 – 3 Bulan",
    categories: [
      {
        name: "Penglihatan & Pendengaran",
        activities: [
          { id: "03_v1", title: "Menatap Wajah & Mata", cara: "Posisikan wajah ibu/ayah pada jarak 20-30 cm dari wajah bayi. Ajak bicara dengan lembut.", manfaat: "Melatih fokus mata (jarak pandang newborn) dan bonding." },
          { id: "03_v2", title: "Flashcard Hitam Putih", cara: "Tunjukkan gambar kontras tinggi (hitam, putih, merah). Gerakkan perlahan ke kiri dan kanan.", manfaat: "Melatih pelacakan visual (visual tracking)." },
          { id: "03_a1", title: "Suara Parentese", cara: "Bicara atau bernyanyi dengan nada tinggi berirama. Panggil namanya dari sisi kanan/kiri.", manfaat: "Membangun fondasi bahasa dan respons arah suara." },
        ],
      },
      {
        name: "Motorik & Perabaan",
        activities: [
          { id: "03_m1", title: "Tummy Time", cara: "Tengkurapkan bayi di atas dada atau kasur datar selama 1-3 menit saat ia bangun dan mood baik.", manfaat: "Menguatkan otot leher, bahu, dan punggung." },
          { id: "03_m2", title: "Skin-to-Skin & Pijat", cara: "Lakukan kontak kulit ke kulit. Berikan pijatan lembut (ILU) di area perut atau usap telapak kaki.", manfaat: "Regulasi suhu tubuh, mengurangi kolik, dan stimulasi taktil." },
        ],
      },
    ],
  },
  "3_6_months": {
    label: "3 – 6 Bulan",
    categories: [
      {
        name: "Motorik Kasar & Halus",
        activities: [
          { id: "36_m1", title: "Latihan Berguling", cara: "Pancing bayi yang sedang telentang dengan mainan berbunyi ke arah samping agar ia berusaha miring dan berguling.", manfaat: "Melatih koordinasi otot inti (core) dan keseimbangan." },
          { id: "36_m2", title: "Meraih Benda", cara: "Gantungkan mainan di playgym atau sodorkan mainan bertekstur agar bayi berusaha meraih dan menggenggamnya.", manfaat: "Koordinasi mata-tangan dan motorik halus." },
        ],
      },
      {
        name: "Kognitif & Bahasa",
        activities: [
          { id: "36_k1", title: "Bermain Cilukba", cara: "Tutup wajah dengan tangan atau kain, lalu buka sambil berseru 'Cilukba!'.", manfaat: "Mengenalkan konsep object permanence." },
        ],
      },
    ],
  },
  "6_9_months": {
    label: "6 – 9 Bulan",
    categories: [
      {
        name: "Motorik Kasar & Halus",
        activities: [
          { id: "69_m1", title: "Stimulasi Duduk & Merangkak", cara: "Dudukkan bayi tanpa sandaran. Letakkan mainan agak jauh untuk memancingnya menumpu pada tangan dan merangkak.", manfaat: "Kekuatan otot tulang belakang dan persiapan mobilitas." },
          { id: "69_m2", title: "Pindah Tangan (Transfer)", cara: "Berikan balok di satu tangan, lalu berikan balok lain di tangan yang sama agar ia memindahkan balok pertama.", manfaat: "Kematangan motorik halus." },
        ],
      },
    ],
  },
  "9_12_months": {
    label: "9 – 12 Bulan",
    categories: [
      {
        name: "Motorik Kasar & Halus",
        activities: [
          { id: "912_m1", title: "Rambat & Titah", cara: "Bantu bayi berdiri berpegangan pada furnitur yang aman (merambat), atau pegang kedua tangannya untuk berlatih melangkah.", manfaat: "Keseimbangan tubuh dan persiapan berjalan mandiri." },
          { id: "912_m2", title: "Menjumput (Pincer Grasp)", cara: "Sediakan makanan kecil (finger food) seperti potongan pisang/wortel rebus agar bayi mengambilnya dengan jempol dan telunjuk.", manfaat: "Keterampilan makan mandiri dan presisi jari." },
        ],
      },
    ],
  },
  "12_18_months": {
    label: "12 – 18 Bulan",
    categories: [
      {
        name: "Eksplorasi & Kemandirian",
        activities: [
          { id: "1218_e1", title: "Mencoret-coret", cara: "Sediakan kertas besar dan krayon tebal yang aman. Biarkan anak mencoret secara bebas.", manfaat: "Pra-menulis dan ekspresi kreatif." },
          { id: "1218_e2", title: "Menyusun Balok", cara: "Ajak anak menumpuk 2 hingga 3 balok kayu lalu merobohkannya.", manfaat: "Pemahaman spasial dan koordinasi visual-motorik." },
        ],
      },
    ],
  },
  "18_24_months": {
    label: "18 – 24 Bulan",
    categories: [
      {
        name: "Kemampuan Ekspresif & Reseptif",
        activities: [
          { id: "1824_k1", title: "Kombinasi Dua Kata", cara: "Latih anak mengucapkan 2 atau lebih kata untuk menunjukkan keinginan, seperti 'Susu' atau 'Mau bobo'.", manfaat: "Perkembangan bahasa ekspresif (Sesuai Instrumen Tes Daya Dengar)." },
          { id: "1824_k2", title: "Mengenal Anggota Tubuh", cara: "Minta anak menunjukkan paling sedikit 1 anggota badan (misal 'Mana hidungmu?') tanpa diberi contoh.", manfaat: "Perkembangan bahasa reseptif." },
          { id: "1824_k3", title: "Instruksi Kompleks", cara: "Berikan 2 macam perintah dalam satu kalimat, seperti 'Ambil sepatumu dan taruh di sini'.", manfaat: "Pemahaman instruksi multi-langkah." },
        ],
      },
      {
        name: "Kemandirian (Daily Living)",
        activities: [
          { id: "1824_m1", title: "Latihan Bina Diri", cara: "Latih anak berpakaian sendiri, mencuci tangan, dan makan dengan sendok/garpu.", manfaat: "Kemandirian dan motorik halus." },
          { id: "1824_m2", title: "Pekerjaan Rumah Ringan", cara: "Ajak merapikan mainan bersama ke dalam kotaknya.", manfaat: "Tanggung jawab dan pengurutan (sequencing)." },
        ],
      },
    ],
  },
};

export function getPhaseKey(months: number): PhaseKey {
  if (months < 3) return "0_3_months";
  if (months < 6) return "3_6_months";
  if (months < 9) return "6_9_months";
  if (months < 12) return "9_12_months";
  if (months < 18) return "12_18_months";
  return "18_24_months";
}

export interface AgeContext {
  label: string;
  months: number;
  weeks: number;
  days: number;
  displayAge: string;
  phaseKey: PhaseKey;
}

export function calculateAgeContext(dob: string): AgeContext {
  const birth = new Date(dob);
  const now = new Date();
  const diffMs = now.getTime() - birth.getTime();
  const totalDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

  const months = Math.floor(totalDays / 30.44);
  const weeks = Math.floor(totalDays / 7);
  const remainderDays = totalDays % 7;

  let displayAge: string;
  if (totalDays < 30) {
    displayAge = `${weeks} Minggu, ${remainderDays} Hari`;
  } else {
    const remainderWeeks = Math.floor((totalDays - Math.floor(months * 30.44)) / 7);
    displayAge = `${months} Bulan, ${remainderWeeks} Minggu`;
  }

  const phaseKey = getPhaseKey(months);

  return {
    label: CLINICAL_DATA[phaseKey].label,
    months,
    weeks,
    days: totalDays,
    displayAge,
    phaseKey,
  };
}
