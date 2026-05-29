import Link from "next/link";

export default function InnovaProject() {
  return (
    <main className="min-h-screen bg-paper text-ink font-sans">

      {/* ── NAV ──────────────────────────────────────────────────── */}
      <nav className="border-b-4 border-ink px-6 md:px-12 py-5">
        <Link
          href="/"
          className="inline-block font-black text-sm uppercase tracking-[0.25em] hover:text-pink transition-colors"
        >
          ← BACK TO PORTFOLIO
        </Link>
      </nav>

      {/* ── PROJECT HEADER ───────────────────────────────────────── */}
      <section className="border-b-4 border-ink px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-widest bg-teal text-ink">
              UI/UX Design
            </span>
            <span className="border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-widest">
              Safety Tech
            </span>
            <span className="border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-widest">
              Mobile App
            </span>
          </div>
          <h1
            className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none tracking-tighter"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
          >
            INNOVA<br />
            <span style={{ color: "#FF206E" }}>ASSET</span><br />
            MANAGEMENT
          </h1>
        </div>
      </section>

      {/* ── CONTENT: TEXT LEFT / IMAGES RIGHT ────────────────────── */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 border-4 border-ink shadow-[8px_8px_0_#0C0F0A]">

            {/* ── LEFT: Text ────────────────────────────────────── */}
            <div className="border-b-4 md:border-b-0 md:border-r-4 border-ink p-8 md:p-10">
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: "#FF206E" }}>
                PROJECT OVERVIEW
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Designed key screens for the{" "}
                <span className="bg-teal px-1 font-bold">Work Safety Application</span>,
                ensuring an efficient interface for workplace safety.
              </p>

              <p className="mt-5 text-base md:text-lg leading-relaxed">
                Features included a real-time monitoring dashboard, live location
                tracking, and SOS emergency alerts for rapid response. Focused on
                functionality and ease of use to support quick decision-making in
                critical situations.
              </p>

              <p className="mt-5 text-base md:text-lg leading-relaxed">
                Integrated tools for environmental monitoring and simplified
                access to essential safety actions, enhancing hazard prevention.
                Prioritized a clean, practical layout for seamless navigation,
                ensuring a user-friendly experience for employees and safety
                personnel.
              </p>

              {/* Meta details */}
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5">
                {[
                  ["Role", "UI/UX Designer"],
                  ["Platform", "Mobile App"],
                  ["Tools", "Figma"],
                  ["Focus", "Safety & Usability"],
                ].map(([label, value]) => (
                  <div key={label} className="border-t-2 border-ink pt-3">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#41EAD4" }}>
                      {label}
                    </p>
                    <p className="font-bold text-sm uppercase">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Image placeholders ─────────────────────── */}
            <div className="p-8 md:p-10 flex flex-col gap-5">
              <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#FF206E" }}>
                PROJECT SCREENS
              </p>

              {/* Main large placeholder */}
              <div className="flex-1 min-h-[300px] border-4 border-dashed border-ink flex flex-col items-center justify-center gap-3 bg-ink/[0.03] hover:bg-yellow/20 transition-colors cursor-pointer">
                <span className="text-5xl font-black text-ink/20">+</span>
                <p className="font-black text-sm uppercase tracking-widest text-center px-6 text-ink/50">
                  Drop your main screenshot here
                </p>
                <p className="text-xs uppercase tracking-wide text-ink/30">
                  Recommended: 800 × 600 px
                </p>
              </div>

              {/* Two secondary placeholders */}
              <div className="grid grid-cols-2 gap-4">
                {["Screen 2", "Screen 3"].map((label) => (
                  <div
                    key={label}
                    className="border-4 border-dashed border-ink h-36 flex flex-col items-center justify-center gap-2 bg-ink/[0.03] hover:bg-teal/20 transition-colors cursor-pointer"
                  >
                    <span className="text-2xl font-black text-ink/20">+</span>
                    <p className="font-black text-xs uppercase tracking-widest text-ink/40">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER NAV ───────────────────────────────────────────── */}
      <section className="border-t-4 border-ink px-6 md:px-12 py-10 bg-ink text-paper">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-between items-center">
          <Link
            href="/"
            className="font-black text-sm uppercase tracking-[0.25em] hover:text-yellow transition-colors"
          >
            ← ALL WORK
          </Link>
          <a
            href="https://www.behance.net/rhythm-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-paper px-6 py-3 font-black text-sm uppercase shadow-[4px_4px_0_#FF206E] hover:bg-pink hover:border-pink hover:shadow-[6px_6px_0_#FBFF12] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            VIEW ON BEHANCE →
          </a>
        </div>
      </section>

    </main>
  );
}
