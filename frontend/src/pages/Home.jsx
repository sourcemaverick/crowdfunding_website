import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Library, MessageCircleHeart, Music4, Compass, Bot, Users } from "lucide-react";
import { Reveal, MaskedLine, Marquee } from "@/components/Anim";
import { useLang } from "@/i18n";

const GURURAJ_IMG = "https://customer-assets-eiarnc6j.emergentagent.net/job_enlighten-source/artifacts/8mkp8eq6_gururaj.png";
const CANDLE_IMG = "https://images.unsplash.com/photo-1605093659627-4d468d4c3ec7?w=1200&q=80&fm=jpg&fit=crop";
const API = process.env.REACT_APP_BACKEND_URL;

const featureIcons = [Bot, Library, MessageCircleHeart, Music4, Compass];

const CampaignProgress = () => {
  const { t } = useLang();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`${API}/api/campaign`).then((r) => setData(r.data)).catch(() => {});
  }, []);
  const raised = data?.raised ?? 0;
  const goal = data?.goal ?? 100000;
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  return (
    <section className="py-16 md:py-24" data-testid="campaign-progress-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            ✦ {t("progress.overline")}
          </p>
          <h2 className="font-serif-d font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {t("progress.titlePre")}
            <em style={{ color: "var(--gold)" }}>{t("progress.titleEm")}</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div
            className="mt-12 rounded-2xl border bg-white p-8 md:p-10 shadow-sm"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <p data-testid="campaign-raised-amount">
                <span className="font-serif-d text-6xl md:text-7xl font-semibold" style={{ color: "var(--sage)" }}>
                  $15,175
                </span>{" "}
              </p>
              <span className="text-lg" style={{ color: "var(--ink-3)" }}>
                {t("progress.raised")}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="inline-flex items-center gap-2 text-base font-medium" style={{ color: "var(--ink-2)" }} data-testid="campaign-supporters">
                <Users size={18} style={{ color: "var(--sage)" }} />
                8 supporters
              </p>
              <Link to="/donate" data-testid="campaign-donate-button" className="btn-gold rounded-full px-7 py-3 text-base font-bold">
                {t("progress.cta")}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const QuotesCarousel = () => {
  const { t } = useLang();
  const quotes = t("quotes.list");
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % quotes.length), 6000);
    return () => clearInterval(timer);
  }, [quotes.length]);
  return (
    <section
      className="py-16 md:py-24 border-y text-center"
      style={{ background: "var(--sage)", borderColor: "var(--sage)" }}
      data-testid="quotes-section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold tracking-[0.25em] uppercase mb-8" style={{ color: "#e0c185" }}>
          ✦ {t("quotes.overline")}
        </p>
        <div className="relative min-h-[170px] md:min-h-[150px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif-d italic text-2xl sm:text-3xl lg:text-4xl leading-snug text-white"
              data-testid="quote-text"
            >
              “{quotes[idx]}”
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <p className="mt-6 font-serif-d text-lg text-white/70">— {t("quotes.author")}</p>
        <div className="mt-7 flex justify-center gap-2.5">
          {quotes.map((_, i) => (
            <button
              key={i}
              data-testid={`quote-dot-${i}`}
              onClick={() => setIdx(i)}
              aria-label={`Quote ${i + 1}`}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                background: i === idx ? "#e0c185" : "rgba(255,255,255,0.3)",
                transform: i === idx ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const { t, lang } = useLang();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const haloY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const features = t("features.items");
  const goals = t("purpose.goals");

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden">
        <motion.div style={{ y: haloY }} className="halo absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-sm font-bold tracking-[0.25em] uppercase mb-6"
              style={{ color: "var(--gold)" }}
              data-testid="hero-overline"
            >
              ✦ {t("hero.overline")}
            </motion.p>
            <h1
              key={lang}
              data-testid="hero-headline"
              className="font-serif-d font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
            >
              <MaskedLine delay={0.15}>{t("hero.l1")}</MaskedLine>
              <MaskedLine delay={0.3}>
                {t("hero.l2pre")}
                <em style={{ color: "var(--gold)" }}>{t("hero.l2em")}</em>
              </MaskedLine>
              <MaskedLine delay={0.45}>{t("hero.l3")}</MaskedLine>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-7 text-lg sm:text-xl leading-relaxed max-w-xl"
              style={{ color: "var(--ink-2)" }}
              data-testid="hero-subtitle"
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                to="/donate"
                data-testid="hero-donate-button"
                className="btn-gold rounded-full px-8 py-4 text-lg font-bold inline-flex items-center gap-2"
              >
                {t("hero.donate")} <ArrowRight size={20} />
              </Link>
              <Link
                to="/download"
                data-testid="hero-download-link"
                className="text-lg font-semibold underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--sage)", textDecorationColor: "var(--gold)" }}
              >
                {t("hero.downloadLink")}
              </Link>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative z-10 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: imgY }}
              className="relative"
            >
              <div className="arch-frame w-64 sm:w-72 lg:w-80 shadow-2xl" data-testid="hero-portrait">
                <img src={GURURAJ_IMG} alt="Gururaj Ananda Yogi" className="w-full h-auto block" />
              </div>
              <p className="mt-4 text-center font-serif-d italic text-lg" style={{ color: "var(--ink-3)" }}>
                Gururaj Ananda Yogi
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* SOURCE APP */}
      <section className="py-16 md:py-24" data-testid="features-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              {t("features.overline")}
            </p>
            <h2 className="font-serif-d font-medium text-3xl sm:text-4xl lg:text-5xl max-w-2xl leading-tight">
              {t("features.titlePre")}
              <em style={{ color: "var(--sage)" }}>{t("features.titleEm")}</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div
                    className="tier-card h-full rounded-2xl border bg-white p-7"
                    style={{ borderColor: "var(--line)" }}
                    data-testid={`feature-card-${i}`}
                  >
                    <span
                      className="inline-flex w-12 h-12 rounded-full items-center justify-center mb-5"
                      style={{ background: "var(--sage-light)", color: "var(--sage)" }}
                    >
                      <Icon size={24} />
                    </span>
                    <h3 className="font-serif-d text-2xl font-semibold mb-2.5">{f.title}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "var(--ink-2)" }}>
                      {f.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={0.4}>
              <Link
                to="/download"
                data-testid="feature-card-download-cta"
                className="tier-card h-full rounded-2xl p-7 flex flex-col justify-between text-white"
                style={{ background: "var(--sage)", border: "1px solid var(--sage)" }}
              >
                <div>
                  <span className="inline-flex w-12 h-12 rounded-full items-center justify-center mb-5 bg-white/15">
                    <Sparkles size={24} />
                  </span>
                  <h3 className="font-serif-d text-2xl font-semibold mb-2.5">{t("features.trialTitle")}</h3>
                  <p className="text-base leading-relaxed text-white/80">{t("features.trialText")}</p>
                </div>
                <span className="inline-flex items-center gap-2 mt-6 font-semibold">
                  {t("features.trialCta")} <ArrowRight size={18} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MANIFESTO / FUNDRAISING PURPOSE */}
      <section
        id="gururaj-info"
        className="py-16 md:py-24 border-y"
        style={{ background: "var(--bg-2)", borderColor: "var(--line)" }}
        data-testid="purpose-section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-sm font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "var(--gold)" }}>
                  {t("purpose.overline")}
                </p>
                <h2 className="font-serif-d font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  {t("purpose.titlePre")}
                  <em style={{ color: "var(--gold)" }}>{t("purpose.titleEm")}</em>
                </h2>
                <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
                  {t("purpose.bio")}
                </p>
                <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                  <img src={CANDLE_IMG} alt="Candle meditation" className="w-full h-52 object-cover" />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center gap-2">
              {goals.map((g, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div
                    className="flex gap-6 md:gap-8 py-8 border-b last:border-b-0"
                    style={{ borderColor: "var(--line)" }}
                    data-testid={`goal-item-0${i + 1}`}
                  >
                    <span className="font-serif-d text-5xl md:text-6xl font-medium leading-none" style={{ color: "var(--gold)" }}>
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif-d text-2xl md:text-3xl font-semibold mb-2">{g.title}</h3>
                      <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
                        {g.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CampaignProgress />

      {/* CTA */}
      <section className="py-16 md:py-24" data-testid="home-cta-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-serif-d font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
              {t("cta.titlePre")}
              <em style={{ color: "var(--gold)" }}>{t("cta.titleEm")}</em>
            </h2>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--ink-2)" }}>
              {t("cta.text")}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/donate" data-testid="cta-donate-button" className="btn-gold rounded-full px-9 py-4 text-lg font-bold">
                {t("cta.donate")}
              </Link>
              <Link to="/download" data-testid="cta-download-button" className="btn-outline-ink rounded-full px-9 py-4 text-lg font-semibold">
                {t("cta.download")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
