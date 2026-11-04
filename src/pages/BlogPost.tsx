import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { blogPostsByLang } from "../data/mockData";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function BlogPost() {
  const { id } = useParams();
  const { language, t, locale } = useLanguage();
  const post = blogPostsByLang[language].find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-display uppercase text-[var(--color-neon-pink)] mb-4">
          404
        </h1>
        <p className="text-xl text-gray-400 mb-8">{t.blog.notFound}</p>
        <Link
          to="/blog"
          className="text-[var(--color-neon-yellow)] hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={20} /> {t.blog.backToBlog}
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--color-neon-pink)] transition-colors mb-8 font-mono text-sm uppercase tracking-wider"
      >
        <ArrowLeft size={16} /> {t.blog.backToArticles}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-3xl overflow-hidden border-white/10"
      >
        <div className="relative h-64 md:h-96 w-full">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-surface)] to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-neon-pink)]/20 text-[var(--color-neon-pink)] text-xs font-bold uppercase tracking-wider border border-[var(--color-neon-pink)]/30 backdrop-blur-md">
                <Tag size={12} /> {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 text-gray-300 text-xs font-mono border border-white/10 backdrop-blur-md">
                <Calendar size={12} />{" "}
                {new Date(post.date).toLocaleDateString(locale, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tight leading-[0.9] text-white">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-10 bg-[var(--color-dark-surface)]">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-a:text-[var(--color-neon-pink)] hover:prose-a:text-[var(--color-neon-yellow)] prose-strong:text-white prose-strong:font-bold">
            {/* Simple markdown rendering for demo purposes */}
            {post.content.split("\n").map((paragraph, idx) => {
              if (paragraph.startsWith("- ")) {
                const parts = paragraph.substring(2).split(/(\*\*.*?\*\*)/g);
                return (
                  <li key={idx} className="ml-4 list-disc text-gray-300">
                    {parts.map((part, i) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={i} className="text-white font-bold">
                          {part.slice(2, -2)}
                        </strong>
                      ) : (
                        part
                      ),
                    )}
                  </li>
                );
              }
              if (paragraph.match(/^\d+\./)) {
                const text = paragraph.substring(paragraph.indexOf(" ") + 1);
                const parts = text.split(/(\*\*.*?\*\*)/g);
                return (
                  <li key={idx} className="ml-4 list-decimal text-gray-300">
                    {parts.map((part, i) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={i} className="text-white font-bold">
                          {part.slice(2, -2)}
                        </strong>
                      ) : (
                        part
                      ),
                    )}
                  </li>
                );
              }
              if (paragraph.trim() === "") return <br key={idx} />;

              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={idx} className="text-gray-300 leading-relaxed mb-4">
                  {parts.map((part, i) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={i} className="text-white font-bold">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
    </article>
  );
}
