import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const MARQUEE_ITEMS = [
  "Satsang Wisdom",
  "AI Spiritual Companion",
  "Guided Meditation",
  "Chanting & Gong",
  "Yoga Nidra",
  "OM Recordings",
  "Find a Teacher",
];

export const Marquee = () => (
  <div
    data-testid="editorial-marquee"
    className="relative overflow-hidden border-y py-5"
    style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
  >
    <div className="marquee-track">
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="font-serif-d text-2xl md:text-3xl italic" style={{ color: "var(--ink-2)" }}>
            {item}
          </span>
          <span className="mx-6 text-xl" style={{ color: "var(--gold)" }}>
            ✦
          </span>
        </span>
      ))}
    </div>
  </div>
);
