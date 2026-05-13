import React from "react";
import Lenis from "lenis";
import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  Dumbbell,
  Gauge,
  LineChart,
  Play,
  Radar,
  ScanLine,
  Timer,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ZoomParallax } from "@/components/ui/zoom-parallax";

const featureCards = [
  {
    icon: ScanLine,
    title: "Motion tracking",
    text: "Detect body movement and key movement phases from video",
  },
  {
    icon: Activity,
    title: "Posture analysis",
    text: "Identify balance, alignment, and stability patterns",
  },
  {
    icon: Timer,
    title: "Speed & timing insights",
    text: "Measure timing, acceleration, rhythm, and reaction patterns",
  },
  {
    icon: Brain,
    title: "Technique feedback",
    text: "Convert movement patterns into clear improvement notes",
  },
  {
    icon: LineChart,
    title: "Progress reports",
    text: "Track athlete development across multiple sessions",
  },
  {
    icon: Users,
    title: "Team & academy dashboard",
    text: "Organize athletes, sessions, and performance history",
  },
  {
    icon: Radar,
    title: "Talent discovery",
    text: "Create video-backed scouting profiles and comparison signals",
  },
  {
    icon: Dumbbell,
    title: "Sport-specific models",
    text: "Adapt analysis to different sports and movement types over time",
  },
];

const sports = [
  "Football",
  "Cricket",
  "Badminton",
  "Tennis",
  "Athletics",
  "Basketball",
  "Volleyball",
  "Combat sports",
  "Fitness",
  "Hockey",
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/92 backdrop-blur-xl">
      <nav className="flex min-h-[96px] w-full items-center justify-between px-8 py-5 sm:px-10 lg:px-14 xl:px-20">
        <a href="#home" className="flex items-center gap-4 text-[1.45rem] font-black tracking-tight text-[#111111]">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-white shadow-sm">
            <span className="h-[18px] w-[18px] rotate-45 border-2 border-[#ff5a1f]" />
          </span>
          Athlete IQ
        </a>
        <div className="hidden flex-1 items-center justify-end md:flex">
          <div className="flex items-center gap-12 text-[17px] font-bold text-black/65 lg:gap-14">
            <a className="transition hover:text-black" href="#how">
              How it works
            </a>
            <a className="transition hover:text-black" href="#preview">
              Preview
            </a>
            <a className="transition hover:text-black" href="#sports">
              Sports
            </a>
            <a
              className="rounded-full bg-[#111111] px-7 py-3.5 text-[16px] font-black text-white shadow-[0_10px_24px_rgba(17,17,17,0.12)] transition hover:bg-[#ff5a1f]"
              href="mailto:officialdheeraj22@gmail.com"
            >
              Early access
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function TrackingVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[35%] top-[24%] h-3 w-3 rounded-full bg-[#ff5a1f] shadow-[0_0_24px_rgba(255,90,31,0.75)]" />
      <div className="absolute left-[30%] top-[42%] h-2.5 w-2.5 rounded-full bg-[#ff5a1f]" />
      <div className="absolute left-[45%] top-[43%] h-2.5 w-2.5 rounded-full bg-[#ff5a1f]" />
      <div className="absolute left-[27%] top-[63%] h-2.5 w-2.5 rounded-full bg-[#ff5a1f]" />
      <div className="absolute left-[50%] top-[65%] h-2.5 w-2.5 rounded-full bg-[#ff5a1f]" />
      <div className="absolute left-[30%] top-[42%] h-px w-[19%] rotate-[5deg] bg-[#ff5a1f]/70" />
      <div className="absolute left-[34%] top-[45%] h-px w-[18%] rotate-[72deg] bg-[#ff5a1f]/70" />
      <div className="absolute left-[43%] top-[45%] h-px w-[20%] rotate-[108deg] bg-[#ff5a1f]/70" />
      <div className="absolute bottom-[18%] left-[25%] h-px w-[46%] -rotate-6 bg-gradient-to-r from-[#ff5a1f] to-transparent" />
      {!compact ? <div className="absolute left-[22%] top-[50%] h-[28%] w-[42%] rounded-[50%] border border-[#ff5a1f]/35" /> : null}
    </div>
  );
}

function AppPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0b0b0b] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
      <img
        src="/assets/ChatGPT%20Image%20May%2013,%202026,%2011_30_08%20PM.png"
        alt="Athlete performance analysis view"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/18" />
      <div className="absolute left-[17%] top-[24%] h-24 w-24 rounded-full border-2 border-[#c8ff35]" />
      <div className="absolute left-[37%] top-[40%] h-16 w-16 rounded-full border-2 border-[#ff5a1f]" />
      <div className="absolute left-6 top-6 rounded-lg border border-white/15 bg-black/65 p-4 text-white backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">Live form score</p>
        <p className="mt-1 text-5xl font-black text-[#c8ff35]">91</p>
      </div>
      <div className="absolute bottom-6 left-6 right-6 grid gap-3 rounded-lg border border-white/15 bg-black/70 p-5 text-white backdrop-blur md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Balance</p>
          <p className="mt-1 text-3xl font-black">88</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Speed</p>
          <p className="mt-1 text-3xl font-black">7.4</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Form</p>
          <p className="mt-1 text-3xl font-black text-[#c8ff35]">+12%</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[0.68]"
        src="/assets/landing-field-loop.mp4"
        poster="/assets/landing-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62),rgba(0,0,0,0.26),rgba(0,0,0,0.04)),linear-gradient(180deg,rgba(0,0,0,0.08),transparent_60%,#fff)]" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[90rem] flex-col justify-center px-8 pt-24 md:px-16 lg:px-24">
        <p className="mb-6 w-fit rounded-full border border-white/20 bg-black/25 px-5 py-2 text-sm font-black uppercase tracking-[0.22em] text-[#ff5a1f] backdrop-blur">
          Multi-sport AI analytics
        </p>
        <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-white drop-shadow-2xl sm:text-7xl lg:text-[5.8rem]">
          Turn any sports video into performance intelligence
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-white drop-shadow-lg sm:text-xl">
          AI-powered motion analysis for athletes, coaches, academies, and scouts
        </p>
        <div className="mt-12 flex flex-wrap gap-5">
          <a
            href="mailto:officialdheeraj22@gmail.com"
            className="inline-flex items-center gap-3 rounded-lg bg-[#ff5a1f] px-9 py-5 text-base font-black uppercase tracking-[0.12em] text-white shadow-[0_18px_42px_rgba(255,90,31,0.35)] transition hover:bg-[#e94f1b]"
          >
            Join early access <ArrowRight size={18} />
          </a>
          <a
            href="#preview"
            className="inline-flex items-center gap-3 rounded-lg border border-white/25 bg-black/20 px-9 py-5 text-base font-black text-white backdrop-blur transition hover:bg-white/10"
          >
            <Play size={17} /> Watch demo
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  label,
  title,
  text,
  align = "center",
}: {
  label?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12 max-w-3xl"}>
      {label ? <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#ff5a1f]">{label}</p> : null}
      <h2 className="text-4xl font-black leading-tight tracking-tight text-[#111111] sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-black/58">{text}</p> : null}
    </div>
  );
}

function TransformationPanel({
  title,
  text,
  variant,
}: {
  title: string;
  text: string;
  variant: "video" | "tracking" | "report";
}) {
  return (
    <article className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
      <div className="relative aspect-[3/2] overflow-hidden rounded-[1.35rem] bg-[#f4f5f7]">
        {variant === "video" ? (
          <>
            <img src="/assets/gabriel-meinert-j-dz6O-vveI-unsplash.jpg" alt="Raw training video" className="h-full w-full object-cover grayscale-[20%]" />
            <div className="absolute left-5 top-5 rounded-full bg-white/88 px-4 py-1.5 text-sm font-black text-[#111111] shadow">Raw clip</div>
          </>
        ) : null}
        {variant === "tracking" ? (
          <>
            <img src="/assets/renith-r-A9VpotrPr1k-unsplash.jpg" alt="AI tracking layer" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
            <TrackingVisual compact />
          </>
        ) : null}
        {variant === "report" ? (
          <div className="flex h-full flex-col justify-between p-7">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ff5a1f]">Performance report</p>
              <h4 className="mt-4 text-4xl font-black text-[#111111]">Improving</h4>
            </div>
            <div className="space-y-3">
              {["Movement stability: 82%", "Timing variance: 0.18s", "Posture drift: mild"].map((item) => (
                <div key={item} className="rounded-2xl border border-black/8 bg-white px-5 py-3.5 text-base font-bold text-black/70 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <h3 className="mt-6 text-2xl font-black text-[#111111]">{title}</h3>
      <p className="mt-2 text-base leading-7 text-black/58">{text}</p>
    </article>
  );
}

function ProductTransformation() {
  return (
    <section className="bg-white px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-6xl font-black leading-tight tracking-tight text-[#111111] sm:text-7xl lg:text-8xl">
            Raw video becomes usable performance data
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          <TransformationPanel
            variant="video"
            title="Raw training video"
            text="Everyday practice footage captured from a phone"
          />
          <TransformationPanel
            variant="tracking"
            title="AI tracking layer"
            text="Movement, posture, speed, timing, and technique are detected frame by frame"
          />
          <TransformationPanel
            variant="report"
            title="Performance report"
            text="Structured insights help athletes and coaches understand what to improve"
          />
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <section id="preview" className="bg-[#f6f7f9] px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[70rem]">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[3.35rem]">
              Built for real training sessions
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-black/58 lg:justify-self-end lg:text-lg lg:leading-8">
            See movement, metrics, and feedback in one simple performance view
          </p>
        </div>
        <div className="overflow-hidden rounded-[1.6rem] border border-black/8 bg-white p-2.5 shadow-[0_22px_60px_rgba(17,17,17,0.08)]">
          <div className="grid overflow-hidden rounded-[1.2rem] border border-black/8 bg-white lg:grid-cols-[1.35fr_0.95fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-[#eceff3]">
              <img src="/assets/renith-r-A9VpotrPr1k-unsplash.jpg" alt="Performance dashboard video frame" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-white/5" />
              <TrackingVisual />
              <div className="absolute left-4 top-4 rounded-2xl border border-white/50 bg-white/90 p-3.5 shadow-lg backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-black/42">Movement stability</p>
                <p className="mt-1 text-3xl font-black text-[#ff5a1f]">82%</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid gap-3 rounded-2xl border border-white/50 bg-white/92 p-3.5 shadow-lg backdrop-blur sm:grid-cols-3">
                <Metric label="Timing variance" value="0.18s" />
                <Metric label="Balance score" value="76" />
                <Metric label="Progress trend" value="Improving" accent />
              </div>
            </div>
            <aside className="border-t border-black/8 p-4 lg:border-l lg:border-t-0">
              <div className="grid gap-3">
                <Insight icon={Gauge} title="Acceleration phase detected" text="Strong first movement with a stable transition window" />
                <Insight icon={Timer} title="Posture drift: mild" text="Slight alignment shift appears under repeated motion" />
                <Insight icon={CheckCircle2} title="Recommended drill" text="Balance + repeat motion set" accent />
              </div>
              <div className="mt-4 rounded-3xl border border-black/8 bg-[#f8f8f9] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-black text-[#111111]">Progress graph</p>
                  <p className="text-xs font-black text-[#ff5a1f]">Improving</p>
                </div>
                <div className="flex h-24 items-end gap-2">
                  {[36, 44, 42, 56, 62, 70, 78].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t-lg bg-gradient-to-t from-[#ff5a1f] to-[#ff9a72]" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/38">{label}</p>
      <p className={accent ? "mt-1 text-2xl font-black text-[#ff5a1f]" : "mt-1 text-2xl font-black text-[#111111]"}>{value}</p>
    </div>
  );
}

function Insight({ icon: Icon, title, text, accent = false }: { icon: LucideIcon; title: string; text: string; accent?: boolean }) {
  return (
    <div className={accent ? "rounded-3xl border border-[#ff5a1f]/20 bg-[#ff5a1f]/8 p-5" : "rounded-3xl border border-black/8 bg-white p-5"}>
      <div className="flex items-center gap-3">
        <Icon className="text-[#ff5a1f]" size={20} />
        <p className="font-black text-[#111111]">{title}</p>
      </div>
      <p className="mt-2 text-sm leading-6 text-black/55">{text}</p>
    </div>
  );
}

function MultiSportEngine() {
  return (
    <section id="sports" className="bg-white px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-8 text-7xl font-black leading-[0.95] tracking-tight text-[#111111] sm:text-8xl lg:text-[9rem]">
          One engine.
          <br />
          Many sports.
        </h2>
        <p className="mb-12 max-w-4xl text-2xl leading-10 text-black/58 sm:text-3xl">
          Our system focuses on universal performance patterns like posture, timing, balance, speed, acceleration,
          repetition quality, and movement efficiency
        </p>
        <div className="flex flex-wrap gap-4">
          {sports.map((sport) => (
            <span key={sport} className="rounded-full border border-black/10 bg-[#f7f7f8] px-7 py-3.5 text-xl font-bold text-black/70">
              {sport}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#111111] sm:text-5xl lg:text-[4.8rem]">
            Everything needed to turn
            <br />
            practice into data
          </h2>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="rounded-3xl border border-black/8 bg-[#fafafa] p-8 shadow-sm">
                <Icon className="mb-7 text-[#ff5a1f]" size={28} />
                <h3 className="text-[2rem] font-black leading-tight text-[#111111]">{feature.title}</h3>
                <p className="mt-4 text-lg leading-8 text-black/58">{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#ff5a1f] px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
          Ready to turn training videos into performance data?
        </h2>
        <p className="mt-5 text-lg leading-8 text-white/80">
          Join early access for athletes, coaches, academies, and sports organizations.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-3xl bg-white/20 px-8 py-10 backdrop-blur">
            <p className="text-2xl font-black text-white">You're on the list! 🎉</p>
            <p className="mt-3 text-white/80">We'll be in touch soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl bg-white/15 p-8 backdrop-blur-sm"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <input
                required
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-2xl border border-white/30 bg-white/20 px-5 py-4 text-base font-semibold text-white placeholder-white/60 outline-none transition focus:border-white focus:bg-white/30"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-2xl border border-white/30 bg-white/20 px-5 py-4 text-base font-semibold text-white placeholder-white/60 outline-none transition focus:border-white focus:bg-white/30"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-2xl border border-white/30 bg-white/20 px-5 py-4 text-base font-semibold text-white placeholder-white/60 outline-none transition focus:border-white focus:bg-white/30"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#ff5a1f] shadow-[0_18px_42px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(0,0,0,0.2)]"
            >
              Join early access <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <a href="#home" className="flex items-center gap-3 text-xl font-black tracking-tight text-[#111111]">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white shadow-sm">
                <span className="h-[15px] w-[15px] rotate-45 border-2 border-[#ff5a1f]" />
              </span>
              Athlete IQ
            </a>
            <p className="mt-4 text-sm leading-7 text-black/55">
              Turn any sports video into performance intelligence. AI-powered motion analysis for athletes, coaches, academies, and scouts.
            </p>
          </div>
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-black/35">Product</p>
            <ul className="space-y-3 text-sm font-semibold text-black/60">
              <li><a href="#how" className="transition hover:text-[#ff5a1f]">How it works</a></li>
              <li><a href="#preview" className="transition hover:text-[#ff5a1f]">Dashboard preview</a></li>
              <li><a href="#sports" className="transition hover:text-[#ff5a1f]">Multi-sport engine</a></li>
              <li><a href="#home" className="transition hover:text-[#ff5a1f]">Join early access</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-black/35">Sports</p>
            <ul className="space-y-3 text-sm font-semibold text-black/60">
              {["Football", "Cricket", "Badminton", "Tennis", "Athletics", "Basketball"].map((s) => (
                <li key={s}><span className="transition hover:text-[#ff5a1f] cursor-default">{s}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-black/35">Who it's for</p>
            <ul className="space-y-3 text-sm font-semibold text-black/60">
              {["Athletes", "Coaches", "Academies", "Scouts", "Sports orgs"].map((a) => (
                <li key={a}><span className="transition hover:text-[#ff5a1f] cursor-default">{a}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-black/35">Company</p>
            <ul className="space-y-3 text-sm font-semibold text-black/60">
              <li><a href="#home" className="transition hover:text-[#ff5a1f]">About</a></li>
              <li><a href="mailto:officialdheeraj22@gmail.com" className="transition hover:text-[#ff5a1f]">Contact</a></li>
              <li><a href="#home" className="transition hover:text-[#ff5a1f]">Privacy policy</a></li>
              <li><a href="#home" className="transition hover:text-[#ff5a1f]">Terms of use</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-black/8 px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-black/38 sm:flex-row">
          <p>© {new Date().getFullYear()} Athlete IQ. All rights reserved.</p>
          <p>
            Built for athletes.{" "}
            <span className="font-bold text-[#ff5a1f]">Powered by AI.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

const parallaxImages = [
  { src: "/assets/gabriel-meinert-j-dz6O-vveI-unsplash.jpg", alt: "Athlete in starting position" },
  { src: "/assets/renith-r-A9VpotrPr1k-unsplash.jpg", alt: "Tennis player from above" },
  { src: "/assets/vicky-adams-gywHscPZwMM-unsplash.jpg", alt: "Cricket celebration" },
  { src: "/assets/landing-poster.jpg", alt: "Football field lights" },
  { src: "/assets/gabriel-meinert-j-dz6O-vveI-unsplash.jpg", alt: "Athlete ready to sprint" },
  { src: "/assets/renith-r-A9VpotrPr1k-unsplash.jpg", alt: "Court geometry" },
  { src: "/assets/vicky-adams-gywHscPZwMM-unsplash.jpg", alt: "Grassroots sport" },
];

export default function App() {
  React.useEffect(() => {
    const lenis = new Lenis();
    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <Header />
      <Hero />

      <section className="bg-white">
        <ContainerScroll
          titleComponent={
            <div className="mx-auto max-w-4xl px-6">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#ff5a1f]">Live analysis layer</p>
              <h2 className="text-4xl font-black leading-tight text-black md:text-[5.5rem]">
                One clip turns into a full performance view
              </h2>
            </div>
          }
        >
          <AppPreview />
        </ContainerScroll>
      </section>

      <ProductTransformation />

      <section className="bg-black text-white">
        <ZoomParallax images={parallaxImages} />
      </section>

      <ProductPreview />
      <MultiSportEngine />
      <FeaturesSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
