export default function Home() {
  const skills = [
    "UI Design",
    "UX Research",
    "Prototyping",
    "Figma",
    "Interaction Design",
    "Visual Design",
    "Design Systems",
    "Wireframing",
    "User Testing",
  ];

  return (
    <main className="min-h-screen bg-paper text-ink font-sans">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="border-b-4 border-ink px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-teal">
            Visual Designer &nbsp;/&nbsp; UI&thinsp;·&thinsp;UX
          </p>
          <h1
            className="text-[clamp(3.5rem,12vw,9rem)] font-black uppercase leading-none tracking-tighter"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
          >
            RHYTHM<br />SHARMA
          </h1>
          <div className="mt-10">
            <a
              href="mailto:rhythms.sharma@gmail.com"
              className="inline-block border-4 border-ink px-6 py-3 font-black text-base uppercase bg-pink text-paper shadow-[6px_6px_0_#0C0F0A] hover:shadow-[9px_9px_0_#0C0F0A] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all"
            >
              LET&apos;S CREATE SOMETHING EXTRAORDINARY →
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section className="border-b-4 border-ink px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-0">
          <div className="md:border-r-4 border-ink md:pr-12 pb-8 md:pb-0">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-teal">
              01 / ABOUT
            </p>
          </div>
          <div className="md:pl-12">
            <p className="text-xl md:text-2xl font-bold leading-snug">
              Creativity has been my constant companion since childhood. From
              sketching imaginative worlds to blending colors into stories,
              I&apos;ve always loved turning ideas into beautiful realities.
            </p>
            <p className="mt-6 text-base md:text-lg border-l-4 border-teal pl-4">
              Design is the harmony of imagination and logic &mdash; transforming
              ideas into compelling, meaningful experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────── */}
      <section className="border-b-4 border-ink px-6 md:px-12 py-16 bg-ink text-paper">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-0">
          <div className="md:border-r-4 border-paper md:pr-12 pb-8 md:pb-0">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-yellow">
              02 / SKILLS
            </p>
          </div>
          <div className="md:pl-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div
                key={skill}
                className="skill-badge border-2 border-paper px-4 py-3 font-bold text-sm uppercase tracking-wide"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────────── */}
      <section className="border-b-4 border-ink px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-0 mb-12">
            <div className="md:border-r-4 border-ink md:pr-12 pb-8 md:pb-0">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-teal">
                03 / SELECTED WORK
              </p>
            </div>
            <div className="md:pl-12">
              <p className="font-bold text-sm uppercase tracking-wide">
                MORE ON{" "}
                <a
                  href="https://www.behance.net/rhythm-sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-pink transition-colors"
                >
                  BEHANCE →
                </a>
              </p>
            </div>
          </div>

          <a
            href="/projects/innova"
            className="block border-4 border-ink p-8 md:p-10 shadow-[8px_8px_0_#0C0F0A] hover:bg-yellow hover:shadow-[12px_12px_0_#FF206E] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all group"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3 text-pink group-hover:text-ink transition-colors">
                  UI/UX &nbsp;·&nbsp; FINTECH
                </p>
                <h3
                  className="text-4xl md:text-6xl font-black uppercase leading-none"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
                >
                  INNOVA
                </h3>
                <p className="text-lg md:text-2xl font-bold uppercase mt-1 tracking-wide">
                  Asset Management
                </p>
              </div>
              <span className="text-4xl md:text-5xl font-black group-hover:translate-x-2 transition-transform leading-none mt-1">
                →
              </span>
            </div>
            <p className="mt-8 text-base md:text-lg max-w-xl">
              End-to-end UI/UX design for an asset management platform &mdash;
              from user research and wireframes through to high-fidelity
              prototypes and a polished design system.
            </p>
          </a>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-ink text-paper">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-pink mb-8">
            04 / CONTACT
          </p>
          <h2
            className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none tracking-tighter mb-12"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
          >
            GOT A<br />PROJECT?
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:rhythms.sharma@gmail.com"
              className="border-4 border-paper px-8 py-4 font-black text-base uppercase shadow-[4px_4px_0_#FF206E] hover:bg-pink hover:border-pink hover:shadow-[6px_6px_0_#FBFF12] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              EMAIL ME →
            </a>
            <a
              href="https://www.linkedin.com/in/rhythmss/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-paper px-8 py-4 font-black text-base uppercase shadow-[4px_4px_0_#41EAD4] hover:bg-teal hover:border-teal hover:text-ink hover:shadow-[6px_6px_0_#FBFF12] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              LINKEDIN →
            </a>
            <a
              href="https://www.behance.net/rhythm-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-paper px-8 py-4 font-black text-base uppercase shadow-[4px_4px_0_#FBFF12] hover:bg-yellow hover:border-yellow hover:text-ink hover:shadow-[6px_6px_0_#FF206E] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              BEHANCE →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
