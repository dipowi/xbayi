// Database Stimulasi Bayi 0-24 Bulan
// Sumber: Panduan Pengasuhan & Stimulasi Anak 0-24 Bulan
// Disusun oleh: Tsalatsatun A.R. S.Tr.Keb, CPHCT

export interface StimActivity {
  id: string;
  title: string;
  description: string;
  steps: string[];
  tips: string;
  frequency?: string;
}

export interface StimCategory {
  id: string;
  label: string;
  icon: string;
  activities: StimActivity[];
}

export interface StimPhase {
  id: string;
  label: string;
  minMonths: number;
  maxMonths: number;
  categories: StimCategory[];
}

export interface StimDB {
  phases: StimPhase[];
}

export const STIMULASI_DB: StimDB = {
  phases: [

    // ═══════════════════════════════════════════════════════
    // FASE 1: 0 – 3 BULAN
    // ═══════════════════════════════════════════════════════
    {
      id: "phase_0_3",
      label: "0 – 3 Bulan",
      minMonths: 0,
      maxMonths: 3,
      categories: [

        // ─── PENGLIHATAN ────────────────────────────────────
        {
          id: "visual",
          label: "Sensorik Penglihatan",
          icon: "👁️",
          activities: [
            {
              id: "v_0_3_01",
              title: "Menilai Refleks Cahaya",
              description: "Memeriksa respons pupil bayi terhadap cahaya sebagai dasar stimulasi penglihatan.",
              steps: [
                "Siapkan senter kecil atau lampu HP.",
                "Bawa anak ke kamar, matikan lampu hingga gelap total.",
                "Letakkan senter berjarak 60–100 cm di atas wajah anak.",
                "Hidupkan senter, perhatikan apakah pupil mengecil dengan segera atau lambat.",
                "Matikan senter, tunggu 60 detik, kemudian hidupkan kembali.",
                "Setiap kali menyorotkan cahaya, ucapkan dengan jelas: "Cahaya"."
              ],
              tips: "Jika pupil mengecil cepat → lakukan 1x/bulan. Jika lambat → konsultasikan ke dokter saat kontrol.",
              frequency: "1x/bulan (normal), lebih sering jika lambat"
            },
            {
              id: "v_0_3_02",
              title: "Bermain dengan Contrast Book",
              description: "Memperlihatkan gambar kontras (hitam-putih) untuk memperkuat refleks cahaya dan stimulasi visual.",
              steps: [
                "Siapkan buku atau kartu bergambar gelap pada latar terang (atau sebaliknya).",
                "Tunjukkan gambar pada jarak ±20–30 cm dari wajah bayi.",
                "Biarkan bayi memandang beberapa saat."
              ],
              tips: "Bayi lebih mudah melihat jika ada kontras tajam. Gunakan gambar hitam-putih atau warna kontras tinggi.",
              frequency: "Setiap hari"
            },
            {
              id: "v_0_3_03",
              title: "Bermain Senter",
              description: "Melatih bayi menemukan dan mengikuti sumber cahaya untuk stimulasi otot mata.",
              steps: [
                "Matikan semua lampu sehingga kamar gelap total.",
                "Nyalakan senter, sorotkan cahaya ke dinding atau atap.",
                "Tunggu sampai bayi menemukan cahaya tersebut.",
                "Jika bayi menengok ke arah cahaya, ucapkan: "Anak pintar, kamu menemukan cahayanya!"",
                "Biarkan bayi melihat beberapa detik, lalu matikan senter.",
                "Tunggu beberapa detik dalam gelap, pindahkan posisi senter, nyalakan kembali."
              ],
              tips: "Lakukan dengan tenang dan penuh semangat. Bantu bayi dengan suara jika belum bisa menemukan sendiri.",
              frequency: "2–3x/minggu"
            },
            {
              id: "v_0_3_04",
              title: "Bermain Lampu",
              description: "Menstimulasi pupil bayi agar kemampuan melihat berkembang dengan baik melalui adaptasi gelap-terang.",
              steps: [
                "Saat malam hari, nyalakan lampu dan katakan: "Lampu menyala".",
                "Biarkan selama 2 menit mata anak beradaptasi.",
                "Matikan lampu, katakan: "Lampu mati", biarkan 2 menit beradaptasi.",
                "Ulangi: 2x lampu nyala, 2x lampu mati dalam satu hari."
              ],
              tips: "Lakukan di waktu anak terjaga dan tenang.",
              frequency: "Setiap hari (2x nyala, 2x mati)"
            },
            {
              id: "v_0_3_05",
              title: "Aktivitas Pagi Hari di Luar",
              description: "Memberikan rangsangan cahaya alami dan warna dari lingkungan sekitar.",
              steps: [
                "Ajak anak bersantai di depan rumah saat pagi hari.",
                "Biarkan anak mendapat rangsangan cahaya alami dan berbagai warna dari lingkungan."
              ],
              tips: "Hindari paparan langsung sinar matahari ke mata. Cukup di tempat teduh terbuka.",
              frequency: "Setiap pagi"
            },
            {
              id: "v_0_3_06",
              title: "Melatih Otot Mata dengan Pita Warna-warni",
              description: "Melatih otot mata dan mendorong bayi untuk menggapai benda bergerak.",
              steps: [
                "Siapkan pita warna-warni atau tali plastik warna-warni dan sebuah tongkat/sumpit (±20 cm).",
                "Ikatkan pita pada tongkat.",
                "Letakkan bayi telentang di matras.",
                "Mainkan tali di atas wajah bayi sejauh jangkauannya.",
                "Gerakkan mainan ke kanan, kiri, atas, dan bawah.",
                "Lakukan sampai bayi berusaha menggapai atau menyentuhnya."
              ],
              tips: "Gerakan pelan dan bervariasi agar otot mata terlatih mengikuti berbagai arah.",
              frequency: "1–2x/hari"
            },
            {
              id: "v_0_3_07",
              title: "Melatih Otot Mata dengan Kain Bedong",
              description: "Melatih visual jarak jauh dan dekat serta kemampuan fokus mata.",
              steps: [
                "Kegiatan ini dilakukan oleh 2 orang dewasa.",
                "Siapkan kain bedong berwarna-warni atau selimut, tiap orang memegang sisi kain.",
                "Angkat kain dengan gerakan naik-turun sebanyak 3 kali.",
                "Saat gerakan turun, biarkan anak memegang permukaan kain."
              ],
              tips: "Pastikan gerakan lembut dan tidak mengagetkan bayi.",
              frequency: "1x/hari"
            },
            {
              id: "v_0_3_08",
              title: "Melatih Otot Mata & Otot Leher",
              description: "Melatih bayi mengikuti gerakan mainan dari kanan ke kiri untuk merangsang otot mata dan leher.",
              steps: [
                "Letakkan bayi di matras dalam posisi telentang.",
                "Pegang mainan berwarna merah atau hitam.",
                "Perlihatkan mainan di depan anak, gerakkan dari arah kanan ke kiri secara perlahan.",
                "Biarkan anak mengikuti gerakan mainan tersebut dengan matanya."
              ],
              tips: "Gunakan warna merah atau hitam karena paling mudah dilihat bayi baru lahir.",
              frequency: "1–2x/hari"
            }
          ]
        },

        // ─── PENDENGARAN ─────────────────────────────────────
        {
          id: "auditory",
          label: "Sensorik Pendengaran",
          icon: "👂",
          activities: [
            {
              id: "a_0_3_01",
              title: "Cek Refleks Kaget (Moro Reflex)",
              description: "Memeriksa respons pendengaran bayi sebagai deteksi dini kesehatan pendengaran.",
              steps: [
                "Tepukkan kedua tangan secara tiba-tiba dengan jarak ±1 meter dari bayi.",
                "Jika bayi tidak kaget, coba pukul piring aluminium/keramik dengan sendok dari jarak minimal 1 meter.",
                "Perhatikan respons bayi: kaget (normal), mendengar tapi tidak kaget (ada masalah pendengaran), tidak bereaksi sama sekali (gangguan pendengaran)."
              ],
              tips: "Refleks kaget WAJIB ada pada bayi baru lahir. Jika tidak ada, segera konsultasikan ke dokter.",
              frequency: "1x/bulan untuk pemantauan"
            },
            {
              id: "a_0_3_02",
              title: "Berbicara & Bercerita dengan Bayi",
              description: "Menstimulasi pendengaran dengan mengajak bayi berbicara dalam berbagai kesempatan.",
              steps: [
                "Ajak bayi bercerita dengan suara yang beraneka ragam intonasi dan frekuensi.",
                "Gunakan setiap kesempatan: saat memandikan, mengenakan pakaian, memberikan ASI, di tempat tidur.",
                "Perhatikan respons: bayi tersenyum, bereaksi dengan mengoceh, atau menoleh ke arah suara."
              ],
              tips: "Bayi tidak pernah terlalu muda untuk diajak bicara. Bicara langsung berhadapan agar bayi bisa melihat ekspresi wajah.",
              frequency: "Sepanjang hari, setiap ada kesempatan"
            },
            {
              id: "a_0_3_03",
              title: "Meniru Suara-Suara Bayi",
              description: "Tirukan ocehan bayi untuk mendorong bayi menirukan kembali dan membangun percakapan awal.",
              steps: [
                "Dengarkan ketika bayi bersuara atau mengoceh.",
                "Tirukan suara yang bayi buat dengan ekspresi gembira.",
                "Tunggu respons bayi, lalu tirukan kembali."
              ],
              tips: "Ini adalah percakapan pertama bayi — semakin sering dilakukan, semakin bayi percaya diri bersuara.",
              frequency: "Setiap kali bayi bersuara"
            },
            {
              id: "a_0_3_04",
              title: "Mengenalkan Nama Suara Lingkungan",
              description: "Setiap kali bayi mendengar suara, beritahukan nama suara tersebut untuk membangun pola bahasa.",
              steps: [
                "Saat mendengar suara kucing, katakan dengan jelas dan keras: "Itu suara kucing".",
                "Lakukan untuk berbagai suara: hujan, motor, burung, dll.",
                "Gunakan nada yang jelas dan konsisten."
              ],
              tips: "Konsistensi penting agar bayi mulai mengenali pola suara dan nama benda.",
              frequency: "Setiap ada suara lingkungan yang terdengar"
            }
          ]
        },

        // ─── PERABAAN ────────────────────────────────────────
        {
          id: "tactile",
          label: "Sensorik Perabaan",
          icon: "🤲",
          activities: [
            {
              id: "t_0_3_01",
              title: "Melatih Refleks Babinski",
              description: "Membantu bayi mendapatkan daya dorong pada kaki yang digunakan saat merayap.",
              steps: [
                "Letakkan bayi di matras.",
                "Gesekkan ibu jari dari tumit sampai jari kaki anak.",
                "Lakukan 2 kali pada setiap telapak kaki.",
                "Perhatikan respons kaki bayi.",
                "Setiap kali menyentuh, ucapkan dengan jelas: "Sentuhan"."
              ],
              tips: "Refleks Babinski normal ada dari lahir sampai ±12 bulan (menjelang berjalan).",
              frequency: "1–2x/hari"
            },
            {
              id: "t_0_3_02",
              title: "Tidak Memakai Sarung Tangan & Sarung Kaki Terus-menerus",
              description: "Membiarkan tangan dan kaki bayi tanpa sarung agar mendapat stimulasi alamiah dari lingkungan.",
              steps: [
                "Hindari pemakaian sarung tangan dan kaos kaki secara terus-menerus.",
                "Biarkan jari tangan dan kaki bayi bebas menyentuh berbagai permukaan."
              ],
              tips: "Kulit bayi adalah organ sensorik penting. Stimulasi alamiah sangat dibutuhkan untuk perkembangan otak.",
              frequency: "Terapkan setiap hari"
            },
            {
              id: "t_0_3_03",
              title: "Mengusap dan Membelai Bayi",
              description: "Memberikan stimulasi perabaan dasar melalui sentuhan lembut orang tua.",
              steps: [
                "Sering-seringlah mengusap dan membelai bayi dengan tangan lembut.",
                "Usap seluruh bagian tubuh: kepala, tangan, kaki, punggung.",
                "Lakukan dengan penuh kasih sayang."
              ],
              tips: "Sentuhan adalah bahasa cinta utama bayi. Ini juga membantu bayi merasa aman dan nyaman.",
              frequency: "Sepanjang hari"
            },
            {
              id: "t_0_3_04",
              title: "Meraba Berbagai Permukaan",
              description: "Mengajak bayi meraba dan merasakan berbagai bentuk dan tekstur permukaan benda.",
              steps: [
                "Siapkan berbagai benda: mainan binatang, mainan plastik, kain perca, mainan karet.",
                "Tempelkan benda-benda tersebut ke telapak tangan bayi bergantian.",
                "Biarkan bayi meraba dan merasakan."
              ],
              tips: "Pastikan benda tidak terlalu kecil atau mudah tersobek karena bayi akan memasukkan ke mulut.",
              frequency: "1–2x/hari"
            },
            {
              id: "t_0_3_05",
              title: "Oral Motor dengan Teether",
              description: "Menstimulasi perabaan pada mulut, lidah, dan gusi untuk mendukung kemampuan makan dan bicara.",
              steps: [
                "Berikan teether (alat gigit bayi) pada bayi.",
                "Gunakan teether yang panjang dan terbuat dari silikon.",
                "Biarkan bayi memegang dan memasukkan teether ke mulut secara mandiri."
              ],
              tips: "Hindari teether bulat dan besar karena akan menekan lidah. Pilih yang panjang agar melatih gag refleks dan fleksibilitas lidah.",
              frequency: "Mulai usia 3 bulan, setiap hari"
            }
          ]
        },

        // ─── PENCIUMAN ───────────────────────────────────────
        {
          id: "olfactory",
          label: "Sensorik Penciuman",
          icon: "👃",
          activities: [
            {
              id: "o_0_3_01",
              title: "Mencium Bau Ibu",
              description: "Stimulasi penciuman terbaik bagi bayi adalah bau ibunya, memberikan rasa nyaman dan tenang.",
              steps: [
                "Peluk dan dekatkan bayi ke tubuh ibu sesering mungkin.",
                "Biarkan bayi mencium bau ibu secara alami.",
                "Hindari parfum menyengat yang bisa mengganggu indra penciuman bayi."
              ],
              tips: "Sensorik penciuman diproses di otak limbik yang juga mengatur emosi. Bau ibu = rasa aman bagi bayi.",
              frequency: "Setiap hari, sesering mungkin"
            }
          ]
        },

        // ─── PENGECAPAN RASA ─────────────────────────────────
        {
          id: "taste",
          label: "Sensorik Pengecapan Rasa",
          icon: "👅",
          activities: [
            {
              id: "ta_0_3_01",
              title: "Makanan Bergizi Ibu untuk ASI Berkualitas",
              description: "Rasa ASI dipengaruhi oleh makanan ibu. Variasi makanan bergizi memberi khazanah rasa pada bayi.",
              steps: [
                "Konsumsi beraneka ragam makanan bergizi setiap hari.",
                "Sertakan protein hewani, sayur, buah, dan karbohidrat kompleks.",
                "Variasikan menu agar ASI memiliki berbagai rasa."
              ],
              tips: "Bayi yang mendapat ASI dari ibu dengan menu bervariasi akan lebih mudah menerima MPASI beragam nanti.",
              frequency: "Setiap hari"
            },
            {
              id: "ta_0_3_02",
              title: "Tidak Membersihkan Puting dengan Antiseptik",
              description: "Puting dan areola mengandung bakteri baik yang penting untuk bayi.",
              steps: [
                "Setiap kali sebelum menyusui, tidak perlu membersihkan puting dan areola dengan tissue basah atau antiseptik.",
                "Cukup bersihkan dengan air bersih jika diperlukan."
              ],
              tips: "Bakteri baik di areola membantu membangun sistem imun dan microbiome bayi.",
              frequency: "Setiap menyusui"
            }
          ]
        },

        // ─── PROPIOCEPTION ───────────────────────────────────
        {
          id: "proprioception",
          label: "Sensorik Propriosepsi",
          icon: "🏃",
          activities: [
            {
              id: "p_0_3_01",
              title: "Pemanasan Gerakan Bebas",
              description: "Mempersiapkan bayi untuk kegiatan fisik dengan membiarkan bergerak bebas.",
              steps: [
                "Letakkan bayi di matras dalam posisi telentang.",
                "Bermainlah dengan bayi dan biarkan dia menggerakkan tangan dan kaki secara bebas.",
                "Lakukan selama ±1 menit."
              ],
              tips: "Lakukan sebelum stimulasi fisik lainnya sebagai pemanasan.",
              frequency: "Setiap hari sebelum stimulasi"
            },
            {
              id: "p_0_3_02",
              title: "Melatih Refleks Menggenggam",
              description: "Memeriksa dan melatih refleks menggenggam yang wajib dimiliki bayi baru lahir.",
              steps: [
                "Letakkan bayi dalam posisi telentang.",
                "Letakkan jari telunjuk kanan Anda pada tangan kiri bayi yang mengepal.",
                "Letakkan jari telunjuk kiri Anda pada tangan kanan bayi.",
                "Tarik bayi perlahan ke arah Anda, rasakan genggaman mengencang.",
                "Tarikan hanya sebatas bayi mampu menggenggam kuat, JANGAN sampai kepala/badan terangkat."
              ],
              tips: "Refleks menggenggam harus dimiliki semua bayi lahir yang normal. Jika tidak ada, segera konsultasikan.",
              frequency: "1–2x/hari"
            },
            {
              id: "p_0_3_03",
              title: "Tummy Time",
              description: "Latihan tengkurap untuk memperkuat otot leher, dada, perut, dan paru-paru bayi.",
              steps: [
                "Tengkurapkan bayi pada permukaan yang datar dan tidak keras.",
                "Lakukan saat bayi dalam keadaan terjaga (tidak tidur dan tidak mengantuk).",
                "Lakukan setelah ±30 menit pasca minum ASI.",
                "Mulai dengan waktu singkat, yang penting rutin (pagi, siang, sore).",
                "Saat tummy time, gerakkan mainan berwarna cerah di depan bayi agar ia belajar mengangkat kepala."
              ],
              tips: "Bisa dilakukan sejak tali pusar lepas. Bayi boleh menangis sedikit — itu wajar karena menguatkan napasnya.",
              frequency: "3x/hari (pagi, siang, sore)"
            },
            {
              id: "p_0_3_04",
              title: "Mengangkat Kepala saat Tummy Time",
              description: "Mendorong bayi mengangkat kepala dan dada saat tummy time untuk menguatkan otot leher.",
              steps: [
                "Saat tummy time, gerakkan mainan berwarna cerah di depan bayi.",
                "Atau buat suara-suara gembira di depan bayi.",
                "Biarkan bayi berusaha mengangkat kepala untuk melihat mainan/sumber suara."
              ],
              tips: "Berikan pujian dan senyuman setiap kali bayi berhasil mengangkat kepala.",
              frequency: "Setiap sesi tummy time"
            },
            {
              id: "p_0_3_05",
              title: "Latihan Berguling",
              description: "Melatih bayi berguling sebagai tahap perkembangan motorik awal.",
              steps: [
                "Letakkan mainan berwarna cerah di dekat bayi.",
                "Pindahkan benda tersebut ke sisi lain secara perlahan.",
                "Awalnya, bantu bayi dengan menyilangkan paha bayi agar badannya ikut bergerak miring.",
                "Ketika bayi berguling, tersenyum dan tunjukkan rasa kasih sayang."
              ],
              tips: "Jangan memaksa. Biarkan bayi mencoba dengan bantuan minimal dari orang tua.",
              frequency: "1–2x/hari"
            }
          ]
        },

        // ─── VESTIBULAR ──────────────────────────────────────
        {
          id: "vestibular",
          label: "Sensorik Vestibular (Keseimbangan)",
          icon: "⚖️",
          activities: [
            {
              id: "ve_0_3_01",
              title: "Gendong dengan Goyangan Perlahan",
              description: "Melatih sistem keseimbangan bayi melalui gerakan mengayun saat digendong.",
              steps: [
                "Gendong anak dengan memberikan goyangan perlahan ke samping kanan-kiri dan atas-bawah.",
                "Sesekali gendong dengan posisi kepala ditegakkan.",
                "Gendong bayi berkeliling sambil menunjukkan benda-benda berwarna cerah.",
                "Sambil sebutkan nama benda, bernyanyi, atau muroja'ah."
              ],
              tips: "Gerakan harus lembut dan teratur. Hindari goyangan kasar atau tiba-tiba.",
              frequency: "Beberapa kali sehari"
            }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // FASE 2: 3 – 6 BULAN
    // ═══════════════════════════════════════════════════════
    {
      id: "phase_3_6",
      label: "3 – 6 Bulan",
      minMonths: 3,
      maxMonths: 6,
      categories: [

        {
          id: "visual",
          label: "Sensorik Penglihatan",
          icon: "👁️",
          activities: [
            {
              id: "v_3_6_01",
              title: "Persepsi Garis Bentuk – Menemukan Cahaya",
              description: "Melatih kemampuan menemukan letak atau mengikuti sebuah benda (senter).",
              steps: [
                "Letakkan bayi di pangkuan ayah dengan nyaman.",
                "Matikan semua lampu hingga gelap total.",
                "Nyalakan senter, sorotkan ke dinding atau atap.",
                "Tunggu bayi menemukan cahaya, lalu ucapkan: "Anak pintar, kamu menemukan cahayanya!"",
                "Matikan senter, tunggu beberapa detik, pindahkan posisi, nyalakan kembali.",
                "Jika sudah konsisten menemukan, keesokan harinya gerakkan senter dan lihat apakah bayi bisa mengikuti."
              ],
              tips: "Tingkatkan kesulitan secara bertahap: temukan dulu, baru ikuti gerakan.",
              frequency: "3–4x/minggu"
            },
            {
              id: "v_3_6_02",
              title: "Mengenalkan Gambar Benda Sekitar",
              description: "Memperkenalkan gambar benda nyata untuk stimulasi visual dan bahasa.",
              steps: [
                "Siapkan gambar-gambar benda di sekitar (hewan, buah, benda rumah).",
                "Timang atau pangku anak dalam posisi bersandar.",
                "Tunjukkan gambar, sebutkan nama benda tersebut.",
                "Biarkan anak menemukan/melihat gambar, sebutkan nama sekali lagi.",
                "Lanjutkan ke gambar berikutnya."
              ],
              tips: "Pilih gambar besar, simple, dan berwarna cerah. Lakukan hanya beberapa menit agar bayi tidak bosan.",
              frequency: "Setiap hari, 5–10 menit"
            },
            {
              id: "v_3_6_03",
              title: "Melatih Otot Mata & Tangan dengan Pita",
              description: "Melatih otot mata dan mendorong gerakan tangan bayi untuk meraih.",
              steps: [
                "Siapkan pita/tali plastik warna-warni dan tongkat (±20 cm).",
                "Ikatkan pita pada tongkat.",
                "Letakkan bayi telentang.",
                "Mainkan tali di atas wajah bayi, gerakkan ke kanan-kiri-atas-bawah.",
                "Dorong bayi agar berusaha menggapai dan menyentuhnya."
              ],
              tips: "Pastikan jarak tali cukup dekat agar bayi bisa meraih namun tidak terlalu mudah.",
              frequency: "1–2x/hari"
            },
            {
              id: "v_3_6_04",
              title: "Melatih Otot Mata dengan Kain Bedong",
              description: "Melatih visual jarak jauh dan dekat dengan gerakan kain naik-turun.",
              steps: [
                "Dilakukan 2 orang dewasa dengan kain bedong/selimut.",
                "Masing-masing pegang sisi kain.",
                "Angkat kain dengan gerakan naik-turun sebanyak 3 kali.",
                "Saat gerakan turun, biarkan anak memegang permukaan kain."
              ],
              tips: "Kain yang berwarna-warni membantu stimulasi visual sekaligus perabaan.",
              frequency: "1x/hari"
            },
            {
              id: "v_3_6_05",
              title: "Melatih Otot Mata & Otot Leher (Tummy Time)",
              description: "Kombinasi tummy time dengan mengikuti gerakan mainan untuk melatih otot leher dan mata.",
              steps: [
                "Letakkan anak di matras dalam posisi tummy time.",
                "Pegang mainan berwarna merah/hitam di depan anak.",
                "Gerakkan mainan dari kanan ke kiri secara perlahan.",
                "Biarkan anak mengikuti gerakan mainan tersebut."
              ],
              tips: "Kombinasi tummy time + tracking mainan sekaligus melatih 3 otot: leher, punggung, dan mata.",
              frequency: "Setiap sesi tummy time"
            },
            {
              id: "v_3_6_06",
              title: "Melihat Diri di Cermin",
              description: "Bayi senang melihat dirinya di cermin — stimulasi visual sekaligus awal kesadaran diri.",
              steps: [
                "Bawa bayi ke cermin yang tidak mudah pecah.",
                "Dekatkan wajah bayi ke cermin.",
                "Biarkan bayi mengamati bayangan dirinya.",
                "Tambahkan ekspresi dan kata-kata: "Itu kamu!"."
              ],
              tips: "Gunakan cermin bayi yang aman dari plastik atau cermin yang ditempel di tempat aman.",
              frequency: "Setiap hari"
            },
            {
              id: "v_3_6_07",
              title: "Bermain Ciluk-ba",
              description: "Melatih kemampuan visual tracking dan pemahaman object permanence awal.",
              steps: [
                "Pegang kain/saputangan untuk menutupi wajah Anda dari pandangan bayi.",
                "Singkirkan penutup dan katakan: "Ciluk ba!" dengan ekspresi gembira.",
                "Ulangi beberapa kali.",
                "Pastikan bayi tidak dapat melihat wajah Anda beberapa saat sebelum muncul kembali."
              ],
              tips: "Ekspresi wajah yang gembira dan berseri sangat penting untuk respons emosi bayi.",
              frequency: "Beberapa kali sehari"
            },
            {
              id: "v_3_6_08",
              title: "Berusaha Meraih Benda",
              description: "Melatih koordinasi mata-tangan dengan mendorong bayi meraih mainan.",
              steps: [
                "Letakkan mainan berwarna cerah di dekat bayi.",
                "Pindahkan benda ke sisi lain secara perlahan.",
                "Awalnya bantu bayi dengan menyilangkan paha agar badannya ikut miring.",
                "Ketika bayi berguling meraih mainan, berikan senyuman dan kasih sayang."
              ],
              tips: "Jangan langsung berikan mainan — biarkan bayi berusaha sendiri dulu.",
              frequency: "1–2x/hari"
            }
          ]
        },

        {
          id: "auditory",
          label: "Sensorik Pendengaran",
          icon: "👂",
          activities: [
            {
              id: "a_3_6_01",
              title: "Singkirkan Kegaduhan di Rumah",
              description: "Menciptakan lingkungan pendengaran yang kondusif agar bayi fokus mendengar suara orang tua.",
              steps: [
                "Matikan radio, TV, dan sumber suara lain selama sesi bersama bayi.",
                "Berbicaralah dengan suara keras dan jelas berhadapan langsung dengan bayi.",
                "Pastikan bayi dapat mendengar dengan penuh perhatian."
              ],
              tips: "Lingkungan tanpa bising membantu bayi mengenali suara dan intonasi orang tua lebih baik.",
              frequency: "Terapkan setiap hari"
            },
            {
              id: "a_3_6_02",
              title: "Bermain Bunyi-bunyian (Xylophone, Piring, Panci)",
              description: "Mengenalkan berbagai bunyi dan melatih integrasi refleks kaget.",
              steps: [
                "Siapkan: xylophone, piring, mangkok stainless, panci, dan sendok.",
                "Letakkan bayi di matras dalam posisi tengkurap.",
                "Letakkan barang-barang di depan bayi.",
                "Pukul satu per satu barang menggunakan sendok secara bergantian.",
                "Sebelum memukul, kenalkan: "Kamu akan mendengar suara piring".",
                "Amati reaksi anak saat mendengar setiap bunyi."
              ],
              tips: "Respons kaget adalah normal dan menjadi target kegiatan ini. Seiring waktu refleks kaget akan terintegrasi.",
              frequency: "2–3x/minggu"
            },
            {
              id: "a_3_6_03",
              title: "Berbicara & Bercerita (Lanjutan)",
              description: "Ajak bayi bercerita dengan variasi suara, intonasi, dan frekuensi di berbagai momen.",
              steps: [
                "Ajak bayi bercerita saat memandikan, mengenakan pakaian, memberi ASI, dll.",
                "Variasikan intonasi: nada tinggi, rendah, pelan, keras.",
                "Gunakan bahasa yang jelas dan ekspresif."
              ],
              tips: "Semakin beragam intonasi dan frekuensi, semakin kaya stimulasi pendengaran bayi.",
              frequency: "Sepanjang hari"
            },
            {
              id: "a_3_6_04",
              title: "Meniru Suara-Suara Bayi (Lanjutan)",
              description: "Tirukan ocehan bayi sesering mungkin untuk mendorong bayi bersuara lebih.",
              steps: [
                "Setiap kali bayi berceloteh, tirukan suara tersebut.",
                "Tunggu bayi merespons kembali.",
                "Ulangi seperti percakapan bergantian."
              ],
              tips: "Ini mengajarkan bayi bahwa suara menghasilkan respons — fondasi penting untuk komunikasi.",
              frequency: "Setiap kali bayi bersuara"
            },
            {
              id: "a_3_6_05",
              title: "Mendengarkan Bayi Berceloteh",
              description: "Berikan ruang bayi untuk bersuara dengan mendengarkan aktif tanpa langsung direspons.",
              steps: [
                "Saat bayi berceloteh, dengarkan dengan penuh perhatian.",
                "Beri waktu bayi untuk selesai bersuara sebelum Anda merespons.",
                "Tunjukkan ekspresi tertarik dan gembira."
              ],
              tips: "Ini membangun kepercayaan diri bayi bahwa suaranya didengar dan dihargai.",
              frequency: "Setiap hari"
            },
            {
              id: "a_3_6_06",
              title: "Bercakap-Cakap (Tanya-Jawab)",
              description: "Membangun pola percakapan dua arah dengan pertanyaan sederhana.",
              steps: [
                "Tanyakan: "Apa kabar?" lalu tersenyum dan tunggu.",
                "Bayi akan mulai menggerakkan lengan dan mengeluarkan suara.",
                "Berikan respons positif terhadap suara yang dikeluarkan.",
                "Variasikan pertanyaan: "Kamu lapar?", "Kamu mengantuk?", "Popokmu basah?"",
                "Berikan juga perintah sederhana: "Buka mulutmu!", "Lihat Mama!", "Dorong dengan kaki!"",
                "Jelaskan nama objek: "Ini tanganmu", "Ini kakimu"."
              ],
              tips: "Tunggu dengan sabar setelah bertanya — beri bayi waktu untuk "menjawab".",
              frequency: "Beberapa kali sehari"
            },
            {
              id: "a_3_6_07",
              title: "Mencari Sumber Suara",
              description: "Melatih bayi menemukan sumber suara sambil sekaligus melatih otot leher.",
              steps: [
                "Lakukan saat tummy time.",
                "Bunyikan mainan dari arah samping bayi dengan jarak 60–100 cm.",
                "Biarkan bayi menemukan sumber suara sendiri.",
                "Jika belum mampu, pegang muka bayi dan palingkan perlahan ke arah sumber suara."
              ],
              tips: "Mulai dari dekat, kemudian perbesar jarak secara bertahap.",
              frequency: "1–2x/hari"
            },
            {
              id: "a_3_6_08",
              title: "Bermain Cilukba (Suara & Wajah)",
              description: "Bermain cilukba dengan ekspresi penuh semangat untuk merangsang tawa dan respons emosi.",
              steps: [
                "Sembunyikan wajah di balik tangan atau kain.",
                "Muncul kembali dengan ekspresi gembira dan katakan: "Ciluk ba!"",
                "Target: bayi tertawa atau menjerit karena gembira."
              ],
              tips: "Ekspresi yang berlebihan (gembira, kaget, heran) sangat menarik bagi bayi.",
              frequency: "Beberapa kali sehari"
            }
          ]
        },

        {
          id: "tactile",
          label: "Sensorik Perabaan",
          icon: "🤲",
          activities: [
            {
              id: "t_3_6_01",
              title: "Melatih Refleks Babinski (Lanjutan)",
              description: "Melanjutkan latihan refleks Babinski untuk mempersiapkan daya dorong kaki saat merayap.",
              steps: [
                "Letakkan bayi di matras.",
                "Gesekkan ibu jari dari tumit sampai jari kaki.",
                "Lakukan 2 kali pada setiap telapak kaki.",
                "Ucapkan "Sentuhan" setiap kali menyentuh."
              ],
              tips: "Konsisten setiap hari agar refleks berkembang dengan baik.",
              frequency: "1–2x/hari"
            },
            {
              id: "t_3_6_02",
              title: "Persepsi Temperatur",
              description: "Mengenalkan sensasi dingin dan hangat pada bayi.",
              steps: [
                "Siapkan mangkok berisi es batu + air (dingin) dan mangkok berisi air hangat.",
                "Celupkan tangan ibu ke air dingin, sentuhkan ke bagian tubuh anak, ucapkan: "Dingin".",
                "Ganti dengan air hangat, ucapkan: "Hangat".",
                "Lakukan bergantian pada bagian tubuh yang berbeda.",
                "Jika anak belum nyaman, lakukan pelan-pelan dan tidak perlu lama."
              ],
              tips: "Target: 2x rangsangan dingin, 2x rangsangan hangat per hari. Jangan memaksakan.",
              frequency: "Setiap hari"
            },
            {
              id: "t_3_6_03",
              title: "Persepsi Tekstur (Kasar & Halus)",
              description: "Mengenalkan perbedaan tekstur kasar dan halus pada telapak tangan, kaki, dan tubuh.",
              steps: [
                "Siapkan spons cuci piring yang sudah dicuci bersih dan dikeringkan.",
                "Gesekkan sisi kasar spons perlahan ke telapak kaki dan tangan, ucapkan: "Bagian kasar".",
                "Lakukan hal yang sama dengan sisi halus, ucapkan: "Bagian halus".",
                "Hari berikutnya, lakukan pada seluruh tubuh.",
                "Jika belum nyaman, kenalkan terus selama seminggu tanpa memaksakan."
              ],
              tips: "Target: 2x rangsangan halus, 2x rangsangan kasar per hari.",
              frequency: "Setiap hari"
            },
            {
              id: "t_3_6_04",
              title: "Persepsi Tekanan",
              description: "Mengenalkan sensasi tekanan pada berbagai bagian tubuh bayi.",
              steps: [
                "Posisikan anak dalam keadaan nyaman.",
                "Tekan tangan anak dengan jari telunjuk, ucapkan: "Tekan tangan".",
                "Pindah ke kaki, ucapkan: "Tekan kaki".",
                "Pindah ke pipi, ucapkan: "Tekan pipi"."
              ],
              tips: "Tekanan dilakukan lembut. Verbalkan setiap tindakan untuk membangun pola bahasa.",
              frequency: "1x/hari"
            },
            {
              id: "t_3_6_05",
              title: "Oral Motor dengan Teether (Lanjutan)",
              description: "Melanjutkan stimulasi oral motor dengan teether untuk kesiapan makan dan bicara.",
              steps: [
                "Berikan teether panjang berbahan silikon.",
                "Biarkan bayi memegang dan memasukkan sendiri ke mulut.",
                "Amati seberapa dalam bayi memasukkan teether (latih gag refleks)."
              ],
              tips: "Teether membantu melatih fleksibilitas lidah yang berpengaruh pada kemampuan makan dan bicara.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "olfactory",
          label: "Sensorik Penciuman",
          icon: "👃",
          activities: [
            {
              id: "o_3_6_01",
              title: "Mencium Bau Orang Tua",
              description: "Stimulasi penciuman terbaik: bau ayah dan ibu memberikan rasa nyaman dan tenang.",
              steps: [
                "Peluk dan dekatkan bayi ke tubuh orang tua sesering mungkin.",
                "Biarkan bayi mencium bau orang tua secara alami."
              ],
              tips: "Bau orang tua memproses emosi positif di otak limbik bayi.",
              frequency: "Sepanjang hari"
            },
            {
              id: "o_3_6_02",
              title: "Mengikuti Kegiatan Makan Keluarga (Usia 5 Bulan)",
              description: "Membiasakan bayi mengikuti makan keluarga agar indra penciuman terstimulasi berbagai bau makanan.",
              steps: [
                "Mulai usia 5 bulan, dudukkan bayi dekat meja makan saat keluarga makan.",
                "Biarkan bayi mencium aroma berbagai makanan yang dimakan keluarga.",
                "Dekatkan kulit jeruk atau rempah dapur ke hidung bayi."
              ],
              tips: "Aroma makanan membangun 'kenangan emosi' di otak yang kelak memudahkan bayi menerima MPASI.",
              frequency: "Setiap waktu makan keluarga"
            },
            {
              id: "o_3_6_03",
              title: "Jalan-jalan Pagi Menikmati Bau Alam",
              description: "Bau alam (buah, tumbuhan) terbukti menurunkan hormon stres pada bayi.",
              steps: [
                "Ajak bayi jalan-jalan pagi ke taman atau halaman.",
                "Biarkan bayi menghirup bau alam secara alami.",
                "Dekatkan bayi ke tanaman atau bunga (yang tidak beracun) dan sebutkan namanya."
              ],
              tips: "Bau alami melemahkan peningkatan kortisol dan ACTH — hormon stres pada bayi.",
              frequency: "Setiap pagi"
            }
          ]
        },

        {
          id: "proprioception",
          label: "Sensorik Propriosepsi",
          icon: "🏃",
          activities: [
            {
              id: "p_3_6_01",
              title: "Pemanasan Gerakan Bebas (Lanjutan)",
              description: "Mempersiapkan bayi untuk kegiatan fisik.",
              steps: [
                "Letakkan bayi di matras posisi telentang.",
                "Biarkan bergerak bebas menggerakkan tangan dan kaki.",
                "Bermain selama ±1 menit."
              ],
              tips: "Selalu awali sesi stimulasi fisik dengan pemanasan.",
              frequency: "Setiap hari sebelum stimulasi"
            },
            {
              id: "p_3_6_02",
              title: "Berusaha Meraih Benda",
              description: "Melatih koordinasi tangan-mata dengan mendorong bayi meraih mainan.",
              steps: [
                "Letakkan mainan berwarna cerah di dekat bayi.",
                "Pindahkan perlahan ke posisi agak jauh atau ke kanan/kiri.",
                "Ketika bayi meraih, berikan senyum dan kasih sayang."
              ],
              tips: "Biarkan bayi berusaha sendiri sebelum dibantu.",
              frequency: "1–2x/hari"
            },
            {
              id: "p_3_6_03",
              title: "Merayap",
              description: "Melatih otot seluruh tubuh dan koordinasi gerak sebagai persiapan merangkak.",
              steps: [
                "Letakkan bayi di matras dalam posisi tengkurap.",
                "Tekuk salah satu kakinya, tahan telapak kaki yang ditekuk dengan telapak tangan Anda (beri tumpuan).",
                "Jika sudah mengangkat kepala, lakukan pada kaki bergantian.",
                "Biarkan bayi berusaha mendorong dirinya maju."
              ],
              tips: "Merayap adalah pondasi merangkak. Semakin banyak merayap, otot semakin kuat.",
              frequency: "2–3x/hari"
            },
            {
              id: "p_3_6_04",
              title: "Mengembangkan Kontrol terhadap Kepala",
              description: "Melatih kekuatan otot leher agar kepala bayi bisa terangkat mengikuti badan.",
              steps: [
                "Letakkan bayi dalam posisi telentang.",
                "Pegang kedua pergelangan tangan bayi.",
                "Tarik bayi perlahan ke arah Anda hingga badan terangkat ke posisi setengah duduk.",
                "JANGAN lakukan jika kepala bayi tidak ikut terangkat — lanjutkan tummy time terlebih dahulu."
              ],
              tips: "Kepala harus ikut terangkat sebelum latihan ini dilanjutkan.",
              frequency: "1x/hari (jika sudah siap)"
            },
            {
              id: "p_3_6_05",
              title: "Latihan Duduk",
              description: "Melatih keseimbangan duduk dengan dukungan dan kemampuan kembali ke posisi duduk mandiri.",
              steps: [
                "Duduklah di lantai dengan kaki terentang ke depan.",
                "Letakkan bayi duduk di antara kedua kaki Anda, menghadap ke depan.",
                "Letakkan tangan Anda secara lembut di pinggul bayi sebagai dukungan.",
                "Letakkan mainan agak jauh di depan, dorong bayi mencondongkan tubuh ke depan untuk meraihnya.",
                "Jika bayi sudah bisa duduk tegak, dudukkan di lantai beralaskan matras tanpa sandaran."
              ],
              tips: "Jika sudah bisa duduk sendiri, stimulasi keseimbangan dengan kursi goyang atau gymball.",
              frequency: "1–2x/hari"
            },
            {
              id: "p_3_6_06",
              title: "Memegang Benda & Memasukkan ke Mulut",
              description: "Melatih genggaman dan koordinasi tangan-mulut.",
              steps: [
                "Letakkan teether di depan bayi.",
                "Biarkan bayi mengambil sendiri dan memasukkannya ke mulut."
              ],
              tips: "Biarkan bayi mandiri — jangan langsung dibantu.",
              frequency: "Setiap hari"
            },
            {
              id: "p_3_6_07",
              title: "Memegang Benda-benda Kecil",
              description: "Melatih motorik halus dengan memungut potongan makanan kecil.",
              steps: [
                "Letakkan potongan makanan kecil di hadapan bayi.",
                "Biarkan bayi mencoba mengambilnya.",
                "Jika sudah mampu, jauhkan benda-benda berbahaya (pil/obat/mainan kecil)."
              ],
              tips: "Awasi ketat agar bayi tidak tersedak.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "vestibular",
          label: "Sensorik Vestibular (Keseimbangan)",
          icon: "⚖️",
          activities: [
            {
              id: "ve_3_6_01",
              title: "Latihan Keseimbangan – Gendong & Ayunan",
              description: "Melatih sistem vestibular dengan berbagai arah ayunan saat digendong.",
              steps: [
                "Gendong bayi, berikan ayunan ke kanan-kiri dan berputar.",
                "Bisa juga gunakan kursi goyang atau gymball sambil berdzikir/muroja'ah."
              ],
              tips: "Kombinasikan dengan menyebutkan arah untuk stimulasi bahasa.",
              frequency: "Beberapa kali sehari"
            },
            {
              id: "ve_3_6_02",
              title: "Latihan Keseimbangan – Matras Bayi",
              description: "Melatih keseimbangan dengan berbagai gerakan menggunakan matras/bantal besar.",
              steps: [
                "Letakkan bayi di matras/bantal besar dalam posisi tengkurap.",
                "Ayun kanan-kiri: pegang sisi kanan-kiri, ayun 3 kali hitungan.",
                "Ayun atas-bawah: pegang sisi kepala dan kaki, ayun 3 kali hitungan.",
                "Gerakan maju-mundur: dorong dan tarik matras 3 kali hitungan.",
                "Gerakan berputar: tarik sisi matras searah jarum jam 3 kali, lalu sebaliknya 3 kali."
              ],
              tips: "Semua gerakan harus lambat dan lembut. Perhatikan ekspresi bayi — hentikan jika tidak nyaman.",
              frequency: "1x/hari"
            }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // FASE 3: 6 – 9 BULAN
    // ═══════════════════════════════════════════════════════
    {
      id: "phase_6_9",
      label: "6 – 9 Bulan",
      minMonths: 6,
      maxMonths: 9,
      categories: [

        {
          id: "visual",
          label: "Sensorik Penglihatan",
          icon: "👁️",
          activities: [
            {
              id: "v_6_9_01",
              title: "Identifikasi Objek – Menyebutkan Gambar",
              description: "Mengenalkan nama gambar-gambar untuk membangun kosakata visual.",
              steps: [
                "Siapkan buku bergambar atau flashcard dengan gambar simple dan berukuran besar.",
                "Tunjuk gambar dan sebutkan namanya kepada bayi.",
                "Lakukan setiap hari dalam beberapa menit saja."
              ],
              tips: "Pilih gambar nyata (bukan kartun) dengan warna cerah dan minim detail.",
              frequency: "Setiap hari, 5–10 menit"
            },
            {
              id: "v_6_9_02",
              title: "Identifikasi Objek – Ajak Menunjuk Gambar",
              description: "Melatih bayi menunjuk gambar yang disebutkan untuk membangun koneksi kata-gambar.",
              steps: [
                "Ajak bayi melihat gambar di buku/flashcard.",
                "Sebutkan nama benda, bantu bayi menunjuk gambar yang disebutkan.",
                "Usahakan bayi mau mengulangi kata-kata.",
                "Lakukan setiap hari dalam beberapa menit."
              ],
              tips: "Konsistensi penting — ulangi kata yang sama berkali-kali hingga bayi hafal.",
              frequency: "Setiap hari, 5–10 menit"
            },
            {
              id: "v_6_9_03",
              title: "Mengenal Anggota Keluarga",
              description: "Mengenalkan wajah anggota keluarga dan nama panggilan mereka.",
              steps: [
                "Tunjukkan foto atau pertemukan langsung bayi dengan anggota keluarga.",
                "Sebutkan nama panggilan setiap anggota keluarga.",
                "Ulangi secara konsisten."
              ],
              tips: "Usia ini bayi mulai mengenali wajah yang sering bersamanya dan mulai mengenal orang asing.",
              frequency: "Setiap hari"
            },
            {
              id: "v_6_9_04",
              title: "Bermain Ciluk-ba (Lanjutan)",
              description: "Melanjutkan permainan ciluk-ba untuk stimulasi visual dan emosi.",
              steps: [
                "Tutup wajah dengan kain/saputangan.",
                "Singkirkan dan ucapkan "Ciluk ba!" dengan ekspresi gembira.",
                "Ulangi beberapa kali."
              ],
              tips: "Di usia ini bayi sudah mulai paham object permanence — ini sangat menarik baginya.",
              frequency: "Beberapa kali sehari"
            },
            {
              id: "v_6_9_05",
              title: "Melihat Diri di Cermin (Lanjutan)",
              description: "Melanjutkan stimulasi cermin untuk perkembangan kesadaran diri.",
              steps: [
                "Bawa bayi ke cermin yang tidak mudah pecah.",
                "Biarkan bayi mengamati bayangan dirinya.",
                "Tunjuk dan sebutkan bagian wajah di cermin."
              ],
              tips: "Di usia ini bayi mulai menunjukkan ekspresi lebih beragam saat melihat cermin.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "auditory",
          label: "Sensorik Pendengaran",
          icon: "👂",
          activities: [
            {
              id: "a_6_9_01",
              title: "Bernyanyi Bersama",
              description: "Bernyanyi bersama lalu memancing bayi bersuara dengan berhenti di akhir bait.",
              steps: [
                "Nyanyikan lagu anak-anak bersama bayi.",
                "Setelah beberapa hari, coba berhenti di akhir bait.",
                "Contoh: "Cicak, cicak di din…" (berhenti, tunggu bayi melanjutkan).",
                "Berikan respons positif jika bayi bersuara mengisi."
              ],
              tips: "Variasikan lagu dan irama untuk kekayaan stimulasi auditori.",
              frequency: "Setiap hari"
            },
            {
              id: "a_6_9_02",
              title: "Bermain Genderang",
              description: "Membuat bunyi dari kaleng bekas untuk stimulasi pendengaran dan motorik.",
              steps: [
                "Ambil kaleng kosong bekas, tutup bagian atasnya.",
                "Tunjukkan cara memukul 'genderang' dengan sendok/centong kayu hingga berbunyi.",
                "Biarkan bayi mencoba sendiri."
              ],
              tips: "Ini juga melatih koordinasi tangan dan pemahaman sebab-akibat.",
              frequency: "2–3x/minggu"
            },
            {
              id: "a_6_9_03",
              title: "Percakapan (Lanjutan)",
              description: "Semua orang di rumah berbicara dengan keras, jelas, dan penuh ekspresi kepada bayi.",
              steps: [
                "Pastikan semua anggota keluarga berbicara pada bayi dengan suara jelas dan ekspresif.",
                "Ciptakan lingkungan yang selalu ada sesuatu menarik untuk didengar.",
                "Jangan biarkan bayi kehilangan minat karena kekurangan rangsangan."
              ],
              tips: "Tanpa rangsangan bahasa yang cukup, bayi bisa kehilangan minat berkomunikasi.",
              frequency: "Sepanjang hari"
            },
            {
              id: "a_6_9_04",
              title: "Bunyi-Bunyi Lingkungan Rumah",
              description: "Mengenalkan bunyi-bunyi alami rumah tangga dan menyebutkan nama bendanya.",
              steps: [
                "Saat membuka kran: "Itu bunyi air".",
                "Kenalkan suara penghisap debu, blender yang digunakan.",
                "Perkenalkan semua bunyi alami rumah tangga dan sebutkan nama bendanya."
              ],
              tips: "Ini memperkaya kosakata bayi secara alami dalam konteks kehidupan sehari-hari.",
              frequency: "Setiap ada suara rumah tangga"
            },
            {
              id: "a_6_9_05",
              title: "Permainan Bersosialisasi (Lambaikan Tangan)",
              description: "Mengajarkan bayi melambaikan tangan sebagai interaksi sosial.",
              steps: [
                "Ajak bayi bermain dengan orang lain.",
                "Ketika ayah pergi, lambaikan tangan ke bayi sambil berkata: "Da… daah".",
                "Bantu bayi membalas dengan melambaikan tangannya.",
                "Setelah mengerti, coba biarkan bayi menggerakkan tangannya sendiri."
              ],
              tips: "Ini adalah salah satu milestone komunikasi sosial penting.",
              frequency: "Setiap ada momen perpisahan/pertemuan"
            }
          ]
        },

        {
          id: "tactile",
          label: "Sensorik Perabaan",
          icon: "🤲",
          activities: [
            {
              id: "t_6_9_01",
              title: "Gelitikan dan Pijatan Seluruh Tubuh",
              description: "Menangkap sensasi gnostik melalui gelitik, gosok, dan pijat seluruh tubuh bayi.",
              steps: [
                "Tepat setelah mandi, coba menggelitik, menggosok, atau memijat seluruh tubuh selama 1 menit.",
                "Sekali tindakan: gelitikan lembut seluruh tubuh.",
                "Kali berikutnya: gosok lembut dengan telapak tangan rata.",
                "Kali berikutnya lagi: pijatan lembut seluruh tubuh.",
                "Jangan lupa gosok dan pijat punggung hingga pinggul (integrasi Spinal Galant Reflex).",
                "Saat melakukan, sebutkan nama bagian tubuh: "Sekarang ibu menggelitik kakimu"."
              ],
              tips: "Spinal Galant Reflex yang terintegrasi baik = anak tidak mudah mengompol di malam hari.",
              frequency: "Setiap setelah mandi"
            },
            {
              id: "t_6_9_02",
              title: "Sensasi Kontras – Tekstur Berbeda",
              description: "Mengenalkan berbagai pasangan tekstur yang kontras ke seluruh tubuh bayi.",
              steps: [
                "Siapkan pasangan benda kontras: handuk kasar & halus, sisir kasar & halus, kain goni & satin, spons hijau kasar & kuning halus.",
                "Sentuhkan lembut ke seluruh tubuh bayi bergantian.",
                "Saat menyentuh sisir kasar: "Ini sisir kasar".",
                "Saat menyentuh sisir halus: "Ini sisir halus"."
              ],
              tips: "Verbalkan setiap tekstur untuk membangun kosakata sensorik anak.",
              frequency: "2–3x/minggu"
            }
          ]
        },

        {
          id: "taste",
          label: "Sensorik Pengecapan Rasa",
          icon: "👅",
          activities: [
            {
              id: "ta_6_9_01",
              title: "MPASI dengan Berbagai Rasa",
              description: "Memperkenalkan MPASI dengan berbagai rasa secara bertahap dan berulang.",
              steps: [
                "Saat mengenalkan rasa baru, kenalkan berulang kali (butuh 10–15 perkenalan).",
                "Jangan menyerah jika bayi menolak — ini bukan tanda tidak suka, tapi butuh lebih banyak informasi.",
                "Variasikan rasa: manis, gurih, sedikit asam, pahit alami."
              ],
              tips: "Otak bayi butuh informasi berulang untuk menerima rasa baru. Sama seperti belajar kata baru.",
              frequency: "Setiap waktu makan"
            },
            {
              id: "ta_6_9_02",
              title: "Makan Tanpa Distraksi",
              description: "Proses pencernaan optimal dimulai dari fokus sensorik saat makan.",
              steps: [
                "Matikan TV, gadget, dan semua distraksi saat makan.",
                "Dudukkan bayi dengan nyaman dan tegak.",
                "Biarkan bayi melihat, mencium, dan menyentuh makanan.",
                "Jangan membawa bayi jalan-jalan sambil makan."
              ],
              tips: "Distraksi mengganggu sinyal saraf yang diperlukan untuk mengunyah, menelan, dan mencerna.",
              frequency: "Setiap waktu makan"
            }
          ]
        },

        {
          id: "olfactory",
          label: "Sensorik Penciuman",
          icon: "👃",
          activities: [
            {
              id: "o_6_9_01",
              title: "Mencium Bau Rempah-rempah",
              description: "Mengenalkan berbagai aroma rempah dapur untuk menstimulasi indra penciuman.",
              steps: [
                "Ambil rempah dapur (jahe, kunyit, kayu manis, dll.).",
                "Dekatkan ke hidung bayi dan sebutkan namanya.",
                "Perhatikan reaksi bayi."
              ],
              tips: "Mulai dengan aroma ringan sebelum yang menyengat.",
              frequency: "2–3x/minggu"
            },
            {
              id: "o_6_9_02",
              title: "Mencium Bau Bunga",
              description: "Mengenalkan aroma bunga untuk stimulasi penciuman yang menenangkan.",
              steps: [
                "Bawa bayi dekat bunga di taman atau rumah.",
                "Dekatkan perlahan ke hidung bayi.",
                "Sebutkan nama bunga tersebut."
              ],
              tips: "Pilih bunga yang aman dan tidak beracun.",
              frequency: "2–3x/minggu"
            },
            {
              id: "o_6_9_03",
              title: "Mencium Bau Buah-buahan Segar",
              description: "Memperkenalkan aroma buah segar untuk memperkuat ikatan emosi terhadap makanan.",
              steps: [
                "Saat makan jeruk, dekatkan kulitnya ke hidung bayi.",
                "Biarkan bayi memegang buah dan mencium aromanya.",
                "Sebutkan nama buah dan aromanya."
              ],
              tips: "Biarkan bayi memegang makanan — ini stimulasi multisensorik (perabaan + penciuman + pengecapan).",
              frequency: "Setiap ada buah/makanan"
            },
            {
              id: "o_6_9_04",
              title: "Makan Bersama Keluarga di Meja Makan",
              description: "Biasakan bayi mengikuti makan keluarga untuk stimulasi penciuman berbagai aroma makanan.",
              steps: [
                "Dudukkan bayi di meja makan saat keluarga makan.",
                "Biarkan bayi mencium berbagai aroma menu makanan keluarga.",
                "Ini membangun ikatan emosi 'kenangan' terhadap makanan."
              ],
              tips: "Pembiasaan ini membantu bayi menerima berbagai makanan keluarga kelak.",
              frequency: "Setiap waktu makan keluarga"
            },
            {
              id: "o_6_9_05",
              title: "Jalan-jalan Pagi Menikmati Alam",
              description: "Bau alam membantu menurunkan hormon stres dan menenangkan bayi.",
              steps: [
                "Ajak bayi jalan pagi di luar rumah.",
                "Biarkan bayi menghirup udara segar dan bau alam.",
                "Dekatkan ke tanaman, bunga, atau pohon buah."
              ],
              tips: "Bau alami terbukti melemahkan peningkatan kortisol dan ACTH (hormon stres).",
              frequency: "Setiap pagi"
            }
          ]
        },

        {
          id: "proprioception",
          label: "Sensorik Propriosepsi & Motorik",
          icon: "🏃",
          activities: [
            {
              id: "p_6_9_01",
              title: "Merangkak",
              description: "Melatih kemampuan merangkak yang merupakan pencapaian motorik besar bayi.",
              steps: [
                "Letakkan mainan di luar jangkauan bayi untuk memotivasi bergerak.",
                "Usahakan bayi merangkak menggunakan kedua tangan dan lututnya.",
                "Jika belum bisa, bantu dengan kain jarik yang disangga di perut bayi oleh orang tua.",
                "Optimalkan merangkak hingga minimal usia 12 bulan."
              ],
              tips: "Fase onggong-onggong (goyang maju-mundur) adalah normal sebelum bisa merangkak.",
              frequency: "Setiap hari, sebanyak mungkin"
            },
            {
              id: "p_6_9_02",
              title: "Duduk dengan Baik",
              description: "Memastikan posisi duduk bayi tepat untuk menguatkan otot core.",
              steps: [
                "Hindari duduk di kasur atau kursi terlalu empuk.",
                "Dudukkan bayi di lantai dengan matras tipis.",
                "Jika duduk dalam posisi W, rapikan tungkai ke depan."
              ],
              tips: "Otot core yang kuat = bayi bisa duduk nyaman saat makan dan kelak saat sekolah.",
              frequency: "Setiap hari"
            },
            {
              id: "p_6_9_03",
              title: "Menarik ke Posisi Berdiri",
              description: "Melatih transisi duduk ke berdiri sebagai persiapan berdiri mandiri.",
              steps: [
                "Dudukkan bayi.",
                "Tarik bayi ke posisi berdiri dengan berpegangan pada tangan Anda.",
                "Lakukan juga di atas meja, kursi, atau permukaan lainnya.",
                "Siapkan pelindung kepala bayi."
              ],
              tips: "Biarkan bayi yang menentukan kapan berhenti — jangan paksakan terlalu lama.",
              frequency: "1–2x/hari"
            },
            {
              id: "p_6_9_04",
              title: "Berdiri Berpegangan",
              description: "Melatih bayi berdiri dengan berpegangan pada furniture.",
              steps: [
                "Letakkan mainan yang disukai di atas kursi yang dapat dijangkau bayi.",
                "Biarkan bayi berusaha berdiri berpegangan untuk meraih mainan."
              ],
              tips: "Pastikan furniture stabil dan tidak mudah roboh.",
              frequency: "Beberapa kali sehari"
            },
            {
              id: "p_6_9_05",
              title: "Memasukkan Benda ke Dalam Wadah",
              description: "Melatih koordinasi tangan halus dan pemahaman konsep wadah.",
              steps: [
                "Ajari bayi memasukkan mainan/benda kecil ke dalam wadah (kotak, kaleng, kardus).",
                "Setelah selesai, ajari cara mengeluarkan dan memasukkan kembali.",
                "Pastikan benda tidak terlalu kecil (risiko tersedak)."
              ],
              tips: "Awasi agar bayi tidak memasukkan benda berbahaya ke mulut.",
              frequency: "Setiap hari"
            },
            {
              id: "p_6_9_06",
              title: "Membuat Bunyi-bunyian (Benturkan 2 Benda)",
              description: "Melatih koordinasi bilateral dengan saling membenturkan dua benda.",
              steps: [
                "Berikan bayi 2 benda (kubus, balok kecil, tutup panci).",
                "Bantu bayi membenturkan kedua benda hingga berbunyi.",
                "Dorong bayi melakukan sendiri."
              ],
              tips: "Ini juga melatih pemahaman sebab-akibat: 'pukul dua benda = bunyi'.",
              frequency: "Setiap hari"
            },
            {
              id: "p_6_9_07",
              title: "Tepuk Tangan",
              description: "Mengajarkan bayi tepuk tangan setelah mampu membenturkan dua benda.",
              steps: [
                "Setelah bayi bisa membenturkan dua benda, ajari tepuk tangan.",
                "Tunjukkan contoh bertepuk tangan dengan ekspresi gembira.",
                "Dorong bayi meniru."
              ],
              tips: "Tepuk tangan adalah milestone motorik halus dan sosial yang penting.",
              frequency: "Setiap hari"
            },
            {
              id: "p_6_9_08",
              title: "Memindahkan Benda dari Satu Tangan ke Tangan Lain",
              description: "Melatih koordinasi bilateral dan eksplorasi benda.",
              steps: [
                "Amati apakah bayi berusaha memindahkan benda dari satu tangan ke tangan lainnya.",
                "Jika belum bisa, contohkan cara melakukannya.",
                "Berikan benda yang menarik untuk dipegang."
              ],
              tips: "Ini menunjukkan perkembangan koordinasi otak kiri-kanan.",
              frequency: "Setiap hari"
            },
            {
              id: "p_6_9_09",
              title: "Mengambil dengan Jempol & Jari Telunjuk (Pincer Grasp)",
              description: "Melatih pincer grasp (genggaman penjepit) untuk motorik halus.",
              steps: [
                "Berikan potongan makanan berukuran kecil.",
                "Contohkan cara mengambil menggunakan jari jempol dan jari telunjuk.",
                "Biarkan bayi mencoba sendiri."
              ],
              tips: "Pincer grasp adalah milestone motorik halus penting di usia 6–9 bulan.",
              frequency: "Setiap waktu makan"
            },
            {
              id: "p_6_9_10",
              title: "Menyembunyikan dan Mencari Mainan",
              description: "Melatih object permanence (pemahaman bahwa benda tetap ada meski tidak terlihat).",
              steps: [
                "Sembunyikan mainan favorit dengan ditutup selimut/koran (sebagian saja).",
                "Tunjukkan cara menemukan mainan dengan mengangkat kain penutup.",
                "Setelah mengerti, tutup penuh dan biarkan bayi mencari sendiri."
              ],
              tips: "Object permanence adalah fondasi perkembangan kognitif bayi.",
              frequency: "1–2x/hari"
            },
            {
              id: "p_6_9_11",
              title: "Memegang Alat Tulis & Mencoret-coret",
              description: "Pengenalan awal memegang krayon dan mencoret-coret kertas.",
              steps: [
                "Sediakan krayon/pensil berwarna dan kertas bekas di atas meja.",
                "Dudukkan bayi di pangkuan Anda.",
                "Bantu bayi memegang krayon dan ajarkan mencoret-coret kertas."
              ],
              tips: "Tidak perlu hasil yang rapi — proses memegang dan menggoreskan alat tulis adalah tujuannya.",
              frequency: "2–3x/minggu"
            }
          ]
        },

        {
          id: "vestibular",
          label: "Sensorik Vestibular (Keseimbangan)",
          icon: "⚖️",
          activities: [
            {
              id: "ve_6_9_01",
              title: "Gendong dengan Berbagai Arah Ayunan",
              description: "Melatih sistem keseimbangan dengan berbagai gerakan saat digendong.",
              steps: [
                "Gendong bayi menghadap ke depan.",
                "Tangan kanan menyangga dada dan ketiak, tangan kiri menyangga pantat dan paha.",
                "Ayun kanan-kiri: 3 kali hitungan.",
                "Ayun atas-bawah: 3 kali hitungan.",
                "Gerakan maju-mundur: 3 kali hitungan.",
                "Gerakan berputar searah jarum jam: 3 kali, lalu sebaliknya 3 kali."
              ],
              tips: "Lakukan dengan senyuman dan bernyanyi untuk kombinasi stimulasi vestibular + auditori.",
              frequency: "1–2x/hari"
            },
            {
              id: "ve_6_9_02",
              title: "Ayunan dengan Selimut",
              description: "Membuat ayunan dari selimut sebagai alternatif ayunan rumahan.",
              steps: [
                "Pegang kedua ujung selimut, suami/pasangan memegang kedua ujung lainnya.",
                "Letakkan bayi di atas selimut.",
                "Goyangkan perlahan sambil berhitung.",
                "Variasikan gerakan: kanan-kiri, maju-mundur."
              ],
              tips: "Pastikan 2 orang dewasa kuat memegang dan bayi dalam posisi aman.",
              frequency: "Beberapa kali seminggu"
            }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // FASE 4: 9 – 12 BULAN
    // ═══════════════════════════════════════════════════════
    {
      id: "phase_9_12",
      label: "9 – 12 Bulan",
      minMonths: 9,
      maxMonths: 12,
      categories: [

        {
          id: "visual",
          label: "Sensorik Penglihatan",
          icon: "👁️",
          activities: [
            {
              id: "v_9_12_01",
              title: "Membaca Buku & Bermain Flashcard",
              description: "Rutinitas membaca buku harian untuk stimulasi visual dan bahasa.",
              steps: [
                "Buat rutinitas membaca buku bersama setiap hari.",
                "Pilih buku dengan gambar asli, besar, dan minim tulisan.",
                "Tunjuk gambar dan minta anak menyebutkan namanya.",
                "Jika belum bisa, sebutkan dengan jelas dan berulang."
              ],
              tips: "Konsistensi rutinitas membaca lebih penting dari durasinya.",
              frequency: "Setiap hari"
            },
            {
              id: "v_9_12_02",
              title: "Aktivitas Pagi di Luar Rumah",
              description: "Paparan cahaya alami dan lingkungan untuk stimulasi visual optimal.",
              steps: [
                "Ajak bayi keluar rumah setiap pagi.",
                "Biarkan bayi mengamati lingkungan sekitar.",
                "Sebutkan nama benda, warna, dan bentuk yang dilihat."
              ],
              tips: "Cahaya alami pagi hari sangat baik untuk perkembangan mata dan ritme biologis bayi.",
              frequency: "Setiap pagi"
            },
            {
              id: "v_9_12_03",
              title: "Konvergensi Penglihatan – Merangkak di Tempat Sempit",
              description: "Melatih persepsi kedalaman dan jarak melalui merangkak di berbagai medan.",
              steps: [
                "Bebaskan bayi merangkak ke tempat sempit: bawah meja, bawah kursi.",
                "Buat terowongan dari kardus untuk dilewati bayi.",
                "Biarkan bayi merangkak turun dari kasur (dengan pengawasan).",
                "Ajarkan naik tangga rendah dengan merangkak."
              ],
              tips: "Ini adalah stimulasi alami yang dilakukan bayi sendiri — biarkan dengan pengawasan.",
              frequency: "Setiap hari saat bermain bebas"
            },
            {
              id: "v_9_12_04",
              title: "Bermain Petak Umpet",
              description: "Melatih pencarian visual dan pemahaman object permanence yang lebih kompleks.",
              steps: [
                "Bersembunyi lalu tampakkan sedikit anggota tubuh.",
                "Panggil nama anak.",
                "Biarkan anak berusaha mencari dengan merangkak.",
                "Muncul dengan ekspresi gembira ketika ditemukan."
              ],
              tips: "Bersembunyi di tempat yang mudah ditemukan dulu, baru perlahan lebih sulit.",
              frequency: "Beberapa kali sehari"
            },
            {
              id: "v_9_12_05",
              title: "Berkeliling Rumah Mengenal Benda",
              description: "Mengenalkan nama semua benda di rumah sambil berkeliling.",
              steps: [
                "Ajak bayi berkeliling rumah.",
                "Tunjukkan dan sebutkan nama benda: "dinding", "lampu", "kulkas", "kursi".",
                "Jika bayi menunjuk benda berulang, sebutkan terus nama benda itu.",
                "Lakukan juga di luar rumah."
              ],
              tips: "Bayi menunjuk berulang bukan karena tidak cerdas, tapi butuh cukup informasi untuk disimpan di otak.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "auditory",
          label: "Sensorik Pendengaran",
          icon: "👂",
          activities: [
            {
              id: "a_9_12_01",
              title: "Bernyanyi & Memancing Bayi Bersuara",
              description: "Bernyanyi bersama dan mendorong bayi melanjutkan lirik.",
              steps: [
                "Nyanyikan lagu bersama bayi.",
                "Berhenti di akhir bait, tunggu bayi mengisi.",
                "Berikan respons positif jika bayi bersuara."
              ],
              tips: "Ini mendorong produksi suara aktif, bukan hanya mendengarkan pasif.",
              frequency: "Setiap hari"
            },
            {
              id: "a_9_12_02",
              title: "Percakapan & Perkenalan Nama Benda",
              description: "Membangun kosakata dengan percakapan aktif dan mengenalkan nama benda.",
              steps: [
                "Bicara kepada bayi dengan keras, jelas, dan ekspresif.",
                "Sebutkan nama semua benda yang ditemui.",
                "Ulangi kata yang sama berkali-kali — bayi butuh repetisi untuk menyimpannya."
              ],
              tips: "Semakin banyak kata yang didengar bayi, semakin kaya kosakata aktif/pasifnya.",
              frequency: "Sepanjang hari"
            },
            {
              id: "a_9_12_03",
              title: "Berilah Bayi Kerincing",
              description: "Stimulasi multisensorik melalui kerincing: visual, auditori, perabaan, pengecapan, dan penciuman.",
              steps: [
                "Berikan bayi kerincing berwarna-warni.",
                "Biarkan bayi melihat, membanting, meraba, mengecap, dan mencium kerincing.",
                "Amati proses eksplorasi bayi — jangan terlalu cepat mengambil."
              ],
              tips: "Bayi menggunakan 5 indra sekaligus saat mengeksplorasi benda baru. Ini adalah 'laboratorium' alaminya.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "tactile",
          label: "Sensorik Perabaan",
          icon: "🤲",
          activities: [
            {
              id: "t_9_12_01",
              title: "Gelitikan dan Pijatan (Lanjutan)",
              description: "Melanjutkan stimulasi gnostik dan integrasi refleks Spinal Galant.",
              steps: [
                "Setelah mandi, gelitik, gosok, atau pijat seluruh tubuh selama 1 menit.",
                "Gosok dan pijat punggung hingga pinggul (integrasi Spinal Galant).",
                "Sambil lakukan, kenalkan nama kanan-kiri: "Ini tangan kananmu", "Ini kaki kirimu".",
                "Sering memeluk dan mengelus punggung atas hingga bawah."
              ],
              tips: "Semakin sering diulang, semakin terintegrasi refleks dan semakin kuat kesadaran tubuh bayi.",
              frequency: "Setiap setelah mandi"
            },
            {
              id: "t_9_12_02",
              title: "Memahami Dimensi Ketiga Benda Datar",
              description: "Melatih bayi mengambil benda-benda yang tampak datar.",
              steps: [
                "Berikan kertas, penggaris, sticker, uang, dll.",
                "Tunjukkan cara mengambil benda-benda yang tampak rata.",
                "Biarkan bayi mengamati dan mengambil sendiri."
              ],
              tips: "Ini melatih persepsi tiga dimensi dan motorik halus secara bersamaan.",
              frequency: "Beberapa kali seminggu"
            },
            {
              id: "t_9_12_03",
              title: "Benda yang Sulit Dipegang",
              description: "Meningkatkan keterampilan motorik halus dengan benda yang menantang untuk dipungut.",
              steps: [
                "Pilih benda sulit dipungut: potongan kecil makanan, biji-bijian aman.",
                "Biarkan bayi mencoba sendiri berulang kali.",
                "Jangan singkirkan benda sebelum bayi belajar maksimal dari benda itu.",
                "Tingkatkan teknik sebelum mencoba benda lain."
              ],
              tips: "Kegigihan dalam mencoba benda sulit membangun ketekunan dan keterampilan motorik.",
              frequency: "Setiap hari"
            },
            {
              id: "t_9_12_04",
              title: "Memegang Berbagai Tekstur",
              description: "Memfasilitasi eksplorasi tekstur beragam termasuk saat makan.",
              steps: [
                "Sediakan biji mangga, playdough aman, berbagai tekstur makanan.",
                "Walaupun anak disuapi, tetap sediakan makanan yang bisa dipegang di meja.",
                "Biarkan anak memegang, meremas, dan mengeksplorasi tekstur makanan."
              ],
              tips: "Memegang makanan = stimulasi perabaan + penciuman + pengecapan sekaligus.",
              frequency: "Setiap waktu makan"
            }
          ]
        },

        {
          id: "proprioception",
          label: "Sensorik Propriosepsi & Motorik",
          icon: "🏃",
          activities: [
            {
              id: "p_9_12_01",
              title: "Merangkak (Lanjutan)",
              description: "Terus optimalkan merangkak hingga minimal usia 12 bulan.",
              steps: [
                "Sediakan ruang yang luas dan aman untuk merangkak.",
                "Motivasi dengan mainan di luar jangkauan.",
                "Buat rintangan sederhana dari bantal atau kardus."
              ],
              tips: "Jangan terburu-buru mengajari berdiri/berjalan — merangkak memiliki manfaat besar untuk otak.",
              frequency: "Setiap hari"
            },
            {
              id: "p_9_12_02",
              title: "Memungut Benda Kecil",
              description: "Melatih pincer grasp dengan benda-benda yang semakin menantang.",
              steps: [
                "Siapkan potongan kecil makanan seperti wortel matang.",
                "Biarkan bayi mencoba memungut berulang-ulang.",
                "Jangan singkirkan sebelum bayi tuntas belajar dari benda itu.",
                "Coba juga memasukkan uang koin ke celengan, sedotan ke dalam botol."
              ],
              tips: "Setiap benda baru adalah tantangan baru yang meningkatkan kemampuan motorik halus.",
              frequency: "Setiap hari"
            },
            {
              id: "p_9_12_03",
              title: "Latihan Minum dari Cangkir",
              description: "Melatih koordinasi tangan-mulut dan kemandirian dengan cangkir.",
              steps: [
                "Berikan cangkir tidak mudah pecah, isi air 1/3 bagian.",
                "Selalu gunakan air putih saat latihan (bukan susu/jus).",
                "Ajarkan cara meminumnya dan tawarkan bayi memegang sendiri.",
                "Biarkan bayi berusaha memegang dan minum sendiri."
              ],
              tips: "Siapkan kain lap untuk tumpahan — ini hal yang sangat normal dan tidak perlu dimarahi.",
              frequency: "Setiap waktu minum"
            },
            {
              id: "p_9_12_04",
              title: "Menarik Tali pada Mainan",
              description: "Melatih motorik halus dan pemahaman sebab-akibat.",
              steps: [
                "Dudukkan anak.",
                "Ajarkan cara menarik tali yang diikatkan pada mainan.",
                "Biarkan anak mencoba sendiri."
              ],
              tips: "Awali dengan tali yang mudah, tingkatkan kesulitan bertahap.",
              frequency: "Beberapa kali seminggu"
            },
            {
              id: "p_9_12_05",
              title: "Brakiasi / Monkey Bar / Dead Hang",
              description: "Melatih kekuatan pegangan dan mengembangkan dada yang lebih baik.",
              steps: [
                "Jika tidak punya monkey bar, berikan jari Anda untuk dipegang bayi.",
                "Angkat bayi sedikit demi sedikit ke posisi bergantung.",
                "Lakukan berdua — satu orang siap menangkap jika pegangan terlepas.",
                "Durasi singkat dahulu, tingkatkan bertahap."
              ],
              tips: "Dada yang berkembang baik = pernapasan lebih matang = daya tahan lebih baik.",
              frequency: "Setiap hari"
            },
            {
              id: "p_9_12_06",
              title: "Belajar Berdiri",
              description: "Melatih keseimbangan berdiri secara mandiri.",
              steps: [
                "Biarkan bayi belajar berdiri dengan kaki telanjang.",
                "Tempel mainan di dinding/pintu untuk menarik perhatian bayi berdiri sendiri.",
                "Jangan gunakan alat bantu titah.",
                "Beli pelindung kepala untuk bayi yang mulai berdiri.",
                "Jangan pegangi terus — biarkan otak bayi yang belajar keseimbangan."
              ],
              tips: "Tiap kali Anda memegangi bayi, otak Anda (bukan bayi) yang belajar keseimbangan.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "vestibular",
          label: "Sensorik Vestibular (Keseimbangan)",
          icon: "⚖️",
          activities: [
            {
              id: "ve_9_12_01",
              title: "Gendong dengan Berbagai Arah (Lanjutan)",
              description: "Melanjutkan latihan vestibular dengan berbagai arah gerakan.",
              steps: [
                "Gendong bayi menghadap depan.",
                "Ayun kanan-kiri, atas-bawah, maju-mundur, berputar.",
                "Masing-masing 3 kali hitungan.",
                "Atau gunakan ayunan selimut bersama pasangan."
              ],
              tips: "Variasikan kecepatan dan irama untuk stimulasi vestibular yang lebih kaya.",
              frequency: "1–2x/hari"
            },
            {
              id: "ve_9_12_02",
              title: "Bermain Ayunan di Taman Outdoor",
              description: "Stimulasi vestibular yang lebih intensif melalui ayunan di luar ruangan.",
              steps: [
                "Sesekali ajak anak bermain ke taman outdoor.",
                "Bermain ayunan bersama dengan kecepatan yang nyaman.",
                "Sambil bernyanyi atau berbicara saat mengayun."
              ],
              tips: "Ayunan outdoor memberikan pengalaman vestibular yang berbeda dari di rumah.",
              frequency: "1–2x/minggu"
            }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // FASE 5: 12 – 15 BULAN
    // ═══════════════════════════════════════════════════════
    {
      id: "phase_12_15",
      label: "12 – 15 Bulan",
      minMonths: 12,
      maxMonths: 15,
      categories: [

        {
          id: "fine_motor",
          label: "Motorik Halus",
          icon: "✋",
          activities: [
            {
              id: "fm_12_15_01",
              title: "Permainan Balok",
              description: "Menyusun balok menumpuk ke atas melatih motorik halus dan konsentrasi.",
              steps: [
                "Sediakan balok-balok kecil dari kayu.",
                "Ajarkan cara menyusun balok menumpuk ke atas tanpa menjatuhkan.",
                "Atau gunakan toples-toples di rumah untuk ditumpuk."
              ],
              tips: "Mulai dari 2 balok, tambah bertahap sesuai kemampuan anak.",
              frequency: "Setiap hari"
            },
            {
              id: "fm_12_15_02",
              title: "Memasukkan dan Mengeluarkan Benda",
              description: "Melatih kontrol motorik halus dengan wadah berbagai ukuran.",
              steps: [
                "Ajarkan memasukkan benda ke dalam wadah: kotak, toples, botol, gelas.",
                "Tunjukkan cara mengeluarkan dari wadah.",
                "Ajak anak bermain memasukkan dan mengeluarkan berulang."
              ],
              tips: "Variasikan ukuran wadah dan benda untuk tingkat kesulitan yang berbeda.",
              frequency: "Setiap hari"
            },
            {
              id: "fm_12_15_03",
              title: "Mengambil Benda Kecil (Manik-manik)",
              description: "Memperkuat pincer grasp dengan manik-manik atau benda kecil.",
              steps: [
                "Sediakan manik-manik atau benda kecil yang aman.",
                "Ajarkan mengambil menggunakan jari telunjuk dan jempol.",
                "Masukkan ke dalam wadah, minta anak meniru.",
                "Awasi ketat agar tidak memasukkan ke mulut."
              ],
              tips: "Selalu awasi — benda kecil berbahaya jika tertelan.",
              frequency: "Beberapa kali seminggu"
            },
            {
              id: "fm_12_15_04",
              title: "Memasukkan Mangkuk Kecil ke Mangkuk Besar",
              description: "Mengenalkan konsep ukuran dan latihan motorik halus.",
              steps: [
                "Tunjukkan cara meletakkan mangkuk kecil ke dalam mangkuk besar.",
                "Buat anak melakukan sendiri.",
                "Pilih benda yang tidak mudah pecah.",
                "Bisa juga gunakan mainan stacking cup."
              ],
              tips: "Ini juga membangun pemahaman konsep besar-kecil dan dalam-luar.",
              frequency: "Beberapa kali seminggu"
            },
            {
              id: "fm_12_15_05",
              title: "Mencoret-coret Kertas",
              description: "Stimulasi awal menulis melalui mencoret bebas.",
              steps: [
                "Sediakan krayon/pensil berwarna dan kertas bekas.",
                "Biarkan anak mencoret bebas.",
                "Tidak perlu diarahkan — eksplorasi bebas adalah tujuannya."
              ],
              tips: "Coretan bebas adalah ekspresi kreatif pertama anak. Hargai setiap coretannya.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "gross_motor",
          label: "Motorik Kasar",
          icon: "🤸",
          activities: [
            {
              id: "gm_12_15_01",
              title: "Latihan Berjalan Sendiri",
              description: "Mendorong bayi berdiri dan berjalan mandiri tanpa alat bantu.",
              steps: [
                "Pastikan anak mampu berdiri tanpa tumpuan dari posisi duduk.",
                "Tunjukkan cara berdiri yang benar.",
                "Jika anak jatuh, jangan berteriak/kaget — biarkan bangkit sendiri.",
                "Berikan pujian ketika berhasil bangkit mandiri.",
                "JANGAN gunakan alat bantu titah/baby walker."
              ],
              tips: "Reaksi orang dewasa yang tenang mendorong bayi tidak takut jatuh dan terus berusaha.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_12_15_02",
              title: "Duduk dalam Posisi yang Baik",
              description: "Memperbaiki posisi duduk agar otot core berkembang optimal.",
              steps: [
                "Jika anak duduk posisi W (kaki ke samping belakang), rapikan posisi kaki ke depan.",
                "Dorong anak duduk dengan tungkai lurus ke depan.",
                "Lakukan dengan lembut, bukan memaksa."
              ],
              tips: "Duduk posisi W terus-menerus menghambat kekuatan otot core yang dibutuhkan untuk makan dan sekolah.",
              frequency: "Setiap kali anak duduk posisi W"
            },
            {
              id: "gm_12_15_03",
              title: "Menarik Mainan saat Berjalan",
              description: "Mendorong anak berjalan dengan motivasi menarik mainan bersuara.",
              steps: [
                "Berikan mainan yang bisa ditarik saat berjalan.",
                "Pilih mainan yang bersuara — anak lebih termotivasi.",
                "Biarkan anak berjalan menarik mainan di ruangan yang aman."
              ],
              tips: "Ini melatih keseimbangan berjalan sekaligus koordinasi tangan-kaki.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_12_15_04",
              title: "Berjalan Naik dan Turun Tangga",
              description: "Melatih keseimbangan dan koordinasi kaki melalui tangga.",
              steps: [
                "Ajarkan naik tangga sambil berpegangan pada dinding atau pegangan tangga.",
                "Gunakan tangga yang rendah.",
                "Selalu dampingi anak.",
                "Ajarkan turun dengan satu langkah pada satu waktu."
              ],
              tips: "Jangan tinggalkan anak sendirian di dekat tangga.",
              frequency: "2–3x/minggu"
            },
            {
              id: "gm_12_15_05",
              title: "Melempar dan Menendang Bola",
              description: "Melatih koordinasi tangan-mata dan kaki-mata.",
              steps: [
                "Tunjukkan cara melempar bola besar, minta anak mencoba.",
                "Setelah bisa bola besar, coba dengan bola yang lebih kecil.",
                "Tunjukkan cara menendang bola ke depan.",
                "Minta anak mencoba menendang."
              ],
              tips: "Mulai dari jarak pendek dan bola besar, tingkatkan bertahap.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_12_15_06",
              title: "Berjalan Mundur",
              description: "Melatih keseimbangan dan koordinasi motorik kasar.",
              steps: [
                "Ajarkan cara melangkah mundur.",
                "Berikan mainan yang bisa ditarik agar anak mau melangkah mundur.",
                "Mulai dari 2–3 langkah, tingkatkan bertahap."
              ],
              tips: "Berjalan mundur membutuhkan koordinasi yang berbeda dari berjalan maju.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_12_15_07",
              title: "Jongkok",
              description: "Memperkuat otot tungkai sebagai persiapan melompat.",
              steps: [
                "Contohkan cara jongkok kepada anak.",
                "Ajak anak bermain di lantai dan jongkok bersama.",
                "Letakkan mainan di lantai agar anak mau jongkok mengambilnya."
              ],
              tips: "Jongkok yang baik = lutut sejajar jari kaki, punggung lurus.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_12_15_08",
              title: "Brakiasi / Monkey Bar (Lanjutan)",
              description: "Melanjutkan latihan bergantung untuk mengembangkan dada dan pernapasan.",
              steps: [
                "Lanjutkan latihan bergantung di palang atau jari orang tua.",
                "Tingkatkan durasi bergantung bertahap.",
                "Selalu ada 2 orang dewasa untuk keamanan."
              ],
              tips: "Pernapasan matang = daya tahan tubuh lebih baik terhadap infeksi saluran napas.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "speech_language",
          label: "Bicara & Bahasa",
          icon: "💬",
          activities: [
            {
              id: "sl_12_15_01",
              title: "Menunjuk dan Menyebutkan Gambar",
              description: "Membangun kosakata dengan rutinitas membaca buku bersama.",
              steps: [
                "Buat rutinitas membaca buku setiap hari.",
                "Setelah membaca, tunjuk gambar dan minta anak menyebutkan namanya.",
                "Jika belum bisa, sebutkan dengan jelas dan berulang."
              ],
              tips: "Pilih buku dengan gambar asli, besar, dan warna nyata.",
              frequency: "Setiap hari"
            },
            {
              id: "sl_12_15_02",
              title: "Menyebut Nama Bagian Tubuh",
              description: "Mengenalkan nama bagian tubuh dalam kegiatan sehari-hari.",
              steps: [
                "Saat mengenakan pakaian, tunjuk dan sebutkan bagian tubuh.",
                "Usahakan anak mau menyebutkan kembali.",
                "Variasikan: kepala, tangan, kaki, mata, hidung, telinga."
              ],
              tips: "Integrasikan dalam rutinitas agar terasa alami bukan seperti 'pelajaran'.",
              frequency: "Setiap hari saat berpakaian"
            },
            {
              id: "sl_12_15_03",
              title: "Merangkai Dua Kata",
              description: "Mendorong anak dari satu kata ke dua kata dalam permintaan.",
              steps: [
                "Jika anak minta sesuatu dengan satu kata ("susu"), ajari mengatakan dua kata ("minta susu").",
                "Puji anak bila mau menirukan rangkaian kata.",
                "Jadikan konsisten dalam setiap percakapan."
              ],
              tips: "Jangan tekan atau paksakan — tunjukkan model bahasa yang benar dengan kasih sayang.",
              frequency: "Setiap ada kesempatan bicara"
            },
            {
              id: "sl_12_15_04",
              title: "Membuat Suara dari Benda Rumah",
              description: "Merangsang vokalisasi melalui aktivitas membuat suara.",
              steps: [
                "Buat suara dari kaleng kue, kerincingan, atau kayu.",
                "Ajak anak membuat musik dari benda pilihannya.",
                "Contoh: pukul sendok ke kaleng, goyang kerincingan."
              ],
              tips: "Ini memperkuat hubungan antara suara, tindakan, dan bahasa.",
              frequency: "Setiap hari"
            },
            {
              id: "sl_12_15_05",
              title: "Berdoa Bersama",
              description: "Membiasakan anak mendengar doa sebagai fondasi bahasa agama.",
              steps: [
                "Ucapkan doa sebelum dan sesudah kegiatan bersama anak.",
                "Tidak perlu minta anak menirukan — cukup dengarkan secara konsisten.",
                "Anak akan hafal sendiri saat sudah lancar berbicara."
              ],
              tips: "Paparan konsisten lebih efektif dari latihan paksa.",
              frequency: "Setiap hari sebelum/sesudah kegiatan"
            }
          ]
        },

        {
          id: "personal_social",
          label: "Personal & Sosial",
          icon: "👨‍👩‍👧",
          activities: [
            {
              id: "ps_12_15_01",
              title: "Bermain Cilukba (Lanjutan)",
              description: "Bermain cilukba dengan variasi benda tersembunyi.",
              steps: [
                "Bersembunyi di balik benda dengan cara yang mudah ditemukan.",
                "Bermain dengan penuh semangat dan kegembiraan."
              ],
              tips: "Di usia ini anak sudah bisa aktif mencari, bukan hanya menunggu muncul.",
              frequency: "Beberapa kali sehari"
            },
            {
              id: "ps_12_15_02",
              title: "Menirukan Pekerjaan Rumah Tangga",
              description: "Mengajak anak meniru pekerjaan rumah untuk membangun kemandirian.",
              steps: [
                "Saat membersihkan rumah/menyapu, ajak anak menirukan.",
                "Berikan lap pembersih debu atau sapu kecil.",
                "Beri pujian atas usaha anak."
              ],
              tips: "Ini membangun rasa tanggung jawab dan koneksi emosi dengan keluarga.",
              frequency: "Setiap ada kesempatan"
            },
            {
              id: "ps_12_15_03",
              title: "Makan Sendiri",
              description: "Melatih kemandirian makan dengan sendok dan garpu.",
              steps: [
                "Tunjukkan cara memegang sendok dan garpu.",
                "Biarkan anak makan sendiri dan bantu hanya jika sulit.",
                "Siapkan alas makan yang mudah dibersihkan."
              ],
              tips: "Proses makan mandiri melatih motorik halus, kemandirian, dan rasa percaya diri.",
              frequency: "Setiap waktu makan"
            },
            {
              id: "ps_12_15_04",
              title: "Kunjungan ke Tempat Umum",
              description: "Memperluas pengalaman sosial anak melalui kunjungan ke berbagai tempat.",
              steps: [
                "Bawa anak ke taman, pasar, museum, terminal, dll.",
                "Bicarakan benda-benda yang dilihat.",
                "Kenalkan berbagai suara dan situasi sosial."
              ],
              tips: "Pengalaman dunia nyata tidak bisa digantikan layar gadget.",
              frequency: "1–2x/minggu"
            },
            {
              id: "ps_12_15_05",
              title: "Merawat Boneka",
              description: "Mengajarkan empati dan perawatan melalui bermain boneka.",
              steps: [
                "Berikan boneka plastik/karet yang bisa dicuci.",
                "Ajarkan cara menggendong, memberi makan, merawat, menyayangi, menidurkan, memandikan boneka.",
                "Bermain bersama anak."
              ],
              tips: "Bermain peran adalah cara anak memproses dan memahami dunia sosialnya.",
              frequency: "Setiap hari"
            }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // FASE 6: 15 – 18 BULAN
    // ═══════════════════════════════════════════════════════
    {
      id: "phase_15_18",
      label: "15 – 18 Bulan",
      minMonths: 15,
      maxMonths: 18,
      categories: [

        {
          id: "fine_motor",
          label: "Motorik Halus",
          icon: "✋",
          activities: [
            {
              id: "fm_15_18_01",
              title: "Meniup (Busa Sabun & Peluit)",
              description: "Melatih kontrol napas dan koordinasi oral-motor melalui meniup.",
              steps: [
                "Ajarkan anak meniup busa sabun dengan alat penghasil busa.",
                "Bicarakan bentuk dan rasanya saat meraba busa.",
                "Ajarkan juga meniup peluit."
              ],
              tips: "Kemampuan meniup melatih kontrol diafragma dan koordinasi mulut.",
              frequency: "Setiap hari"
            },
            {
              id: "fm_15_18_02",
              title: "Menyusun Menara dari Kubus",
              description: "Melatih motorik halus dan konsentrasi dengan menyusun kubus setinggi mungkin.",
              steps: [
                "Berikan beberapa kubus atau toples.",
                "Biarkan anak menyusun sebanyak mungkin.",
                "Tunjukkan cara meletakkan dengan hati-hati."
              ],
              tips: "Targetkan menara dari 3–4 kubus. Rayakan setiap tambahan ketinggian!",
              frequency: "Setiap hari"
            },
            {
              id: "fm_15_18_03",
              title: "Membuat Untaian",
              description: "Melatih motorik halus halus dengan memasukkan benda ke dalam tali.",
              steps: [
                "Siapkan manik-manik besar, kancing besar, atau makaroni.",
                "Sediakan tali sepatu yang cukup kuat.",
                "Ajarkan cara memasukkan benda ke tali.",
                "Buat untaian bersama."
              ],
              tips: "Mulai dengan benda yang berlubang besar, kecilkan lubang seiring kemampuan meningkat.",
              frequency: "2–3x/minggu"
            },
            {
              id: "fm_15_18_04",
              title: "Bermain Menggelindingkan Bola",
              description: "Melatih koordinasi tangan dan pemahaman giliran bermain.",
              steps: [
                "Duduklah berseberangan dengan anak.",
                "Gelindingkan bola ke arah anak.",
                "Minta anak menggelindingkan kembali ke arah Anda.",
                "Ulangi bergantian."
              ],
              tips: "Ini juga mengajarkan konsep 'giliran' dalam bermain bersama.",
              frequency: "Setiap hari"
            },
            {
              id: "fm_15_18_05",
              title: "Mengelupas Sticker",
              description: "Melatih propriosepsi jari-jari dan koordinasi motorik halus.",
              steps: [
                "Berikan anak stiker dan contohkan cara mengelupas.",
                "Biarkan anak mencoba sendiri.",
                "Bisa juga tempelkan mainan ke lantai dengan stiker untuk ditarik."
              ],
              tips: "Mengelupas stiker melatih sensasi proprioseptif di ujung jari.",
              frequency: "Beberapa kali seminggu"
            },
            {
              id: "fm_15_18_06",
              title: "Membantu di Dapur",
              description: "Stimulasi multisensorik melalui aktivitas dapur bersama orang tua.",
              steps: [
                "Ajak anak menemani di dapur.",
                "Biarkan anak memetik sayuran, memeras jeruk.",
                "Ajak mencium bau bumbu dapur.",
                "Bermain dengan alat-alat dapur yang aman."
              ],
              tips: "Dapur adalah laboratorium sensorik terbaik — rasa, bau, tekstur, suhu ada semua.",
              frequency: "Setiap ada kesempatan"
            }
          ]
        },

        {
          id: "gross_motor",
          label: "Motorik Kasar",
          icon: "🤸",
          activities: [
            {
              id: "gm_15_18_01",
              title: "Bermain di Luar Rumah",
              description: "Aktivitas fisik di luar ruangan untuk perkembangan motorik menyeluruh.",
              steps: [
                "Ajak anak bermain di halaman atau taman bermain umum.",
                "Dorong untuk: bermain ayunan, memanjat tangga, berlari.",
                "Selalu dampingi dan jangan tinggalkan sendirian."
              ],
              tips: "Permainan luar ruangan memberikan pengalaman sensorik yang tidak bisa didapatkan di dalam rumah.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_15_18_02",
              title: "Bermain Air",
              description: "Stimulasi sensorik multidimensi melalui bermain air.",
              steps: [
                "Biarkan anak bermain air di pancuran atau kolam dangkal.",
                "Berikan cangkir plastik untuk menuang air.",
                "Berikan ember plastik kecil untuk menampung air.",
                "Jangan tinggalkan anak sendirian meski air sangat dangkal."
              ],
              tips: "Air memberikan stimulasi taktil, proprioseptif, dan vestibular sekaligus.",
              frequency: "Beberapa kali seminggu"
            },
            {
              id: "gm_15_18_03",
              title: "Berdiri Kembali tanpa Berpegangan",
              description: "Melatih kemandirian bangkit dari posisi bungkuk.",
              steps: [
                "Letakkan mainan di lantai.",
                "Minta anak memungut dan berdiri kembali tanpa berpegangan.",
                "Amati kemampuan bangkit mandiri."
              ],
              tips: "Kemampuan ini penting untuk keseimbangan dan kekuatan otot tungkai.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_15_18_04",
              title: "Berjalan atau Berlari di Lapangan",
              description: "Melatih keseimbangan jalan dan stimulasi propriosepsi.",
              steps: [
                "Ajak anak berjalan atau berlari kecil di lapangan terbuka.",
                "Semakin jauh semakin baik untuk melatih keseimbangan.",
                "Biarkan berlari bebas tanpa alas kaki di rumput (jika aman)."
              ],
              tips: "Berlari di permukaan yang bervariasi (rumput, pasir, tanah) memperkaya stimulasi proprioseptif.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_15_18_05",
              title: "Menendang Bola ke Target",
              description: "Melatih koordinasi kaki-mata dan kekuatan tungkai.",
              steps: [
                "Buat target dari kotak atau kaleng susu.",
                "Tunjukkan cara menendang bola ke target.",
                "Minta anak mencoba.",
                "Bola bisa dibuat dari potongan koran atau kain."
              ],
              tips: "Mulai dengan target besar dan jarak dekat, perkecil/perjauhlah bertahap.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_15_18_06",
              title: "Bernyanyi sambil Bergoyang",
              description: "Kombinasi stimulasi auditori (bernyanyi) dan vestibular (bergoyang).",
              steps: [
                "Nyanyikan lagu sambil bergoyang atau buat gerakan.",
                "Minta anak mengikuti gerakan.",
                "Gunakan alat musik sederhana untuk suasana lebih meriah.",
                "Bisa juga gunakan ayunan selimut sambil bernyanyi."
              ],
              tips: "Ini melatih dua sistem sensorik utama Learning Triangle sekaligus.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "speech_language",
          label: "Bicara & Bahasa",
          icon: "💬",
          activities: [
            {
              id: "sl_15_18_01",
              title: "Membacakan Buku Setiap Hari",
              description: "Rutinitas membaca harian untuk memperkaya kosakata.",
              steps: [
                "Tunjukkan buku dan bacakan setiap hari.",
                "Tunjuk gambar sambil menyebutkan nama.",
                "Ajak anak bercerita tentang gambar yang dilihat."
              ],
              tips: "Pilih buku bergambar besar dengan cerita sederhana.",
              frequency: "Setiap hari"
            },
            {
              id: "sl_15_18_02",
              title: "Bercerita tentang Gambar di Buku/Majalah",
              description: "Mendorong anak aktif bercerita tentang apa yang dilihat.",
              steps: [
                "Buka buku atau majalah bergambar bersama anak.",
                "Tunjuk gambar dan minta anak bercerita.",
                "Jika anak belum bisa, berikan model: "Ini kelinci, dia lagi lompat-lompat"."
              ],
              tips: "Setiap upaya bercerita anak harus diapresiasi tanpa dikoreksi.",
              frequency: "Setiap hari"
            },
            {
              id: "sl_15_18_03",
              title: "Bermain Telepon-teleponan",
              description: "Melatih percakapan melalui permainan peran telepon.",
              steps: [
                "Buat 'telepon' dari gulungan kertas atau kardus.",
                "Buat permainan: "Menilpun nenek", "Menilpun ayah di kantor".",
                "Dorong anak mengucapkan kata-kata dalam percakapan."
              ],
              tips: "Bermain peran mendorong penggunaan bahasa dalam konteks yang bermakna.",
              frequency: "Beberapa kali seminggu"
            },
            {
              id: "sl_15_18_04",
              title: "Menyebut Nama Barang di Pasar",
              description: "Memperkaya kosakata benda nyata dalam konteks kehidupan.",
              steps: [
                "Ajak anak ke pasar atau supermarket.",
                "Sebutkan nama barang yang dibeli.",
                "Usahakan anak menyebutkan nama barang sebelum Anda."
              ],
              tips: "Konteks nyata jauh lebih efektif dari kartu flashcard.",
              frequency: "Setiap ke pasar/supermarket"
            }
          ]
        },

        {
          id: "social_independence",
          label: "Sosial & Kemandirian",
          icon: "👨‍👩‍👧",
          activities: [
            {
              id: "si_15_18_01",
              title: "Bermain Petak Umpet",
              description: "Membangun kemampuan berpikir spasial dan interaksi sosial.",
              steps: [
                "Beritahu anak bahwa Anda akan bersembunyi.",
                "Minta anak mencari.",
                "Mulai dari tempat yang mudah ditemukan.",
                "Setelah terbiasa, sembunyilah di tempat yang lebih sulit."
              ],
              tips: "Ini melatih kemampuan spasial, kesabaran, dan kerja sama.",
              frequency: "Setiap hari"
            },
            {
              id: "si_15_18_02",
              title: "Jalan-jalan Pagi Setiap Hari",
              description: "Membangun interaksi sosial dengan lingkungan.",
              steps: [
                "Rutinkan jalan pagi setiap hari.",
                "Biarkan anak mengamati interaksi sosial orang tua dengan lingkungan.",
                "Perkenalkan anak pada tetangga, penjual, dll."
              ],
              tips: "Anak belajar interaksi sosial terutama dengan mengamati orang tua berinteraksi.",
              frequency: "Setiap pagi"
            },
            {
              id: "si_15_18_03",
              title: "Memeluk dan Mencium",
              description: "Stimulasi perabaan dan ikatan emosi melalui pelukan.",
              steps: [
                "Peluk dan cium anak sering-sering.",
                "Buat anak memeluk dan mencium kembali.",
                "Saat memeluk, usap punggung anak hingga panggul (integrasi Spinal Galant)."
              ],
              tips: "Pelukan mengintegrasikan Spinal Galant Reflex — membantu anak tidak mengompol malam hari.",
              frequency: "Sepanjang hari"
            },
            {
              id: "si_15_18_04",
              title: "Membereskan Mainan & Membantu di Rumah",
              description: "Membangun kemandirian dan tanggung jawab.",
              steps: [
                "Ajarkan mengambil dan menyimpan mainan, baju, dll.",
                "Mulai dengan membantu, kurangi bantuan secara bertahap.",
                "Minta anak membantu menyiapkan meja makan.",
                "Berikan pekerjaan rumah ringan."
              ],
              tips: "Anak yang diberi tanggung jawab kecil sejak dini tumbuh menjadi anak yang lebih mandiri.",
              frequency: "Setiap hari"
            },
            {
              id: "si_15_18_05",
              title: "Waktu Spesial Bermain dengan Ayah",
              description: "Quality time bersama ayah untuk perkembangan emosi dan sosial.",
              steps: [
                "Luangkan minimal 20 menit setiap hari untuk bermain bersama ayah.",
                "Tidak ada aturan permainan — biarkan anak leluasa.",
                "Tunjukkan permainan baru: kejar-kejaran, putar-putaran, dll."
              ],
              tips: "Keterlibatan ayah sangat penting untuk perkembangan emosi dan kepercayaan diri anak.",
              frequency: "Setiap hari"
            }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // FASE 7: 18 – 24 BULAN
    // ═══════════════════════════════════════════════════════
    {
      id: "phase_18_24",
      label: "18 – 24 Bulan",
      minMonths: 18,
      maxMonths: 24,
      categories: [

        {
          id: "fine_motor",
          label: "Motorik Halus & Perabaan",
          icon: "✋",
          activities: [
            {
              id: "fm_18_24_01",
              title: "Bermain Tepung Cair",
              description: "Eksplorasi tekstur cair melalui bermain tepung terigu cair berwarna.",
              steps: [
                "Buat adonan tepung terigu kental dan beri pewarna makanan.",
                "Masukkan mainan hewan ke dalam tepung cair.",
                "Ajak anak bermain dengan tepung.",
                "Jika belum mau, tawarkan memindahkan hewan ke wadah kosong.",
                "Jika belum nyaman, kenalkan terus selama seminggu tanpa memaksa."
              ],
              tips: "Gunakan bahan yang aman dimakan (food grade). Kesabaran adalah kunci.",
              frequency: "3–4x/minggu"
            },
            {
              id: "fm_18_24_02",
              title: "Bermain Jelly/Agar-agar",
              description: "Eksplorasi tekstur kenyal dan dingin melalui jelly.",
              steps: [
                "Masak jelly/agar-agar, potong menjadi dadu sedang.",
                "Berikan kepada anak untuk mengeksplorasi teksturnya.",
                "Jika belum nyaman, kenalkan terus selama seminggu tanpa memaksa."
              ],
              tips: "Mulai dengan jelly yang berwarna cerah — warna menarik perhatian anak.",
              frequency: "2–3x/minggu"
            },
            {
              id: "fm_18_24_03",
              title: "Bermain Adonan Tepung Padat",
              description: "Stimulasi perabaan dan kreativitas melalui playdough buatan sendiri.",
              steps: [
                "Buat adonan dari terigu, air, minyak goreng, dan pewarna makanan.",
                "Aduk hingga menjadi adonan padat.",
                "Ajak anak meremas, membentuk bola, lonjong, berbagai bentuk.",
                "Atau buat kue kering bersama / bermain edible playdough.",
                "Jika sudah nyaman, ajarkan berbagai bentuk."
              ],
              tips: "Playdough buatan sendiri lebih aman dan fleksibel dari yang dibeli.",
              frequency: "3–4x/minggu"
            },
            {
              id: "fm_18_24_04",
              title: "Persepsi Temperatur dengan Mainan",
              description: "Mengenalkan sensasi dingin dan hangat melalui bermain air dengan mainan.",
              steps: [
                "Siapkan dua mangkok: satu berisi es batu + air (dingin), satu air hangat.",
                "Isi masing-masing mangkok dengan mainan kecil.",
                "Ajak anak mengambil mainan dari air dingin sambil sebutkan "dingin".",
                "Ganti ke air hangat, biarkan anak mengeksplorasi.",
                "Bergantian antara dingin dan hangat."
              ],
              tips: "Ini mengintegrasikan stimulasi taktil, proprioseptif, dan bahasa sekaligus.",
              frequency: "Setiap hari"
            },
            {
              id: "fm_18_24_05",
              title: "Mengenal Berbagai Ukuran dan Bentuk",
              description: "Melatih pemahaman konsep ukuran dan bentuk melalui permainan.",
              steps: [
                "Buat lubang berbeda ukuran dan bentuk pada tutup kotak/kardus.",
                "Berikan anak benda-benda yang bisa dimasukkan melalui lubang tersebut.",
                "Biarkan anak mencari dan mencoba memasukkan."
              ],
              tips: "Shape sorter adalah versi komersial dari aktivitas ini — bisa dibuat sendiri.",
              frequency: "Beberapa kali seminggu"
            },
            {
              id: "fm_18_24_06",
              title: "Bermain Puzzle Sederhana",
              description: "Melatih pemecahan masalah dan koordinasi visual-motorik.",
              steps: [
                "Berikan puzzle sederhana 2–3 potong.",
                "Bisa beli atau buat dari karton yang dipotong.",
                "Ajarkan cara memasang potongan.",
                "Biarkan anak mencoba sendiri."
              ],
              tips: "Mulai dari puzzle 2 potong dengan gambar yang sudah dikenal anak.",
              frequency: "Setiap hari"
            },
            {
              id: "fm_18_24_07",
              title: "Menggambar Garis dan Bentuk",
              description: "Melatih motorik halus dengan menggambar berbagai bentuk dasar.",
              steps: [
                "Tunjukkan cara menggambar garis, bulatan, dan bentuk lain.",
                "Gunakan spidol, crayon, atau cat jari.",
                "Ajarkan cara memegangnya.",
                "Biarkan anak meniru dan bereksplorasi."
              ],
              tips: "Urutan perkembangan: garis → lingkaran → silang → kotak → segitiga.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "gross_motor",
          label: "Motorik Kasar",
          icon: "🤸",
          activities: [
            {
              id: "gm_18_24_01",
              title: "Pemanasan Menari Bebas",
              description: "Pemanasan dengan musik dan gerakan bebas sebelum aktivitas fisik.",
              steps: [
                "Putar musik yang menyenangkan.",
                "Ajak anak menari atau bergerak bebas menggerakkan tangan dan kaki.",
                "Lakukan selama 1–2 menit."
              ],
              tips: "Pilih musik dengan irama yang bervariasi untuk stimulasi ritme dan gerak.",
              frequency: "Setiap hari sebelum aktivitas fisik"
            },
            {
              id: "gm_18_24_02",
              title: "Berdiri dengan Satu Kaki",
              description: "Melatih keseimbangan statis dengan berdiri satu kaki.",
              steps: [
                "Contohkan cara berdiri dengan satu kaki.",
                "Ajarkan anak mencoba bergantian kanan-kiri.",
                "Awalnya boleh berpegangan pada Anda atau kursi.",
                "Tingkatkan waktu keseimbangan bertahap."
              ],
              tips: "Ini melatih vestibular dan propriosepsi sekaligus.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_18_24_03",
              title: "Melompat dengan Dua Kaki",
              description: "Melatih koordinasi dan kekuatan tungkai melalui lompatan dua kaki.",
              steps: [
                "Tunjukkan cara melompat mengangkat kedua kaki bersamaan (bukan satu kaki).",
                "Buat 10 lingkaran kertas berwarna (diameter 8–10 cm), tempel berjejer di lantai (jarak 10 cm).",
                "Ajak anak melompat di atas lingkaran bolak-balik 2 putaran.",
                "Jika belum mau, latih terus dengan sabar."
              ],
              tips: "Lompatan dua kaki melatih keseimbangan, fokus, dan otot mata sekaligus.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_18_24_04",
              title: "Merangkak Melalui Terowongan",
              description: "Melanjutkan stimulasi merangkak dengan rintangan.",
              steps: [
                "Buat terowongan dari kardus besar.",
                "Atau gunakan mainan terowongan.",
                "Ajak anak merangkak bersama melewati terowongan 2–3 kali."
              ],
              tips: "Merangkak di usia ini tetap bermanfaat untuk koordinasi otak kiri-kanan.",
              frequency: "Beberapa kali seminggu"
            },
            {
              id: "gm_18_24_05",
              title: "Berjalan Memindahkan Bola dengan Sendok Sayur",
              description: "Melatih koordinasi, keseimbangan, dan konsentrasi.",
              steps: [
                "Siapkan 15–20 bola plastik, 2 keranjang/ember, 1 sendok sayur.",
                "Isi satu keranjang dengan bola, letakkan keranjang kosong berjauhan.",
                "Ajak anak memindahkan bola ke keranjang kosong menggunakan sendok sayur.",
                "Jika tidak ada bola, gunakan mainan atau balon isi air."
              ],
              tips: "Ini adalah aktivitas yang sangat efektif untuk melatih koordinasi bilateral.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_18_24_06",
              title: "Memindahkan dan Menumpuk Benda sambil Berjalan",
              description: "Melatih keseimbangan berjalan sambil membawa dan menumpuk.",
              steps: [
                "Siapkan 10 gelas plastik atau kotak-kotak kecil.",
                "Buat jarak agar anak bisa berjalan untuk memindahkan.",
                "Ajak anak menumpuk gelas/kotak tersebut."
              ],
              tips: "Tantangan ganda (berjalan + menumpuk) melatih konsentrasi dan koordinasi.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_18_24_07",
              title: "Latihan Memanjat Sofa/Tempat Tidur",
              description: "Melatih kekuatan otot dan koordinasi melalui aktivitas memanjat.",
              steps: [
                "Pilih sofa atau tempat tidur yang bisa dijangkau anak.",
                "Biarkan kedua tangannya meraih tepi sofa untuk menarik badan.",
                "Bantu dengan menahan salah satu kaki lebih tinggi.",
                "Biarkan anak duduk di atas sofa.",
                "Ajarkan turun dengan cara mundur, kaki turun lebih dulu.",
                "Jaga dari belakang agar tidak terjatuh."
              ],
              tips: "Memanjat adalah aktivitas proprioseptif dan vestibular yang sangat baik.",
              frequency: "Setiap hari"
            },
            {
              id: "gm_18_24_08",
              title: "Waktu Bebas Bergerak di Luar",
              description: "Memberikan waktu bermain bebas di luar sekaligus menghafal Al-Qur'an.",
              steps: [
                "Berikan anak waktu bebas bergerak di samping Anda.",
                "Anda bisa menghafal/mengulang hafalan Al-Qur'an.",
                "Biarkan anak berlari, melompat, merayap bebas.",
                "Semakin banyak berlari, semakin baik."
              ],
              tips: "Kombinasi aktivitas fisik anak + dzikir/hafalan orang tua adalah stimulasi optimal.",
              frequency: "Setiap hari"
            }
          ]
        },

        {
          id: "speech_language",
          label: "Bicara & Bahasa",
          icon: "💬",
          activities: [
            {
              id: "sl_18_24_01",
              title: "Mengenalkan Benda Nyata (Buah-buahan)",
              description: "Mengenalkan nama benda nyata melalui pengalaman langsung multisensorik.",
              steps: [
                "Siapkan buah pisang dan apel.",
                "Tunjukkan ke anak satu per satu.",
                "Sebutkan nama buah, minta anak mencoba menyebutkan.",
                "Berikan buah untuk diraba dan dirasakan bentuknya.",
                "Saat meraba, sebutkan: "Ini bentuk pisang".",
                "Jika sudah bisa makan, berikan buah dan sebutkan rasanya.",
                "Lanjutkan dengan benda lain: piring, sendok, gelas."
              ],
              tips: "Pembelajaran multisensorik (lihat + pegang + rasa) jauh lebih efektif dari kartu gambar.",
              frequency: "Setiap hari"
            },
            {
              id: "sl_18_24_02",
              title: "Mengenal Warna",
              description: "Mengenalkan konsep warna melalui pengelompokan benda.",
              steps: [
                "Siapkan beberapa benda dengan berbagai warna.",
                "Kumpulkan benda sesuai warnanya.",
                "Minta anak mengikuti mengumpulkan warna yang sama.",
                "Sebutkan nama warna setiap kali."
              ],
              tips: "Mulai dari 2–3 warna dasar (merah, kuning, biru) sebelum menambah lebih banyak.",
              frequency: "Setiap hari"
            },
            {
              id: "sl_18_24_03",
              title: "Belajar Menunjuk Anggota Badan",
              description: "Melatih pemahaman nama anggota tubuh melalui pertanyaan.",
              steps: [
                "Tanyakan: "Hidungnya [nama anak] mana?", "Kakinya mana?"",
                "Tunggu anak menunjuk bagian yang diminta.",
                "Berikan pujian jika benar, tunjukkan yang benar jika salah."
              ],
              tips: "Mulai dari bagian yang mudah (mata, hidung, tangan) sebelum yang lebih spesifik.",
              frequency: "Beberapa kali sehari"
            },
            {
              id: "sl_18_24_04",
              title: "Membacakan Buku Setiap Hari (Jadwal Khusus)",
              description: "Jadwal membaca harian untuk memperkaya kosakata dan imajinasi.",
              steps: [
                "Buat jadwal khusus membacakan buku setiap hari.",
                "Pilih waktu yang konsisten (misal sebelum tidur).",
                "Baca dengan ekspresif, tunjuk gambar, buat suara karakter."
              ],
              tips: "Membaca meningkatkan kosakata, imajinasi, dan memori anak secara bersamaan.",
              frequency: "Setiap hari (jadwal tetap)"
            }
          ]
        },

        {
          id: "social_independence",
          label: "Sosial & Kemandirian",
          icon: "👨‍👩‍👧",
          activities: [
            {
              id: "si_18_24_01",
              title: "Mengancingkan Kancing Baju",
              description: "Melatih motorik halus dan kemandirian berpakaian.",
              steps: [
                "Berikan pakaian atau mainan dengan kancing bulat besar, kancing tarik, atau kancing perekat.",
                "Ajarkan cara mengancingkan.",
                "Biarkan anak mencoba sendiri."
              ],
              tips: "Mulai dari kancing perekat/velcro yang paling mudah, lanjut ke kancing tarik, baru kancing bulat.",
              frequency: "Setiap kali berpakaian"
            },
            {
              id: "si_18_24_02",
              title: "Permainan Interaksi dengan Teman",
              description: "Membangun kemampuan bermain bersama dan mengikuti aturan.",
              steps: [
                "Ajak bermain petak umpet bersama anak lain.",
                "Ajarkan konsep giliran dan mengikuti aturan permainan.",
                "Fasilitasi interaksi positif antar anak."
              ],
              tips: "Bermain dengan teman sebaya adalah latihan sosial-emosional yang tidak bisa digantikan.",
              frequency: "Beberapa kali seminggu"
            },
            {
              id: "si_18_24_03",
              title: "Membuat Rumah-rumahan dari Kardus",
              description: "Stimulasi kreativitas dan imajinasi melalui proyek bersama.",
              steps: [
                "Ajak anak membuat rumah-rumahan dari kotak kardus besar.",
                "Potong kardus untuk membuat jendela dan pintu.",
                "Hias bersama anak.",
                "Biarkan anak bermain di dalamnya."
              ],
              tips: "Proses membuat bersama lebih penting dari hasilnya.",
              frequency: "Sesekali (proyek kreatif)"
            },
            {
              id: "si_18_24_04",
              title: "Berpakaian Sendiri",
              description: "Melatih kemandirian berpakaian secara bertahap.",
              steps: [
                "Biarkan anak memakai atau melepas pakaian sendiri sejauh kemampuannya.",
                "Berikan waktu yang cukup — jangan terburu-buru.",
                "Kurangi bantuan secara bertahap.",
                "Berikan pujian atas setiap keberhasilan kecil."
              ],
              tips: "Dimulai dari melepas (lebih mudah) sebelum memakai.",
              frequency: "Setiap kali berpakaian"
            },
            {
              id: "si_18_24_05",
              title: "Latihan Berpisah dengan Orang Tua",
              description: "Membangun rasa aman dan kepercayaan melalui perpisahan singkat.",
              steps: [
                "Minta pasangan mengawasi anak saat Anda pergi.",
                "Berpamitan dengan baik kepada anak.",
                "Mulai dengan pergi sebentar saja.",
                "Selalu kembali sesuai janji.",
                "Tingkatkan durasi perpisahan secara bertahap."
              ],
              tips: "Anak yang tahu orang tua selalu kembali akan memiliki secure attachment yang sehat.",
              frequency: "Beberapa kali seminggu (latihan)"
            }
          ]
        }
      ]
    }
  ]
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Mendapatkan fase yang sesuai berdasarkan usia dalam bulan
 * @param {number} ageInMonths - usia anak dalam bulan
 * @returns {Object} - phase object yang sesuai
 */
export function getPhaseByAge(ageInMonths) {
  return STIMULASI_DB.phases.find(
    (phase) => ageInMonths >= phase.minMonths && ageInMonths < phase.maxMonths
  ) || STIMULASI_DB.phases[STIMULASI_DB.phases.length - 1];
}

/**
 * Mendapatkan semua aktivitas dari fase tertentu
 * @param {string} phaseId - id fase
 * @returns {Array} - array semua aktivitas
 */
export function getAllActivitiesByPhase(phaseId) {
  const phase = STIMULASI_DB.phases.find((p) => p.id === phaseId);
  if (!phase) return [];
  return phase.categories.flatMap((cat) =>
    cat.activities.map((act) => ({ ...act, categoryId: cat.id, categoryLabel: cat.label, categoryIcon: cat.icon }))
  );
}

/**
 * Menghitung usia dalam bulan dari tanggal lahir
 * @param {string} birthDateStr - string tanggal lahir (ISO format)
 * @returns {number} - usia dalam bulan
 */
export function getAgeInMonths(birthDateStr) {
  const birth = new Date(birthDateStr);
  const today = new Date();
  const months =
    (today.getFullYear() - birth.getFullYear()) * 12 +
    (today.getMonth() - birth.getMonth());
  return Math.max(0, months);
}

/**
 * Total jumlah aktivitas per fase
 */
export function getActivityStats() {
  return STIMULASI_DB.phases.map((phase) => ({
    phaseId: phase.id,
    label: phase.label,
    totalActivities: phase.categories.reduce((sum, cat) => sum + cat.activities.length, 0),
    categories: phase.categories.map((cat) => ({
      categoryId: cat.id,
      label: cat.label,
      count: cat.activities.length
    }))
  }));
}
