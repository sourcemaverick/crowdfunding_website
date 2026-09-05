import { HandHeart, Award, Crown, Gem, ExternalLink } from "lucide-react";
import { Reveal, MaskedLine } from "@/components/Anim";
import { useLang } from "@/i18n";

const tiers = [
  { id: "supporter", icon: HandHeart, range: "$50 – 500", url: "https://buy.stripe.com/eVq7sL5cpd1paLh1izaZi0q" },
  { id: "sponsor", icon: Award, range: "$750 – 4,500", url: "https://buy.stripe.com/bJebJ15cp4uT7z59P5aZi0r", featured: true },
  { id: "benefactor", icon: Crown, range: "$5,000 +", url: "https://buy.stripe.com/aFafZh9sF1iH7z5gdtaZi0s" },
  { id: "investor", icon: Gem, range: "$10,000 +", url: "https://docs.google.com/forms/d/1qq97EQpQx2gQllfS65_eiEsUBJTTrDOeOdCRSHl2ILM/edit" },
];

export default function DonatePage() {
  const { t, lang } = useLang();

  return (
    <div data-testid="donate-page">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold tracking-[0.25em] uppercase mb-6" style={{ color: "var(--gold)" }}>
              ✦ {t("donatePage.overline")}
            </p>
            <h1 key={lang} className="font-serif-d font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight" data-testid="donate-headline">
              <MaskedLine delay={0.1}>{t("donatePage.title")}</MaskedLine>
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed" style={{ color: "var(--ink-2)" }}>
                {t("donatePage.subtitle")}
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => {
              const name = t(`donatePage.tiers.${tier.id}.name`);
              const perk = t(`donatePage.tiers.${tier.id}.perk`);
              return (
                <Reveal key={tier.id} delay={i * 0.1} className="h-full">
                  <div
                    className="tier-card h-full flex flex-col rounded-2xl border p-7"
                    style={{
                      borderColor: tier.featured ? "var(--gold)" : "var(--line)",
                      background: tier.featured ? "#fffdf8" : "#ffffff",
                      boxShadow: tier.featured ? "0 16px 40px -18px rgba(200,138,45,0.35)" : undefined,
                    }}
                    data-testid={`donate-tier-card-${tier.id}`}
                  >
                    {tier.featured && (
                      <span
                        className="self-start text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-4 text-white"
                        style={{ background: "var(--gold)" }}
                      >
                        {t("donatePage.mostChosen")}
                      </span>
                    )}
                    <span
                      className="inline-flex w-12 h-12 rounded-full items-center justify-center mb-5"
                      style={{ background: "var(--sage-light)", color: "var(--sage)" }}
                    >
                      <tier.icon size={24} />
                    </span>
                    <h3 className="font-serif-d text-2xl font-semibold">{name}</h3>
                    <p className="mt-1.5 text-2xl font-bold" style={{ color: "var(--gold)" }}>
                      {tier.range}
                    </p>
                    <p className="mt-3 text-base leading-relaxed flex-1" style={{ color: "var(--ink-2)" }}>
                      {perk}
                    </p>
                    <a
                      href={tier.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`donate-tier-button-${tier.id}`}
                      className="btn-gold mt-7 rounded-full px-6 py-3 text-base font-bold inline-flex items-center justify-center gap-2"
                    >
                      {t("donatePage.giveAs")} {name} <ExternalLink size={17} />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.3}>
            <p className="mt-12 text-center text-base max-w-2xl mx-auto" style={{ color: "var(--ink-3)" }}>
              {t("donatePage.note")}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
