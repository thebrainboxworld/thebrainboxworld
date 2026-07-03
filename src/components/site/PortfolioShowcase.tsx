import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Check,
  MapPin,
  Globe2,
} from "lucide-react";
import {
  ecosystemProjects,
  clientProjects,
  allProjects,
  type Project,
} from "@/lib/portfolio";

/* --------------------------- Tilt + mouse follow --------------------------- */

function TiltCard({
  children,
  className = "",
  onClick,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 });
  const chipX = useSpring(cx, { stiffness: 350, damping: 28 });
  const chipY = useSpring(cy, { stiffness: 350, damping: 28 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    cx.set(e.clientX - r.left);
    cy.set(e.clientY - r.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        px.set(0.5);
        py.set(0.5);
      }}
      onMouseMove={onMove}
      onClick={onClick}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`relative cursor-pointer [transform-style:preserve-3d] ${className}`}
    >
      {children}
      {/* mouse-follow chip */}
      <motion.div
        style={{ x: chipX, y: chipY }}
        className="pointer-events-none absolute top-0 left-0 z-30 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          initial={false}
          animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-2xl backdrop-blur-md"
          style={{ background: `linear-gradient(135deg, ${accent}, rgba(10,10,26,0.9))` }}
        >
          View project <ArrowUpRight className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* --------------------------- Browser chrome frame --------------------------- */

function BrowserFrame({ url, image, name }: { url: string; image: string; name: string }) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0a0a1a] shadow-2xl [transform:translateZ(40px)]">
      <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <div className="ml-3 flex-1 truncate rounded-md bg-black/40 px-3 py-1 text-[11px] text-slate-400">
          {host}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${name} website preview`}
          loading="lazy"
          className="w-full aspect-[16/10] object-cover object-top transition-transform duration-[6000ms] ease-linear group-hover:-translate-y-[28%]"
        />
      </div>
    </div>
  );
}

function RegionBadge({ project }: { project: Project }) {
  if (!project.region) return null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-semibold text-white border border-white/15">
      <span aria-hidden>{project.regionFlag}</span> {project.region}
    </span>
  );
}

/* --------------------------- Detail modal --------------------------- */

function ProjectModal({
  index,
  onClose,
  onNavigate,
}: {
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const project = allProjects[index];
  const prev = (index - 1 + allProjects.length) % allProjects.length;
  const next = (index + 1) % allProjects.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(prev);
      if (e.key === "ArrowRight") onNavigate(next);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNavigate, prev, next]);

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-start justify-center overflow-y-auto p-3 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />
      <motion.div
        key={project.id}
        className="relative w-full max-w-6xl my-auto glass-strong rounded-2xl overflow-hidden border border-white/10"
        initial={{ scale: 0.95, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* hero preview */}
        <div className="relative">
          <div
            className="absolute inset-0 opacity-40"
            style={{ background: `radial-gradient(700px 300px at 30% 0%, ${project.accent}55, transparent 70%)` }}
          />
          <div className="relative p-4 md:p-8 pb-0">
            <BrowserFrame url={project.url} image={project.image} name={project.name} />
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <RegionBadge project={project} />
            <span className="text-[11px] tracking-[0.2em] uppercase text-indigo-300">{project.category}</span>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-display tracking-tight">{project.name}</h2>
          <p className="mt-2 text-lg text-slate-300">{project.tagline}</p>

          <div className="mt-6 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2">Overview</h3>
                <p className="text-slate-300 leading-relaxed">{project.overview}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-3">Project Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-slate-300">
                      <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-3">Results Achieved</h3>
                <div className="grid grid-cols-3 gap-3">
                  {project.results.map((r) => (
                    <div key={r.label} className="grad-border p-4 text-center">
                      <div className="text-lg md:text-2xl font-bold text-gradient font-display">{r.value}</div>
                      <div className="mt-1 text-[10px] md:text-[11px] uppercase tracking-wide text-slate-400">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2">Industry</h3>
                <p className="text-slate-200">{project.industry}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-3">Services Provided</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.services.map((s) => (
                    <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-400/20 text-indigo-200">{t}</span>
                  ))}
                </div>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 btn-premium text-sm font-semibold px-5 py-3.5 rounded-full"
              >
                Visit Live Website <ExternalLink className="w-4 h-4" />
              </a>
            </aside>
          </div>

          {/* prev / next */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              onClick={() => onNavigate(prev)}
              className="group inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">{allProjects[prev].name}</span>
              <span className="sm:hidden">Prev</span>
            </button>
            <span className="text-xs text-slate-500">{index + 1} / {allProjects.length}</span>
            <button
              onClick={() => onNavigate(next)}
              className="group inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition"
            >
              <span className="hidden sm:inline">{allProjects[next].name}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* --------------------------- Featured ecosystem row --------------------------- */

function FeaturedProject({ project, reverse, onOpen }: { project: Project; reverse?: boolean; onOpen: () => void }) {
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
      <div className={`${reverse ? "lg:[direction:ltr]" : ""} reveal-${reverse ? "right" : "left"}`}>
        <TiltCard accent={project.accent} onClick={onOpen} className="group">
          <div
            className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
            style={{ background: `radial-gradient(closest-side, ${project.accent}44, transparent)` }}
          />
          <BrowserFrame url={project.url} image={project.image} name={project.name} />
        </TiltCard>
      </div>

      <div className={`${reverse ? "lg:[direction:ltr]" : ""} reveal`}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <RegionBadge project={project} />
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5" /> {project.industry}
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tight">{project.name}</h3>
        <p className="mt-3 text-lg text-slate-300">{project.tagline}</p>
        <p className="mt-4 text-slate-400 leading-relaxed">{project.overview}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.services.slice(0, 5).map((s) => (
            <span key={s} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">{s}</span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
          {project.results.map((r) => (
            <div key={r.label} className="grad-border p-3 text-center">
              <div className="text-base md:text-xl font-bold text-gradient font-display">{r.value}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-400">{r.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={onOpen} className="inline-flex items-center gap-2 btn-premium text-sm font-semibold px-6 py-3 rounded-full">
            Explore Project <ArrowUpRight className="w-4 h-4" />
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 border border-white/10 hover:border-white/30 text-sm font-semibold transition-all"
          >
            Live Website <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- Main --------------------------- */

export function PortfolioShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const idxOf = (p: Project) => allProjects.findIndex((x) => x.id === p.id);

  return (
    <>
      {/* Ecosystem — featured branches */}
      <section className="relative py-14 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-[0.2em] text-indigo-200 font-medium">
              <Globe2 className="w-3.5 h-3.5" /> THE BRAINBOXWORLD ECOSYSTEM
            </div>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold font-display tracking-tight">
              One agency, <span className="text-gradient">three continents</span>
            </h2>
            <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
              Choose the team that fits your region, time zone and goals — Nigeria, the UK, or VANTIQ CREATIVE in the USA. Wherever you are, we work with clients worldwide.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {ecosystemProjects.map((p, i) => (
              <FeaturedProject key={p.id} project={p} reverse={i % 2 === 1} onOpen={() => setOpenIndex(idxOf(p))} />
            ))}
          </div>
        </div>
      </section>

      {/* Client work grid */}
      <section className="relative py-14 px-4 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-[0.2em] text-indigo-200 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" /> SELECTED WORK
            </div>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold font-display tracking-tight">
              Projects that move <span className="text-gradient">the needle</span>
            </h2>
            <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
              From DTC brands to enterprise platforms — measurable outcomes, premium craft.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientProjects.map((p, i) => (
              <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <TiltCard accent={p.accent} onClick={() => setOpenIndex(idxOf(p))} className="group h-full">
                  <div className="grad-border overflow-hidden h-full transition-all duration-500 group-hover:border-indigo-400/40 group-hover:shadow-[0_30px_60px_-25px_rgba(79,70,229,0.6)]">
                    <div className="relative h-56 overflow-hidden [transform:translateZ(30px)]">
                      <img src={p.image} alt={`${p.name} website preview`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/30 to-transparent" />
                      <div className="absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2 py-1 rounded-md glass text-indigo-200">{p.category}</div>
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">{p.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{p.tagline}</div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-indigo-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openIndex !== null && (
          <ProjectModal
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onNavigate={(i) => setOpenIndex(i)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
