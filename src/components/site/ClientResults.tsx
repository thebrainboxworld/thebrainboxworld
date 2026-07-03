import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { clientResults, type ClientResult } from "@/lib/portfolio";

function VideoFrame({ result }: { result: ClientResult }) {
  if (result.type === "mp4" && result.video) {
    return (
      <video
        src={result.video}
        poster={result.poster}
        controls
        autoPlay
        playsInline
        className="w-full h-full object-contain bg-black"
      />
    );
  }
  if ((result.type === "youtube" || result.type === "vimeo" || result.type === "drive") && result.video) {
    const src =
      result.type === "youtube"
        ? `https://www.youtube.com/embed/${result.video}?autoplay=1&rel=0`
        : result.type === "vimeo"
          ? `https://player.vimeo.com/video/${result.video}?autoplay=1`
          : result.video; // drive: full embed src
    return (
      <iframe
        src={src}
        title={result.title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="w-full h-full bg-black"
      />
    );
  }
  // image-only proof
  return (
    <img src={result.poster} alt={result.title} className="w-full h-full object-contain bg-black" />
  );
}

function Lightbox({ result, onClose }: { result: ClientResult; onClose: () => void }) {
  const gallery = result.images ?? [];
  const [active, setActive] = useState(0);
  const hasMedia = Boolean(result.video) || result.type === "image";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />
      <motion.div
        className="relative w-full max-w-5xl glass-strong rounded-2xl overflow-hidden border border-white/10 max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.94, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 24, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-video w-full bg-black">
          {hasMedia ? <VideoFrame result={result} /> : (
            <img src={result.poster} alt={result.title} className="w-full h-full object-contain" />
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="text-[11px] tracking-[0.2em] uppercase text-indigo-300">{result.tag}</div>
          <h3 className="mt-2 text-2xl font-bold font-display text-white">{result.title}</h3>
          <p className="mt-2 text-slate-400 leading-relaxed">{result.description}</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {result.metrics.map((m) => (
              <div key={m.label} className="grad-border p-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-gradient font-display">{m.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>

          {gallery.length > 0 && (
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">Supporting proof</div>
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img src={gallery[active]} alt={`${result.title} proof ${active + 1}`} className="w-full max-h-[420px] object-cover" />
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setActive((a) => (a - 1 + gallery.length) % gallery.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActive((a) => (a + 1) % gallery.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ClientResults() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = clientResults.find((r) => r.id === openId) ?? null;

  return (
    <section className="relative py-14 px-4 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-[0.2em] text-indigo-200 font-medium">
            <TrendingUp className="w-3.5 h-3.5" /> CLIENT RESULTS
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold font-display tracking-tight">
            Real proof, <span className="text-gradient">real revenue</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
            Sales videos, testimonials and analytics from real engagements. Tap any result to view the full story.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientResults.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setOpenId(r.id)}
              className="group text-left grad-border overflow-hidden hover-lift reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={r.poster}
                  alt={r.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/40 to-transparent" />
                <div className="absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2 py-1 rounded-md glass text-indigo-200">
                  {r.tag}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full glass-strong border border-white/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:border-indigo-400/60">
                    <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="font-semibold text-white">{r.title}</div>
                <p className="mt-1 text-sm text-slate-400 line-clamp-2">{r.description}</p>
                <div className="mt-4 flex gap-4">
                  {r.metrics.slice(0, 3).map((m) => (
                    <div key={m.label}>
                      <div className="text-sm font-bold text-gradient font-display">{m.value}</div>
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <Lightbox result={active} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </section>
  );
}
