import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { blogPostsByLang } from "../data/mockData";
import { Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Blog() {
  const { language, t, locale } = useLanguage();
  const posts = blogPostsByLang[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-display uppercase tracking-tighter mb-4"
        >
          {t.blog.title1}{" "}
          <span className="text-[var(--color-neon-pink)]">{t.blog.title2}</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
          {t.blog.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel rounded-2xl overflow-hidden flex flex-col group hover:border-[var(--color-neon-pink)] transition-colors relative"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-xs font-bold text-[var(--color-neon-pink)] uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3 font-mono">
                <Calendar size={14} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(locale, {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>

              <h2 className="text-2xl font-bold mb-3 leading-tight group-hover:text-[var(--color-neon-pink)] transition-colors">
                <Link to={`/blog/${post.id}`} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </Link>
              </h2>

              <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center text-[var(--color-neon-pink)] font-bold text-sm uppercase tracking-wider">
                {t.blog.readMore}{" "}
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-2 transition-transform"
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
