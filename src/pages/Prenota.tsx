import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { format, addDays, startOfToday, isSameDay, parseISO } from "date-fns";
import { it } from "date-fns/locale";
import { availableSlots } from "../data/mockData";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  CarFront,
  BookOpen,
} from "lucide-react";
import clsx from "clsx";

export default function Prenota() {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  // Generate next 14 days
  const days = Array.from({ length: 14 }).map((_, i) => addDays(today, i));

  useEffect(() => {
    // Load booked slots from local storage
    const stored = localStorage.getItem("bookedSlots");
    if (stored) {
      setBookedSlots(JSON.parse(stored));
    }
  }, []);

  const handleBook = () => {
    if (!selectedSlot) return;

    // Simulate API call
    setTimeout(() => {
      const newBookedSlots = [...bookedSlots, selectedSlot];
      setBookedSlots(newBookedSlots);
      localStorage.setItem("bookedSlots", JSON.stringify(newBookedSlots));
      setBookingStatus("success");

      // Reset after 3 seconds
      setTimeout(() => {
        setBookingStatus("idle");
        setSelectedSlot(null);
      }, 3000);
    }, 800);
  };

  const slotsForSelectedDate = availableSlots.filter((slot) =>
    isSameDay(parseISO(slot.date), selectedDate),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-4"
        >
          Prenota{" "}
          <span className="text-[var(--color-neon-yellow)]">Lezione</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
          Scegli il giorno, l'orario e l'istruttore. Facile, veloce, zero
          sbattimenti.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Calendar Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 glass-panel rounded-3xl p-6 md:p-8 border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[var(--color-neon-yellow)]/20 flex items-center justify-center text-[var(--color-neon-yellow)]">
              <CalendarIcon size={20} />
            </div>
            <h2 className="text-2xl font-display uppercase tracking-wider">
              Seleziona Data
            </h2>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4 text-center">
            {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((day) => (
              <div
                key={day}
                className="text-xs font-mono text-gray-500 uppercase"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {days.map((day, dayIdx) => {
              const isSelected = isSameDay(day, selectedDate);
              const hasSlots = availableSlots.some(
                (s) =>
                  isSameDay(parseISO(s.date), day) &&
                  !bookedSlots.includes(s.id),
              );

              return (
                <button
                  key={day.toString()}
                  onClick={() => {
                    setSelectedDate(day);
                    setSelectedSlot(null);
                  }}
                  className={clsx(
                    "aspect-square flex flex-col items-center justify-center rounded-xl text-sm transition-all relative group",
                    isSelected
                      ? "bg-[var(--color-neon-yellow)] text-black font-bold neon-shadow"
                      : "bg-white/5 hover:bg-white/10 text-gray-300",
                    !hasSlots && !isSelected && "opacity-50 cursor-not-allowed",
                  )}
                  disabled={!hasSlots && !isSelected}
                >
                  <span className="font-mono">{format(day, "d")}</span>
                  {hasSlots && !isSelected && (
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--color-neon-green)] group-hover:scale-150 transition-transform" />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Slots Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-6 md:p-8 border-white/10 flex flex-col"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <h2 className="text-2xl font-display uppercase tracking-wider flex items-center gap-3">
              <Clock size={24} className="text-[var(--color-neon-green)]" />
              Orari Disponibili
            </h2>
            <span className="text-sm font-mono text-[var(--color-neon-yellow)] bg-[var(--color-neon-yellow)]/10 px-3 py-1 rounded-full border border-[var(--color-neon-yellow)]/20">
              {format(selectedDate, "EEEE d MMMM", { locale: it })}
            </span>
          </div>

          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
            {slotsForSelectedDate.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 py-12">
                <AlertCircle size={48} className="mb-4 opacity-50" />
                <p className="font-mono">
                  Nessuno slot disponibile per questa data.
                </p>
                <p className="text-sm mt-2">
                  Prova a selezionare un altro giorno.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {slotsForSelectedDate.map((slot) => {
                  const isBooked = bookedSlots.includes(slot.id);
                  const isSelected = selectedSlot === slot.id;

                  return (
                    <button
                      key={slot.id}
                      onClick={() => !isBooked && setSelectedSlot(slot.id)}
                      disabled={isBooked}
                      className={clsx(
                        "w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left",
                        isBooked
                          ? "bg-white/5 border-white/5 opacity-50 cursor-not-allowed"
                          : isSelected
                            ? "bg-[var(--color-neon-green)]/10 border-[var(--color-neon-green)] neon-shadow"
                            : "bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/5",
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={clsx(
                            "w-16 h-16 rounded-xl flex flex-col items-center justify-center font-display text-xl tracking-wider",
                            isSelected
                              ? "bg-[var(--color-neon-green)] text-black"
                              : "bg-white/10 text-white",
                          )}
                        >
                          {slot.time}
                        </div>
                        <div>
                          <p className="font-bold text-lg flex items-center gap-2">
                            {slot.type === "Pratica" ? (
                              <CarFront
                                size={16}
                                className="text-[var(--color-neon-yellow)]"
                              />
                            ) : (
                              <BookOpen
                                size={16}
                                className="text-[var(--color-neon-pink)]"
                              />
                            )}
                            Lezione di {slot.type}
                          </p>
                          <p className="text-sm text-gray-400 flex items-center gap-1 font-mono mt-1">
                            <User size={14} /> Istruttore: {slot.instructor}
                          </p>
                        </div>
                      </div>

                      <div className="hidden sm:block">
                        {isBooked ? (
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-white/10 px-3 py-1 rounded-full">
                            Prenotato
                          </span>
                        ) : isSelected ? (
                          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-neon-green)] bg-[var(--color-neon-green)]/20 px-3 py-1 rounded-full border border-[var(--color-neon-green)]/30">
                            Selezionato
                          </span>
                        ) : (
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 border border-white/20 px-3 py-1 rounded-full">
                            Disponibile
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Booking Action */}
          <div className="mt-8 pt-6 border-t border-white/10">
            {bookingStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 p-4 bg-[var(--color-neon-green)]/20 border border-[var(--color-neon-green)] rounded-2xl text-[var(--color-neon-green)] font-bold uppercase tracking-wider"
              >
                <CheckCircle2 size={24} />
                Prenotazione Confermata!
              </motion.div>
            ) : (
              <button
                onClick={handleBook}
                disabled={
                  !selectedSlot || (bookingStatus === "idle" && !selectedSlot)
                }
                className={clsx(
                  "w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-lg transition-all flex items-center justify-center gap-2",
                  selectedSlot
                    ? "bg-[var(--color-neon-green)] text-black hover:scale-[1.02] neon-shadow"
                    : "bg-white/10 text-gray-500 cursor-not-allowed",
                )}
              >
                {selectedSlot ? "Conferma Prenotazione" : "Seleziona un orario"}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
