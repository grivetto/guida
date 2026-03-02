export const blogPosts = [
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
];

export const quizQuestions = [
  {
    id: 1,
    question: "Il segnale raffigurato vieta il transito a tutti i veicoli?",
    image: "https://picsum.photos/seed/divieto/400/300",
    options: ["Vero", "Falso"],
    correctAnswer: 1, // Falso
    explanation:
      "Il segnale di divieto di transito vieta la circolazione nei due sensi a tutti i veicoli, ma l'immagine potrebbe rappresentare un divieto specifico (es. autocarri).",
  },
  {
    id: 2,
    question:
      "Il limite massimo di velocità per un neopatentato in autostrada è:",
    options: ["130 km/h", "110 km/h", "100 km/h", "90 km/h"],
    correctAnswer: 2, // 100 km/h
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
    correctAnswer: 1, // No, solo se arrivano veicoli
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
];

export const availableSlots = [
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
