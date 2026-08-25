import { Link } from "@tanstack/react-router";
import {
  Mail, Phone, Clock, MapPin, Menu, X, MessageCircle, Send,
  Facebook, Instagram, Linkedin, Sparkles, CalendarCheck, ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { useScrollReveal } from "@/hooks/use-reveal";
import { BRAND, CONTACT, SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/site-config";

// Business details live in one editable place — src/lib/site-config.ts
export const WHATSAPP_NUMBER = CONTACT.whatsappNumber;
export const WHATSAPP_LINK = WHATSAPP_URL;
export const CALENDLY_LINK = CONTACT.calendly;
export const CONTACT_EMAIL = CONTACT.email;
export const CONTACT_PHONE = CONTACT.phoneDisplay;

export const SOCIALS = SOCIAL_LINKS;

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.05a8.16 8.16 0 0 0 4.93 1.55V7.16a4.78 4.78 0 0 1-2-.47z"/>
    </svg>
  );
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21l-6.52 7.452L22 22h-6.828l-5.34-6.97L3.6 22H.84l6.974-7.97L1.5 2h6.99l4.83 6.39L18.244 2zm-1.196 18h1.82L7.04 4H5.1L17.048 20z"/>
    </svg>
  );
}

export const SocialLinks = ({ variant = "default" }: { variant?: "default" | "footer" }) => {
  const cls =
    "w-10 h-10 rounded-full bg-white/5 hover:bg-indigo-500 text-slate-300 hover:text-white border border-white/10 hover:border-indigo-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.7)]";
  return (
    <div className="flex gap-3">
      <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={cls}><Linkedin className="w-4 h-4" /></a>
      <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={cls}><Facebook className="w-4 h-4" /></a>
      <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={cls}><Instagram className="w-4 h-4" /></a>
      <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={cls}><TikTokIcon className="w-4 h-4" /></a>
      <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={cls}><XIcon className="w-4 h-4" /></a>
    </div>
  );
};

const desktopNavItems = [
  { label: "Home", to: "/", hash: undefined as string | undefined },
  { label: "Services", to: "/services", hash: undefined },
  { label: "Work", to: "/portfolio", hash: undefined },
  { label: "About", to: "/about", hash: undefined },
  { label: "Insights", to: "/blog", hash: undefined },
  { label: "Contact", to: "/contact", hash: undefined },
];

const mobileNavItems = [
  { label: "Home", to: "/", hash: undefined as string | undefined },
  { label: "Services", to: "/services", hash: undefined },
  { label: "Work", to: "/portfolio", hash: undefined },
  { label: "Case Studies", to: "/case-studies", hash: undefined },
  { label: "About", to: "/about", hash: undefined },
  { label: "Pricing", to: "/packages", hash: undefined },
  { label: "Insights", to: "/blog", hash: undefined },
  { label: "Contact", to: "/contact", hash: undefined },
];

function TopBar() {
  return (
    <div className="hidden md:block bg-[#0a0a1a] text-slate-400 text-xs border-b border-white/5">
      <div className="w-full px-4 md:px-6 py-2 flex justify-between items-center gap-4">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
          <Phone className="w-3.5 h-3.5" /><span>{CONTACT.phoneDisplay}</span>
        </a>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
            <Mail className="w-3.5 h-3.5" /><span>{CONTACT_EMAIL}</span>
          </a>
          <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /><span>Remote</span></span>
          <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /><span>Available 24/7</span></span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-3 md:px-6 py-3 flex justify-between items-center gap-2">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 opacity-60 blur-md group-hover:opacity-100 transition-opacity" />
            <img
              src={logo}
              alt="BrainBoxWorld logo"
              className="relative w-10 h-10 object-contain rounded-full bg-[#0a0a1a] p-0.5 transition-transform duration-700 group-hover:rotate-[360deg]"
            />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight font-display">
            <span className="text-gradient">BRAIN</span>
            <span className="text-white">BOXWORLD</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {desktopNavItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="relative px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors story-link"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 hover:border-white/40 text-sm font-medium text-slate-200 hover:text-white transition-colors"
          >
            <CalendarCheck className="w-4 h-4" /> Book a Strategy Call
          </a>
          <Link
            to="/audit"
            className="ml-2 group relative inline-flex items-center gap-2 btn-premium text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Get Free Audit
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-slate-200 transition-transform hover:scale-110"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/10 glass-strong animate-fade-in">
          <div className="w-full px-3 md:px-6 py-4 flex flex-col gap-1">
            {mobileNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold tracking-wide text-slate-200 hover:text-white hover:translate-x-1 transition-all py-2.5 border-b border-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/audit"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center items-center gap-2 btn-premium text-sm font-semibold px-4 py-3 rounded-full"
            >
              Get a Free Website Audit
            </Link>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-full border border-white/15 text-sm font-medium text-slate-200"
            >
              <CalendarCheck className="w-4 h-4" /> Book a Strategy Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/10 bg-[#0a0a1a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 right-1/4 w-[28rem] h-[28rem] bg-violet-600/15 rounded-full blur-3xl animate-blob delay-300" />
      </div>

      <div className="relative w-full px-4 md:px-8 py-10 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="BrainBoxWorld logo" className="w-11 h-11 object-contain bg-white/5 rounded-full p-1 border border-white/10" />
            <span className="text-xl font-bold font-display text-white">
              BRAIN<span className="text-gradient">BOXWORLD</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
            Your trusted partner for modern digital solutions — websites, AI, automation, and growth systems engineered to scale.
          </p>
          <div className="mt-6"><SocialLinks variant="footer" /></div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">EXPLORE</h3>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Insights</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">COMPANY</h3>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><Link to="/packages" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/audit" className="hover:text-white transition-colors">Free Audit</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book a Call</a></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">GET IN TOUCH</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-indigo-400" /><a href={WHATSAPP_LINK} className="hover:text-white">+1 (331) 278-2900</a></li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-indigo-400" /><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a></li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-indigo-400" /><span>Remote · Global</span></li>
            <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-indigo-400" /><span>Available 24/7</span></li>
          </ul>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 btn-premium text-sm font-semibold px-5 py-3 rounded-full"
          >
            <Sparkles className="w-4 h-4" /> Book a Strategy Call
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} BrainBoxWorld. Crafted with precision. All rights reserved.
      </div>
    </footer>
  );
}

/** Premium floating live chat that hands off to WhatsApp. */
export function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const sendToWhatsApp = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(trimmed)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setDraft("");
  };

  const quickActions = [
    { label: "💬  Talk to Sales", msg: "Hi BrainBoxWorld — I'd like to talk to sales about a new project." },
    { label: "🛠  Technical Support", msg: "Hi BrainBoxWorld — I need technical support with my project." },
    { label: "📅  Book a Call", msg: "Hi BrainBoxWorld — I'd like to book a 30-minute strategy call." },
    { label: "👀  Just Browsing", msg: "Hi BrainBoxWorld — just exploring your services." },
  ];

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with me on WhatsApp"
        className="fixed bottom-24 right-5 md:bottom-28 md:right-7 z-[9999] w-14 h-14 md:w-16 md:h-16 inline-flex items-center justify-center rounded-full shadow-2xl animate-pulse-glow group ring-4 ring-emerald-400/30"
        style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white transition-transform group-hover:scale-110" fill="white" />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-44 right-4 md:bottom-48 md:right-7 z-[9999] w-[22rem] max-w-[calc(100vw-2rem)] glass-strong rounded-2xl overflow-hidden shadow-2xl glow-ring animate-slide-up">
          <div className="relative p-5 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 text-white overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
            <div className="relative flex items-center gap-3">
              <div className="relative">
                <img src={logo} alt="BrainBoxWorld company logo" className="w-10 h-10 rounded-full bg-white/10 p-0.5 border border-white/20" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-indigo-700" />
              </div>
              <div>
                <div className="font-semibold">BrainBoxWorld Team</div>
                <div className="text-xs text-indigo-100 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300" /> Online — replies in minutes
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3 max-h-[22rem] overflow-y-auto bg-[#0a0a1a]/70">
            <div className="flex gap-2">
              <img src={logo} alt="BrainBoxWorld company logo" className="w-7 h-7 rounded-full bg-white/5 p-0.5 border border-white/10 flex-shrink-0" />
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-slate-200 max-w-[80%]">
                👋 Hi there! How can we help you today? Pick a topic or send us a message — we'll continue on WhatsApp.
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              {quickActions.map((a) => (
                <button
                  key={a.label}
                  onClick={() => sendToWhatsApp(a.msg)}
                  className="text-left text-sm px-3 py-2.5 rounded-xl bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-400/50 text-slate-200 transition-all hover:translate-x-1"
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); sendToWhatsApp(draft || "Hi BrainBoxWorld!"); }}
            className="flex items-center gap-2 p-3 border-t border-white/10 bg-[#0a0a1a]"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400/60"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full btn-premium flex items-center justify-center flex-shrink-0"
              aria-label="Send via WhatsApp"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
          <div className="text-[10px] text-center text-slate-500 pb-2 bg-[#0a0a1a]">Conversations continue on WhatsApp · Secure & private</div>
        </div>
      )}
    </>
  );
}

/** Backwards-compatible export kept for other pages that imported it. */
export const WhatsAppFloat = LiveChatWidget;

/** Floating button that reveals every place people can reach us. */
export function SocialReachWidget() {
  const [open, setOpen] = useState(false);

  const channels = [
    { label: "Instagram", href: SOCIALS.instagram, Icon: Instagram, bg: "bg-pink-500" },
    { label: "Facebook", href: SOCIALS.facebook, Icon: Facebook, bg: "bg-blue-600" },
    { label: "X (Twitter)", href: SOCIALS.x, Icon: XIcon, bg: "bg-slate-800" },
    { label: "LinkedIn", href: SOCIALS.linkedin, Icon: Linkedin, bg: "bg-sky-700" },
    { label: "TikTok", href: SOCIALS.tiktok, Icon: TikTokIcon, bg: "bg-slate-900" },
    { label: "Email", href: `mailto:${CONTACT_EMAIL}`, Icon: Mail, bg: "bg-indigo-600" },
    { label: "WhatsApp", href: WHATSAPP_LINK, Icon: MessageCircle, bg: "bg-emerald-600" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="More ways to reach us"
        aria-expanded={open}
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[9999] w-14 h-14 md:w-16 md:h-16 inline-flex items-center justify-center rounded-full shadow-2xl group ring-4 ring-cyan-400/30 transition-transform hover:scale-105"
        style={{ background: "linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)" }}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Sparkles className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 md:bottom-28 md:right-7 z-[9999] w-[20rem] max-w-[calc(100vw-2rem)] glass-strong rounded-2xl overflow-hidden shadow-2xl glow-ring animate-slide-up">
          <div className="relative p-5 bg-gradient-to-br from-cyan-600 via-cyan-700 to-sky-700 text-white overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
            <div className="relative">
              <div className="font-semibold text-lg">Reach us anywhere</div>
              <div className="text-xs text-cyan-100">Tap a channel to connect instantly</div>
            </div>
          </div>
          <div className="p-3 grid grid-cols-1 gap-2 bg-[#0a0a1a]/80 max-h-[24rem] overflow-y-auto">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-slate-200 transition-all hover:translate-x-1"
              >
                <span className={`w-9 h-9 rounded-full ${c.bg} flex items-center justify-center text-white flex-shrink-0`}>
                  <c.Icon className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium">{c.label}</span>
                <ArrowRight className="w-4 h-4 ml-auto text-slate-500" />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a1a] text-slate-100 selection:bg-indigo-500/40 overflow-x-hidden w-full max-w-[100vw]">
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <SocialReachWidget />
      <LiveChatWidget />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/25 rounded-full blur-3xl animate-blob delay-300" />
      <div className="relative w-full max-w-6xl mx-auto text-center px-4 md:px-8 py-10 md:py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-wider text-indigo-200 mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" /> BRAINBOXWORLD
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-display animate-slide-up">
          <span className="text-gradient">{title}</span>
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-slide-up delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
