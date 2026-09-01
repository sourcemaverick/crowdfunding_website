import { Apple, Play, MessageSquareHeart } from "lucide-react";
import { Reveal, MaskedLine } from "@/components/Anim";

const APPLE_URL = "https://apps.apple.com/in/app/source-find-yourself/id6761737790";
const ANDROID_URL = "https://play.google.com/apps/testing/com.superreal.source.android";
const FEEDBACK_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdSHLjPci_mRAhKhIbc4WyrAGPPHJwfHmG6dyNyUD0tR_goTA/viewform";

export default function DownloadPage() {
  return (
    <div data-testid="download-page">
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold tracking-[0.25em] uppercase mb-6" style={{ color: "var(--gold)" }}>
            ✦ Free 2 week trial
          </p>
          <h1 className="font-serif-d font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight" data-testid="download-headline">
            <MaskedLine delay={0.1}>Download the App</MaskedLine>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed" style={{ color: "var(--ink-2)" }}>
              Download App here for a free 2 week trial. Carry the wisdom of Gururaj Ananda Yogi in your pocket —
              wherever your journey takes you.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5">
              <a
                href={APPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="download-apple-button"
                className="tier-card flex items-center gap-4 rounded-2xl border bg-white px-8 py-5 w-full sm:w-auto"
                style={{ borderColor: "var(--line)" }}
              >
                <Apple size={36} style={{ color: "var(--ink)" }} />
                <span className="text-left">
                  <span className="block text-sm" style={{ color: "var(--ink-3)" }}>
                    Download on the
                  </span>
                  <span className="block text-xl font-bold">Apple App Store</span>
                </span>
              </a>
              <a
                href={ANDROID_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="download-android-button"
                className="tier-card flex items-center gap-4 rounded-2xl border bg-white px-8 py-5 w-full sm:w-auto"
                style={{ borderColor: "var(--line)" }}
              >
                <Play size={34} fill="currentColor" style={{ color: "var(--sage)" }} />
                <span className="text-left">
                  <span className="block text-sm" style={{ color: "var(--ink-3)" }}>
                    Get it on
                  </span>
                  <span className="block text-xl font-bold">Google Play</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div
              className="mt-14 rounded-2xl border p-7 md:p-8 inline-flex flex-col sm:flex-row items-center gap-4"
              style={{ background: "var(--sage-light)", borderColor: "var(--line)" }}
              data-testid="feedback-block"
            >
              <MessageSquareHeart size={30} style={{ color: "var(--sage)" }} />
              <p className="text-lg" style={{ color: "var(--ink-2)" }}>
                Please offer feedback —{" "}
                <a
                  href={FEEDBACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="feedback-link"
                  className="font-bold underline underline-offset-4 decoration-2"
                  style={{ color: "var(--sage)", textDecorationColor: "var(--gold)" }}
                >
                  Click
                </a>{" "}
                here
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
