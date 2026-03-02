import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, ShieldCheck, Trophy, Smartphone } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Zap className="text-[var(--color-neon-yellow)]" size={32} />,
      title: "Metodo Veloce",
      description:
        "Impara a guidare in meno tempo con le nostre tecniche di insegnamento moderne e personalizzate.",
    },
    {
      icon: <Smartphone className="text-[var(--color-neon-green)]" size={32} />,
      title: "App & Quiz",
      description:
        "Studia ovunque tu sia con la nostra piattaforma quiz ottimizzata per smartphone.",
    },
    {
      icon: <ShieldCheck className="text-[var(--color-neon-pink)]" size={32} />,
      title: "Sicurezza Prima",
      description:
        "Istruttori qualificati e veicoli di ultima generazione per garantirti la massima sicurezza.",
    },
    {
      icon: <Trophy className="text-[var(--color-neon-yellow)]" size={32} />,
      title: "Alto Tasso di Successo",
      description:
        "Il 95% dei nostri studenti supera l'esame al primo tentativo. Unisciti a loro!",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[var(--color-dark-bg)] z-10" />
          <img
            src="https://picsum.photos/seed/driving-school/1920/1080"
            alt="Ragazzo alla guida"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[var(--color-neon-yellow)] bg-black/50 backdrop-blur-sm"
          >
            <span className="text-[var(--color-neon-yellow)] font-mono text-sm font-bold uppercase tracking-wider">
              La tua patente, il tuo stile
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] tracking-tighter mb-6"
          >
            Prendi la <br />
            <span className="text-outline text-transparent">Patente</span>{" "}
            <br />
            <span className="text-[var(--color-neon-yellow)]">Ora.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-sans"
          >
            Dimentica le vecchie autoscuole noiose. Metodi moderni, prenotazioni
            online e quiz interattivi per farti guidare in un lampo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/prenota"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-[var(--color-neon-yellow)] rounded-full overflow-hidden transition-all hover:scale-105 neon-shadow"
            >
              <span className="relative z-10 flex items-center gap-2">
                Prenota Guida{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
            <Link
              to="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-all"
            >
              Prova i Quiz
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[var(--color-dark-surface)] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight mb-4">
              Perché Scegliere{" "}
              <span className="text-[var(--color-neon-green)]">Noi</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Siamo l'autoscuola pensata per la tua generazione. Niente
              scartoffie inutili, solo risultati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center mb-6 border border-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-neon-yellow)] opacity-10 blur-[100px] rounded-full" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-6">
            Pronto a{" "}
            <span className="text-[var(--color-neon-yellow)]">Partire?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Non aspettare oltre. Inizia oggi il tuo percorso verso
            l'indipendenza.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white border-2 border-[var(--color-neon-yellow)] rounded-full hover:bg-[var(--color-neon-yellow)] hover:text-black transition-all group"
          >
            Leggi i nostri consigli{" "}
            <ArrowRight
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
