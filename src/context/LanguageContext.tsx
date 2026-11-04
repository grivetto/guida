import React, { createContext, useContext, useState } from "react";
import { Language } from "../data/mockData";

export const LANGUAGES: {
  code: Language;
  label: string;
  name: string;
  flag: string;
  locale: string;
}[] = [
  {
    code: "it",
    label: "IT",
    name: "Italiano",
    flag: "https://flagcdn.com/w40/it.png",
    locale: "it-IT",
  },
  {
    code: "en",
    label: "EN",
    name: "English",
    flag: "https://flagcdn.com/w40/gb.png",
    locale: "en-GB",
  },
    {
    code: "es",
    label: "ES",
    name: "Español",
    flag: "https://flagcdn.com/w40/es.png",
    locale: "es-ES",
  },
  {
    code: "th",
    label: "TH",
    name: "ไทย",
    flag: "https://flagcdn.com/w40/th.png",
    locale: "th-TH",
  },
];

const TRANSLATIONS = {
  it: {
    nav: {
      home: "Home",
      blog: "Blog",
      book: "Prenota",
      quiz: "Quiz",
      switchLang: "Cambia lingua",
    },
    footer: {
      rights: "Autoscuola NextGen. Tutti i diritti riservati.",
    },
    home: {
      heroBadge: "La tua patente, il tuo stile",
      heroTitle1: "Prendi la",
      heroTitle2: "Patente",
      heroTitle3: "Ora.",
      heroSubtitle:
        "Dimentica le vecchie autoscuole noiose. Metodi moderni, prenotazioni online e quiz interattivi per farti guidare in un lampo.",
      ctaBook: "Prenota Guida",
      ctaQuiz: "Prova i Quiz",
      heroImgAlt: "Ragazzo alla guida",
      whyTitle1: "Perché Scegliere",
      whyTitle2: "Noi",
      whySubtitle:
        "Siamo l'autoscuola pensata per la tua generazione. Niente scartoffie inutili, solo risultati.",
      features: [
        {
          title: "Metodo Veloce",
          description:
            "Impara a guidare in meno tempo con le nostre tecniche di insegnamento moderne e personalizzate.",
        },
        {
          title: "App & Quiz",
          description:
            "Studia ovunque tu sia con la nostra piattaforma quiz ottimizzata per smartphone.",
        },
        {
          title: "Sicurezza Prima",
          description:
            "Istruttori qualificati e veicoli di ultima generazione per garantirti la massima sicurezza.",
        },
        {
          title: "Alto Tasso di Successo",
          description:
            "Il 95% dei nostri studenti supera l'esame al primo tentativo. Unisciti a loro!",
        },
      ],
      readyTitle1: "Pronto a",
      readyTitle2: "Partire?",
      readySubtitle:
        "Non aspettare oltre. Inizia oggi il tuo percorso verso l'indipendenza.",
      readTips: "Leggi i nostri consigli",
    },
    blog: {
      title1: "News &",
      title2: "Tips",
      subtitle:
        "Consigli pratici, novità legislative e trucchi per superare gli esami senza stress.",
      readMore: "Leggi di più",
      notFound: "Articolo non trovato.",
      backToBlog: "Torna al Blog",
      backToArticles: "Torna agli articoli",
    },
    prenota: {
      title1: "Prenota",
      title2: "Lezione",
      subtitle:
        "Scegli il giorno, l'orario e l'istruttore. Facile, veloce, zero sbattimenti.",
      selectDate: "Seleziona Data",
      weekDays: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
      availableTimes: "Orari Disponibili",
      noSlots: "Nessuno slot disponibile per questa data.",
      tryAnotherDay: "Prova a selezionare un altro giorno.",
      lessonPractice: "Lezione di Pratica",
      lessonTheory: "Lezione di Teoria",
      instructor: "Istruttore",
      booked: "Prenotato",
      selected: "Selezionato",
      available: "Disponibile",
      bookingConfirmed: "Prenotazione Confermata!",
      confirmBooking: "Conferma Prenotazione",
      selectTimePrompt: "Seleziona un orario",
    },
    quiz: {
      title1: "Quiz",
      title2: "Patente",
      subtitle:
        "Mettiti alla prova con le domande ufficiali. Migliora il tuo punteggio e preparati per l'esame.",
      questionOf: "Domanda",
      of: "di",
      score: "Punteggio",
      quizImageAlt: "Immagine quiz",
      explanation: "Spiegazione:",
      confirmAnswer: "Conferma Risposta",
      nextQuestion: "Prossima Domanda",
      seeResults: "Vedi Risultati",
      completedTitle: "Quiz Completato!",
      completedSummary1: "Hai risposto correttamente a",
      completedSummary2: "domande su",
      accuracy: "Precisione",
      record: "Record",
      retry: "Riprova",
    },
  },
  en: {
    nav: {
      home: "Home",
      blog: "Blog",
      book: "Book",
      quiz: "Quiz",
      switchLang: "Switch language",
    },
    footer: {
      rights: "NextGen Driving School. All rights reserved.",
    },
    home: {
      heroBadge: "Your license, your style",
      heroTitle1: "Get Your",
      heroTitle2: "License",
      heroTitle3: "Now.",
      heroSubtitle:
        "Forget boring old driving schools. Modern teaching methods, online booking, and interactive quizzes to get you on the road in a flash.",
      ctaBook: "Book a Lesson",
      ctaQuiz: "Try the Quiz",
      heroImgAlt: "Student driving",
      whyTitle1: "Why Choose",
      whyTitle2: "Us",
      whySubtitle:
        "We are the driving school built for your generation. Zero red tape, pure results.",
      features: [
        {
          title: "Fast Method",
          description:
            "Learn to drive in less time with our modern, personalized coaching techniques.",
        },
        {
          title: "App & Quizzes",
          description:
            "Practice anywhere with our mobile-optimized theory quiz platform.",
        },
        {
          title: "Safety First",
          description:
            "Certified instructors and latest-generation cars to guarantee maximum safety.",
        },
        {
          title: "High Pass Rate",
          description:
            "95% of our students pass their driving test on the first try. Join them!",
        },
      ],
      readyTitle1: "Ready to",
      readyTitle2: "Hit the Road?",
      readySubtitle:
        "Don't wait any longer. Start your journey toward independence today.",
      readTips: "Read our tips",
    },
    blog: {
      title1: "News &",
      title2: "Tips",
      subtitle:
        "Practical advice, highway code updates, and tricks to pass your exams stress-free.",
      readMore: "Read more",
      notFound: "Article not found.",
      backToBlog: "Back to Blog",
      backToArticles: "Back to articles",
    },
    prenota: {
      title1: "Book",
      title2: "Lesson",
      subtitle:
        "Choose the day, time, and instructor. Fast, easy, zero hassle.",
      selectDate: "Select Date",
      weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      availableTimes: "Available Times",
      noSlots: "No slots available for this date.",
      tryAnotherDay: "Try selecting another day.",
      lessonPractice: "Practical Driving Lesson",
      lessonTheory: "Theory Lesson",
      instructor: "Instructor",
      booked: "Booked",
      selected: "Selected",
      available: "Available",
      bookingConfirmed: "Booking Confirmed!",
      confirmBooking: "Confirm Booking",
      selectTimePrompt: "Select a time slot",
    },
    quiz: {
      title1: "Driving",
      title2: "Quiz",
      subtitle:
        "Test yourself with official exam questions. Improve your score and get ready for the test.",
      questionOf: "Question",
      of: "of",
      score: "Score",
      quizImageAlt: "Quiz illustration",
      explanation: "Explanation:",
      confirmAnswer: "Check Answer",
      nextQuestion: "Next Question",
      seeResults: "See Results",
      completedTitle: "Quiz Completed!",
      completedSummary1: "You answered",
      completedSummary2: "correctly out of",
      accuracy: "Accuracy",
      record: "Best Score",
      retry: "Try Again",
    },
  },
    es: {
    nav: {
      home: "Inicio",
      itineraries: "Itinerarios",
      blog: "Guía y Artículos",
      quiz: "Quiz del Viajero",
      book: "Reservar Experiencia",
      switch: "Cambiar Idioma",
    },
    hero: {
      badge: "Guía Turística Oficial",
      title: "Descubre la Magia de Nuestro Territorio",
      subtitle: "Rutas panorámicas, patrimonio histórico, sabores auténticos y actividades guiadas.",
      explore: "Explorar Lugares",
      plan: "Planificar Ruta",
    },
    footer: {
      rights: "Todos los derechos reservados. Guía Territorial.",
    },
  },
  th: {
    nav: {
      home: "หน้าแรก",
      blog: "บทความ",
      book: "จองเรียน",
      quiz: "แบบทดสอบ",
      switchLang: "เปลี่ยนภาษา",
    },
    footer: {
      rights: "โรงเรียนสอนขับรถ NextGen สงวนลิขสิทธิ์",
    },
    home: {
      heroBadge: "ใบขับขี่ของคุณ สไตล์ของคุณ",
      heroTitle1: "สอบใบขับขี่",
      heroTitle2: "ของคุณ",
      heroTitle3: "วันนี้",
      heroSubtitle:
        "ลืมโรงเรียนสอนขับรถแบบเดิมที่น่าเบื่อไปได้เลย ด้วยเทคนิคการสอนทันสมัย จองคิวออนไลน์ และแบบทดสอบอินเทอร์แอคทีฟช่วยให้คุณขับเป็นได้รวดเร็ว",
      ctaBook: "จองชั่วโมงเรียนขับรถ",
      ctaQuiz: "ลองทำแบบทดสอบ",
      heroImgAlt: "นักเรียนฝึกหัดขับรถ",
      whyTitle1: "ทำไมต้องเลือก",
      whyTitle2: "เรา",
      whySubtitle:
        "เราคือโรงเรียนสอนขับรถที่ออกแบบมาเพื่อคนรุ่นใหม่ ไม่ยุ่งยากเรื่องเอกสาร เน้นผลลัพธ์จริง",
      features: [
        {
          title: "เรียนรู้ไว",
          description:
            "หัดขับรถได้เร็วขึ้นด้วยเทคนิคการสอนที่ทันสมัยและปรับให้เหมาะกับแต่ละบุคคล",
        },
        {
          title: "แอปและข้อสอบ",
          description:
            "ฝึกทำข้อสอบได้ทุกที่ทุกเวลาด้วยแพลตฟอร์มควิซที่รองรับสมาร์ทโฟนเต็มรูปแบบ",
        },
        {
          title: "ปลอดภัยสูงสุด",
          description:
            "ครูฝึกมืออาชีพและรถยนต์รุ่นใหม่ล่าสุดเพื่อความปลอดภัยสูงสุดของคุณ",
        },
        {
          title: "อัตราการสอบผ่านสูง",
          description:
            "95% ของนักเรียนของเราสอบผ่านตั้งแต่ครั้งแรก มาร่วมเป็นหนึ่งในนั้น!",
        },
      ],
      readyTitle1: "พร้อมที่จะ",
      readyTitle2: "ออกเดินทางหรือยัง?",
      readySubtitle:
        "อย่ารอช้า เริ่มต้นเส้นทางสู่อิสรภาพในการขับขี่ของคุณตั้งแต่วันนี้",
      readTips: "อ่านเคล็ดลับของเรา",
    },
    blog: {
      title1: "ข่าวสาร &",
      title2: "เคล็ดลับ",
      subtitle:
        "เทคนิคการขับขี่ อัปเดตกฎจราจรใหม่ และเคล็ดลับพิชิตข้อสอบแบบไร้ความกังวล",
      readMore: "อ่านเพิ่มเติม",
      notFound: "ไม่พบบทความ",
      backToBlog: "กลับไปหน้าบทความ",
      backToArticles: "กลับไปยังรายการบทความ",
    },
    prenota: {
      title1: "จองตาราง",
      title2: "เรียนขับรถ",
      subtitle:
        "เลือกวัน เวลา และครูฝึกที่คุณต้องการ ง่าย รวดเร็ว ไม่ยุ่งยาก",
      selectDate: "เลือกวันที่",
      weekDays: ["จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส.", "อา."],
      availableTimes: "เวลาที่ว่าง",
      noSlots: "ไม่มีคิวว่างสำหรับวันที่เลือก",
      tryAnotherDay: "กรุณาลองเลือกวันอื่น",
      lessonPractice: "เรียนปฏิบัติขับรถ",
      lessonTheory: "เรียนภาคทฤษฎี",
      instructor: "ครูฝึก",
      booked: "จองแล้ว",
      selected: "เลือกแล้ว",
      available: "ว่าง",
      bookingConfirmed: "ยืนยันการจองสำเร็จ!",
      confirmBooking: "ยืนยันการจอง",
      selectTimePrompt: "กรุณาเลือกเวลาเรียน",
    },
    quiz: {
      title1: "แบบทดสอบ",
      title2: "ใบขับขี่",
      subtitle:
        "ทดสอบความรู้ด้วยแนวข้อสอบจริง พัฒนาคะแนนของคุณและเตรียมพร้อมก่อนลงสนามสอบ",
      questionOf: "คำถามข้อที่",
      of: "จาก",
      score: "คะแนน",
      quizImageAlt: "ภาพประกอบคำถาม",
      explanation: "คำอธิบาย:",
      confirmAnswer: "ยืนยันคำตอบ",
      nextQuestion: "คำถามถัดไป",
      seeResults: "ดูผลคะแนน",
      completedTitle: "ทำแบบทดสอบเสร็จสมบูรณ์!",
      completedSummary1: "คุณตอบถูก",
      completedSummary2: "ข้อ จากทั้งหมด",
      accuracy: "ความแม่นยำ",
      record: "สถิติสูงสุด",
      retry: "ทำอีกครั้ง",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  cycleLanguage: () => void;
  t: (typeof TRANSLATIONS)["it"];
  locale: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "nextgen_guida_lang";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get("lang")?.toLowerCase() as Language;
        if (urlLang && ["it", "en", "es", "th"].includes(urlLang)) return urlLang;
      }
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && ["it", "en", "es", "th"].includes(saved)) return saved;
    } catch {
      // ignore
    }
    return "it";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const cycleLanguage = () => {
    const idx = LANGUAGES.findIndex((l) => l.code === language);
    const next = LANGUAGES[(idx + 1) % LANGUAGES.length];
    setLanguage(next.code);
  };

  const locale =
    LANGUAGES.find((l) => l.code === language)?.locale || "it-IT";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        cycleLanguage,
        t: TRANSLATIONS[language],
        locale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
