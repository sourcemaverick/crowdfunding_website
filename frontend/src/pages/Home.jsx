import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Library, MessageCircleHeart, Music4, Compass, Bot } from "lucide-react";
import { Reveal, MaskedLine, Marquee } from "@/components/Anim";

const GURURAJ_IMG = "https://customer-assets-eiarnc6j.emergentagent.net/job_enlighten-source/artifacts/8mkp8eq6_gururaj.png";
const CANDLE_IMG = "https://images.unsplash.com/photo-1605093659627-4d468d4c3ec7?w=1200&q=80&fm=jpg&fit=crop";

const features = [
  {
    icon: Bot,
    title: "Ask Gururaj Anything",
    text: "An AI model trained on numerous recorded satsangs of Gururaj answers your deepest questions.",
  },
  {
    icon: Library,
    title: "Your Personal Library",
    text: "Every conversation with Gururaj is saved in a library you can return to at any time.",
  },
  {
    icon: MessageCircleHeart,
    title: "Mini-Satsangs",
    text: "Personalised mini-satsangs are offered to you, shaped by the questions you ask.",
  },
  {
    icon: Music4,
    title: "A Complete Meditation Suite",
    text: "Chanting and gong meditations, candle gazing, timer, yoga nidra and an original OM recording.",
  },
  {
    icon: Compass,
    title: "Find a Meditation Teacher",
    text: "SOURCE directs your queries to your country's representative, connecting you with a real teacher.",
  },
];

const goals = [
  {
    num: "01",
    title: "A 3D Visual Likeness",
    text: "Obtain more sophisticated technology to design a true-to-life 3D visual likeness of Gururaj, so his presence can be felt, not just heard.",
  },
  {
    num: "02",
    title: "The Complete Knowledge",
    text: "Upload a complete knowledge database utilising thousands of hours of original recordings, for a fully immersive experience.",
  },
  {
    num: "03",
    title: "Every Language, One Light",
    text: "Create multi-lingual functionality so seekers in every country can hear the teachings in their own tongue.",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const haloY = useTransform(scrollYProgress, [0, 1], [0, 50]);

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
              ✦ The next big thing in conscious technology
            </motion.p>
            <h1
              data-testid="hero-headline"
              className="font-serif-d font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
            >
              <MaskedLine delay={0.15}>Bringing the Light</MaskedLine>
              <MaskedLine delay={0.3}>
                of <em style={{ color: "var(--gold)" }}>True Spirituality</em>
              </MaskedLine>
              <MaskedLine delay={0.45}>to the World</MaskedLine>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-7 text-lg sm:text-xl leading-relaxed max-w-xl"
              style={{ color: "var(--ink-2)" }}
              data-testid="hero-subtitle"
            >
              ~ a mission to bring Gururaj Ananda Yogi's spiritual teachings and presence to the world.
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
                Donate Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/download"
                data-testid="hero-download-link"
                className="text-lg font-semibold underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--sage)", textDecorationColor: "var(--gold)" }}
              >
                Download App link
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
              Introducing the app
            </p>
            <h2 className="font-serif-d font-medium text-3xl sm:text-4xl lg:text-5xl max-w-2xl leading-tight">
              In this version of the app, called <em style={{ color: "var(--sage)" }}>SOURCE</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div
                  className="tier-card h-full rounded-2xl border bg-white p-7"
                  style={{ borderColor: "var(--line)" }}
                  data-testid={`feature-card-${i}`}
                >
                  <span
                    className="inline-flex w-12 h-12 rounded-full items-center justify-center mb-5"
                    style={{ background: "var(--sage-light)", color: "var(--sage)" }}
                  >
                    <f.icon size={24} />
                  </span>
                  <h3 className="font-serif-d text-2xl font-semibold mb-2.5">{f.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--ink-2)" }}>
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
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
                  <h3 className="font-serif-d text-2xl font-semibold mb-2.5">Try it free for 2 weeks</h3>
                  <p className="text-base leading-relaxed text-white/80">
                    Download SOURCE today and begin your journey.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 mt-6 font-semibold">
                  Get the app <ArrowRight size={18} />
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
                  The purpose of fundraising
                </p>
                <h2 className="font-serif-d font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Why we ask for your <em style={{ color: "var(--gold)" }}>support</em>
                </h2>
                <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
                  Gururaj Ananda Yogi (1932–1988) devoted his life to guiding seekers toward the experience of true
                  spirituality — beyond dogma, beyond division. Your contribution keeps that living voice available to
                  the world, forever.
                </p>
                <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                  <img src={CANDLE_IMG} alt="Candle meditation" className="w-full h-52 object-cover" />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center gap-2">
              {goals.map((g, i) => (
                <Reveal key={g.num} delay={i * 0.1}>
                  <div
                    className="flex gap-6 md:gap-8 py-8 border-b last:border-b-0"
                    style={{ borderColor: "var(--line)" }}
                    data-testid={`goal-item-${g.num}`}
                  >
                    <span className="font-serif-d text-5xl md:text-6xl font-medium leading-none" style={{ color: "var(--gold)" }}>
                      {g.num}
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

      {/* CTA */}
      <section className="py-16 md:py-24" data-testid="home-cta-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-serif-d font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
              Be part of something that will <em style={{ color: "var(--gold)" }}>outlast us all</em>
            </h2>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--ink-2)" }}>
              Every contribution — great or small — brings the light of Gururaj's presence closer to seekers everywhere.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/donate" data-testid="cta-donate-button" className="btn-gold rounded-full px-9 py-4 text-lg font-bold">
                Donate Now
              </Link>
              <Link to="/download" data-testid="cta-download-button" className="btn-outline-ink rounded-full px-9 py-4 text-lg font-semibold">
                Download the App
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
