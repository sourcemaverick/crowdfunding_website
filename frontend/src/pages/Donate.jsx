import { toast } from "sonner";
import { HandHeart, Award, Crown, Gem, Mail, ExternalLink } from "lucide-react";
import { Reveal, MaskedLine } from "@/components/Anim";

const tiers = [
  {
    id: "supporter",
    icon: HandHeart,
    name: "Supporter",
    range: "$50 – 500",
    perk: "3 months free access",
    url: "https://buy.stripe.com/eVq7sL5cpd1paLh1izaZi0q",
  },
  {
    id: "sponsor",
    icon: Award,
    name: "Sponsor",
    range: "$750 – 4,500",
    perk: "1 year free access",
    url: "https://buy.stripe.com/bJebJ15cp4uT7z59P5aZi0r",
    featured: true,
  },
  {
    id: "benefactor",
    icon: Crown,
    name: "Benefactor",
    range: "$5,000 +",
    perk: "Lifetime free access",
    url: "https://buy.stripe.com/aFafZh9sF1iH7z5gdtaZi0s",
  },
  {
    id: "investor",
    icon: Gem,
    name: "Investor",
    range: "$10,000 +",
    perk: "A personal conversation about the mission",
    contact: true,
  },
];

export default function DonatePage() {
  const handleInvestor = () => {
    toast.success("We would love to speak with you personally.", {
      description: "Please write to us at support@sourceapp.org and our team will reach out.",
      duration: 8000,
    });
  };

  return (
    <div data-testid="donate-page">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold tracking-[0.25em] uppercase mb-6" style={{ color: "var(--gold)" }}>
              ✦ Support the mission
            </p>
            <h1 className="font-serif-d font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight" data-testid="donate-headline">
              <MaskedLine delay={0.1}>Give the Gift of Light</MaskedLine>
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed" style={{ color: "var(--ink-2)" }}>
                Choose the circle of giving that speaks to your heart. Every contribution helps bring Gururaj's
                presence, wisdom and voice to seekers across the world.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.1} className="h-full">
                <div
                  className="tier-card h-full flex flex-col rounded-2xl border p-7"
                  style={{
                    borderColor: t.featured ? "var(--gold)" : "var(--line)",
                    background: t.featured ? "#fffdf8" : "#ffffff",
                    boxShadow: t.featured ? "0 16px 40px -18px rgba(200,138,45,0.35)" : undefined,
                  }}
                  data-testid={`donate-tier-card-${t.id}`}
                >
                  {t.featured && (
                    <span
                      className="self-start text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-4 text-white"
                      style={{ background: "var(--gold)" }}
                    >
                      Most chosen
                    </span>
                  )}
                  <span
                    className="inline-flex w-12 h-12 rounded-full items-center justify-center mb-5"
                    style={{ background: "var(--sage-light)", color: "var(--sage)" }}
                  >
                    <t.icon size={24} />
                  </span>
                  <h3 className="font-serif-d text-2xl font-semibold">{t.name}</h3>
                  <p className="mt-1.5 text-2xl font-bold" style={{ color: "var(--gold)" }}>
                    {t.range}
                  </p>
                  <p className="mt-3 text-base leading-relaxed flex-1" style={{ color: "var(--ink-2)" }}>
                    {t.perk}
                  </p>
                  {t.contact ? (
                    <button
                      onClick={handleInvestor}
                      data-testid={`donate-tier-button-${t.id}`}
                      className="btn-outline-ink mt-7 rounded-full px-6 py-3 text-base font-bold inline-flex items-center justify-center gap-2"
                    >
                      <Mail size={18} /> Contact Us
                    </button>
                  ) : (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`donate-tier-button-${t.id}`}
                      className="btn-gold mt-7 rounded-full px-6 py-3 text-base font-bold inline-flex items-center justify-center gap-2"
                    >
                      Give as {t.name} <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="mt-12 text-center text-base max-w-2xl mx-auto" style={{ color: "var(--ink-3)" }}>
              Donations are processed securely through Stripe. Free access refers to the SOURCE app subscription.
              For the Investor circle, our team will personally connect with you.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
