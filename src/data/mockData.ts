export type Language = "it" | "en" | "es" | "th";

export interface BlogPostItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export interface QuizQuestionItem {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SlotItem {
  id: string;
  date: string;
  time: string;
  type: "Pratica" | "Teoria";
  typeLabel?: string;
  instructor: string;
}

export const blogPostsByLang: Record<Language, BlogPostItem[]> = {
  it: [
    {
      id: "1",
      title: "Come superare l'ansia da esame pratico",
      excerpt:
        "Consigli pratici e tecniche di rilassamento per affrontare l'esame di guida con la giusta mentalità.",
      content:
        "L'esame pratico di guida può essere un momento di grande stress. La chiave per superarlo è la preparazione, non solo tecnica ma anche mentale. \n\n1. **Respira profondamente**: Prima di iniziare, fai tre respiri profondi. \n2. **Visualizza il successo**: Immagina te stesso mentre esegui le manovre in modo perfetto. \n3. **Non avere fretta**: L'esaminatore valuta la sicurezza, non la velocità. Prenditi il tuo tempo per ogni azione. \n\nRicorda: l'esaminatore non è lì per bocciarti, ma per assicurarsi che tu sia un guidatore sicuro.",
      date: "2024-05-12",
      category: "Consigli Pratici",
      image: "https://picsum.photos/seed/driving/800/400",
    },
    {
      id: "2",
      title: "Novità Codice della Strada 2024",
      excerpt:
        "Tutte le nuove regole per i neopatentati, dai limiti di velocità alle sanzioni per l'uso dello smartphone.",
      content:
        "Il 2024 ha portato importanti novità per chi ha appena conseguito la patente. \n\n- **Limiti di potenza**: Le restrizioni sulla potenza dei veicoli guidabili dai neopatentati sono state riviste. \n- **Smartphone alla guida**: Le sanzioni per l'uso del cellulare sono state inasprite, con sospensione immediata della patente in alcuni casi. \n- **Tasso alcolemico**: Rimane la tolleranza zero per i primi tre anni dal conseguimento della patente. \n\nRimani aggiornato per evitare brutte sorprese!",
      date: "2024-05-05",
      category: "Legislazione",
      image: "https://picsum.photos/seed/law/800/400",
    },
    {
      id: "3",
      title: "Segnali stradali: i 5 più confusi",
      excerpt:
        "Facciamo chiarezza sui segnali stradali che mettono più in difficoltà i candidati all'esame teorico.",
      content:
        "Alcuni segnali stradali sembrano fatti apposta per confondere. Ecco i 5 più temuti: \n\n1. **Divieto di sosta vs Divieto di fermata**: Il primo ha una sola barra diagonale, il secondo due (una X). \n2. **Precedenza nei sensi unici alternati**: Quadrato blu (hai la precedenza) vs Cerchio rosso (devi dare la precedenza). \n3. **Passaggio a livello con barriere vs senza barriere**: Impara a distinguere il disegno del cancello da quello del treno. \n\nRipassa questi segnali e l'esame teorico sarà una passeggiata!",
      date: "2024-04-28",
      category: "Teoria",
      image: "https://picsum.photos/seed/signs/800/400",
    },
  ],
  en: [
    {
      id: "1",
      title: "How to Overcome Driving Test Anxiety",
      excerpt:
        "Practical tips and relaxation techniques to face your practical driving test with the right mindset.",
      content:
        "The practical driving exam can be a very stressful moment. The key to passing it is preparation—not just technical, but mental too. \n\n1. **Breathe deeply**: Before starting, take three deep breaths. \n2. **Visualize success**: Picture yourself performing every maneuver smoothly. \n3. **Don't rush**: The examiner evaluates safety, not speed. Take your time for every action. \n\nRemember: the examiner is not there to fail you, but to make sure you are a safe driver.",
      date: "2024-05-12",
      category: "Practical Tips",
      image: "https://picsum.photos/seed/driving/800/400",
    },
    {
      id: "2",
      title: "2024 Highway Code Updates",
      excerpt:
        "All the new rules for new drivers, from speed limits to tougher penalties for smartphone use.",
      content:
        "2024 has introduced important changes for newly licensed drivers. \n\n- **Power limits**: Restrictions on engine power for vehicles driven by new drivers have been updated. \n- **Smartphones while driving**: Penalties for mobile phone use have been tightened, with immediate license suspension in several cases. \n- **Blood alcohol limit**: Zero tolerance remains in force for the first three years after getting your license. \n\nStay informed to avoid unpleasant surprises!",
      date: "2024-05-05",
      category: "Legislation",
      image: "https://picsum.photos/seed/law/800/400",
    },
    {
      id: "3",
      title: "Road Signs: The 5 Most Confusing Ones",
      excerpt:
        "Let's clear up the road signs that trip up theory test candidates the most.",
      content:
        "Some road signs seem designed to confuse you. Here are the 5 most feared ones: \n\n1. **No Parking vs No Standing**: The first has a single diagonal bar, the second has two (an X). \n2. **Priority in alternating one-way traffic**: Blue square (you have priority) vs Red circle (you must yield). \n3. **Level crossing with barriers vs without barriers**: Learn to distinguish the gate icon from the locomotive icon. \n\nReview these signs and the theory test will be a breeze!",
      date: "2024-04-28",
      category: "Theory",
      image: "https://picsum.photos/seed/signs/800/400",
    },
  ],
  th: [
    {
      id: "1",
      title: "วิธีเอาชนะความตื่นเต้นในการสอบขับรถปฏิบัติ",
      excerpt:
        "เคล็ดลับปฏิบัติและเทคนิคการผ่อนคลายเพื่อเตรียมพร้อมสอบใบขับขี่ด้วยความมั่นใจ",
      content:
        "การสอบปฏิบัติขับรถอาจเป็นช่วงเวลาที่ตึงเครียด กุญแจสำคัญในการสอบผ่านคือการเตรียมความพร้อมทั้งทักษะและจิตใจ \n\n1. **หายใจเข้าลึกๆ**: ก่อนออกรถ ให้สูดหายใจเข้าลึกๆ สามครั้ง \n2. **จินตนาการถึงความสำเร็จ**: นึกภาพตัวเองบังคับรถและทำท่าสอบได้อย่างราบรื่น \n3. **ไม่ต้องรีบร้อน**: ผู้คุมสอบประเมินความปลอดภัย ไม่ใช่ความเร็ว ค่อยๆ ทำทุกขั้นตอนอย่างรอบคอบ \n\nจำไว้ว่าผู้คุมสอบไม่ได้ต้องการให้คุณตก แต่ต้องการมั่นใจว่าคุณขับขี่ได้อย่างปลอดภัย",
      date: "2024-05-12",
      category: "เคล็ดลับปฏิบัติ",
      image: "https://picsum.photos/seed/driving/800/400",
    },
    {
      id: "2",
      title: "อัปเดตกฎจราจรใหม่ปี 2024",
      excerpt:
        "กฎระเบียบใหม่ทั้งหมดสำหรับผู้ขับขี่มือใหม่ ตั้งแต่อัตราความเร็วไปจนถึงบทลงโทษการใช้สมาร์ทโฟน",
      content:
        "ปี 2024 มีการเปลี่ยนแปลงที่สำคัญสำหรับผู้ที่เพิ่งได้รับใบอนุญาตขับขี่ \n\n- **ข้อจำกัดกำลังเครื่องยนต์**: ปรับปรุงเกณฑ์กำลังรถสำหรับผู้ขับขี่มือใหม่ \n- **การใช้สมาร์ทโฟนขณะขับรถ**: เพิ่มโทษหนักขึ้นสำหรับการใช้โทรศัพท์มือถือ อาจถูกพักใช้ใบขับขี่ทันที \n- **ปริมาณแอลกอฮอล์**: บังคับใช้เกณฑ์แอลกอฮอล์เป็นศูนย์ตลอด 3 ปีแรกหลังได้รับใบขับขี่ \n\nติดตามข่าวสารอยู่เสมอเพื่อการขับขี่ที่ปลอดภัยและถูกต้องตามกฎหมาย!",
      date: "2024-05-05",
      category: "กฎหมายจราจร",
      image: "https://picsum.photos/seed/law/800/400",
    },
    {
      id: "3",
      title: "5 ป้ายจราจรที่มักจำสับสนมากที่สุด",
      excerpt:
        "ไขข้อข้องใจเกี่ยวกับป้ายจราจรที่ทำให้ผู้เข้าสอบทฤษฎีสับสนบ่อยที่สุด",
      content:
        "ป้ายจราจรบางป้ายมีความคล้ายคลึงกันมาก นี่คือประเด็นสำคัญที่ควรจำ: \n\n1. **ห้ามจอด vs ห้ามหยุดรถ**: ป้ายห้ามจอดมีแถบเฉียงเส้นเดียว ส่วนป้ายห้ามหยุดรถมีกากบาท (X) \n2. **สิทธิในการไปก่อนในทางแคบ**: ป้ายสี่เหลี่ยมสีน้ำเงิน (คุณได้สิทธิไปก่อน) vs ป้ายวงกลมขอบแดง (ต้องให้ทางรถสวนมา) \n3. **ทางข้ามรถไฟแบบมีเครื่องกั้น vs ไม่มีเครื่องกั้น**: สังเกตรูปสัญลักษณ์รั้วกั้นกับรูปรถไฟให้ชัดเจน \n\nทบทวนป้ายเหล่านี้ให้แม่นยำ แล้วการสอบทฤษฎีจะเป็นเรื่องง่าย!",
      date: "2024-04-28",
      category: "ทฤษฎี",
      image: "https://picsum.photos/seed/signs/800/400",
    },
  ],
};

export const blogPosts = blogPostsByLang.it;

export const quizQuestionsByLang: Record<Language, QuizQuestionItem[]> = {
  it: [
    {
      id: 1,
      question: "Il segnale raffigurato vieta il transito a tutti i veicoli?",
      image: "https://picsum.photos/seed/divieto/400/300",
      options: ["Vero", "Falso"],
      correctAnswer: 1,
      explanation:
        "Il segnale di divieto di transito vieta la circolazione nei due sensi a tutti i veicoli, ma l'immagine potrebbe rappresentare un divieto specifico (es. autocarri).",
    },
    {
      id: 2,
      question:
        "Il limite massimo di velocità per un neopatentato in autostrada è:",
      options: ["130 km/h", "110 km/h", "100 km/h", "90 km/h"],
      correctAnswer: 2,
      explanation:
        "Per i primi 3 anni dal conseguimento della patente B, il limite in autostrada è di 100 km/h.",
    },
    {
      id: 3,
      question:
        "In presenza del segnale 'Dare Precedenza', è obbligatorio fermarsi sempre?",
      options: [
        "Sì, sempre",
        "No, solo se arrivano veicoli",
        "Sì, ma solo di notte",
      ],
      correctAnswer: 1,
      explanation:
        "Il segnale 'Dare Precedenza' impone di rallentare e dare la precedenza, ma non obbliga ad arrestarsi se non ci sono veicoli in arrivo (a differenza dello STOP).",
    },
    {
      id: 4,
      question: "L'uso degli indicatori di direzione (frecce) è obbligatorio:",
      options: [
        "Solo per svoltare agli incroci",
        "Ogni volta che si cambia corsia o direzione",
        "Solo in autostrada",
      ],
      correctAnswer: 1,
      explanation:
        "Le frecce vanno usate per segnalare in anticipo ogni cambio di corsia, svolta o manovra di parcheggio.",
    },
    {
      id: 5,
      question: "La distanza di sicurezza dipende da:",
      options: [
        "Solo dalla velocità",
        "Velocità, condizioni meteo e prontezza di riflessi",
        "Dal tipo di veicolo che precede",
      ],
      correctAnswer: 1,
      explanation:
        "La distanza di sicurezza deve essere adeguata alla velocità, alle condizioni della strada e del traffico, e alle condizioni psicofisiche del conducente.",
    },
  ],
  en: [
    {
      id: 1,
      question: "Does the pictured sign prohibit transit for all vehicles?",
      image: "https://picsum.photos/seed/divieto/400/300",
      options: ["True", "False"],
      correctAnswer: 1,
      explanation:
        "A general no-entry sign bans traffic in both directions for all vehicles, whereas this specific sign may apply only to a vehicle category (e.g. trucks).",
    },
    {
      id: 2,
      question:
        "The maximum speed limit for a newly licensed driver on the highway is:",
      options: ["130 km/h", "110 km/h", "100 km/h", "90 km/h"],
      correctAnswer: 2,
      explanation:
        "For the first 3 years after obtaining a Category B license, the highway speed limit is 100 km/h.",
    },
    {
      id: 3,
      question:
        "When approaching a 'Yield / Give Way' sign, is it mandatory to come to a complete stop every time?",
      options: [
        "Yes, always",
        "No, only if other vehicles are approaching",
        "Yes, but only at night",
      ],
      correctAnswer: 1,
      explanation:
        "The 'Give Way' sign requires you to slow down and yield, but does not require a full stop if the road is clear (unlike a STOP sign).",
    },
    {
      id: 4,
      question: "Using turn signals (indicators) is mandatory:",
      options: [
        "Only when turning at intersections",
        "Every time you change lanes or direction",
        "Only on highways",
      ],
      correctAnswer: 1,
      explanation:
        "Turn signals must be used in advance to indicate any lane change, turn, or parking maneuver.",
    },
    {
      id: 5,
      question: "Safe following distance depends on:",
      options: [
        "Speed only",
        "Speed, weather conditions, and driver reaction time",
        "The type of vehicle ahead",
      ],
      correctAnswer: 1,
      explanation:
        "The safe distance must be adjusted to your speed, road and traffic conditions, and the driver's physical and mental alertness.",
    },
  ],
  th: [
    {
      id: 1,
      question: "ป้ายจราจรที่แสดงห้ามรถทุกชนิดผ่านใช่หรือไม่?",
      image: "https://picsum.photos/seed/divieto/400/300",
      options: ["จริง", "เท็จ"],
      correctAnswer: 1,
      explanation:
        "ป้ายห้ามผ่านทั่วไปจะห้ามรถทุกชนิดสัญจรทั้งสองทิศทาง แต่ป้ายเฉพาะอาจจำกัดเฉพาะรถบางประเภทเท่านั้น (เช่น รถบรรทุก)",
    },
    {
      id: 2,
      question: "ความเร็วสูงสุดสำหรับผู้ขับขี่มือใหม่บนทางด่วน (มอเตอร์เวย์) คือ:",
      options: ["130 km/h", "110 km/h", "100 km/h", "90 km/h"],
      correctAnswer: 2,
      explanation:
        "ในช่วง 3 ปีแรกหลังจากได้รับใบขับขี่ประเภท B ความเร็วสูงสุดบนทางด่วนคือ 100 กม./ชม.",
    },
    {
      id: 3,
      question: "เมื่อพบป้าย 'ให้ทาง' (Yield) จำเป็นต้องหยุดรถสนิททุกครั้งหรือไม่?",
      options: [
        "ใช่ ต้องหยุดทุกครั้ง",
        "ไม่ หยุดเฉพาะเมื่อมีรถในทางหลักแล่นมา",
        "ใช่ แต่เฉพาะเวลากลางคืน",
      ],
      correctAnswer: 1,
      explanation:
        "ป้าย 'ให้ทาง' กำหนดให้ชะลอความเร็วและให้ทาง แต่ไม่บังคับให้หยุดสนิทหากไม่มีรถแล่นมา (ต่างจากป้าย STOP)",
    },
    {
      id: 4,
      question: "การใช้สัญญาณไฟเลี้ยวเป็นสิ่งจำเป็นเมื่อใด:",
      options: [
        "เฉพาะเวลาเลี้ยวตามทางแยกเท่านั้น",
        "ทุกครั้งที่เปลี่ยนช่องทางเดินรถหรือเปลี่ยนทิศทาง",
        "เฉพาะบนทางด่วนเท่านั้น",
      ],
      correctAnswer: 1,
      explanation:
        "ต้องเปิดไฟเลี้ยวล่วงหน้าทุกครั้งเมื่อต้องการเปลี่ยนเลน เลี้ยวรถ หรือเข้าจอด",
    },
    {
      id: 5,
      question: "ระยะห่างเพื่อความปลอดภัยขึ้นอยู่กับปัจจัยใด:",
      options: [
        "ความเร็วเพียงอย่างเดียว",
        "ความเร็ว สภาพอากาศ และความพร้อมของปฏิกิริยาผู้ขับขี่",
        "ประเภทของรถคันหน้าเท่านั้น",
      ],
      correctAnswer: 1,
      explanation:
        "ระยะห่างที่ปลอดภัยต้องเหมาะสมกับความเร็ว สภาพถนนและการจราจร รวมถึงความพร้อมของร่างกายและสติสัมปชัญญะของผู้ขับขี่",
    },
  ],
};

export const quizQuestions = quizQuestionsByLang.it;

export const availableSlots: SlotItem[] = [
  {
    id: "1",
    date: "2024-06-10",
    time: "09:00",
    type: "Pratica",
    instructor: "Marco",
  },
  {
    id: "2",
    date: "2024-06-10",
    time: "10:00",
    type: "Pratica",
    instructor: "Marco",
  },
  {
    id: "3",
    date: "2024-06-10",
    time: "15:00",
    type: "Teoria",
    instructor: "Laura",
  },
  {
    id: "4",
    date: "2024-06-11",
    time: "11:00",
    type: "Pratica",
    instructor: "Giulia",
  },
  {
    id: "5",
    date: "2024-06-11",
    time: "16:00",
    type: "Pratica",
    instructor: "Marco",
  },
  {
    id: "6",
    date: "2024-06-12",
    time: "18:00",
    type: "Teoria",
    instructor: "Laura",
  },
];
