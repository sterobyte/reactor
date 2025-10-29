import React from "react";

/**
 * Reactor — Informbook UI (Step 2: layout only)
 * - Next.js/React-compatible page component (client)
 * - TailwindCSS utility classes
 * - Pinnacle-style theme via CSS variables (easily swappable)
 * - No data logic yet; placeholders only
 */

export default function MatchDemo() {
  // Pinnacle-style theme token map (can be swapped later)
  const theme = {
    bg: "#0f1621", // deep navy
    card: "#141b26",
    cardAlt: "#0b111a",
    text: "#e6edf3",
    textDim: "#9fb0c0",
    accent: "#ff7a1a", // orange
    accentSoft: "#ff7a1a22",
    border: "#24303f",
    positive: "#22c55e",
    negative: "#ef4444",
    glow: "0 0 0 3px rgba(255, 122, 26, 0.15)",
  } as const;

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        // CSS vars for child components
        // (later — move to global CSS/theme provider)
        //@ts-ignore
        "--rb-bg": theme.bg,
        "--rb-card": theme.card,
        "--rb-card-alt": theme.cardAlt,
        "--rb-text": theme.text,
        "--rb-text-dim": theme.textDim,
        "--rb-accent": theme.accent,
        "--rb-accent-soft": theme.accentSoft,
        "--rb-border": theme.border,
        "--rb-positive": theme.positive,
        "--rb-negative": theme.negative,
        "--rb-glow": theme.glow,
      }}
    >
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b" style={{ borderColor: "var(--rb-border)" }}>
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-8 w-8 rounded-xl"
              style={{ background: "var(--rb-accent)" }}
              aria-hidden
            />
            <h1 className="text-lg font-semibold tracking-wide">Reactor</h1>
            <span className="ml-3 rounded-full px-2.5 py-0.5 text-xs"
              style={{ background: "var(--rb-accent-soft)", color: "var(--rb-accent)" }}>
              DEMO
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-[13px]" style={{ color: "var(--rb-text-dim)" }}>Status:</span>
            <span className="rounded-md px-2 py-0.5 text-xs font-medium"
              style={{ background: "#13301b", color: "var(--rb-positive)", border: `1px solid ${theme.border}` }}>
              LIVE
            </span>
          </div>
        </div>
      </header>

      {/* Main grid */}
      <main className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        {/* Center column (span 8) */}
        <section className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          {/* Score Panel */}
          <div className="rounded-2xl p-4 border shadow-sm" style={{ background: "var(--rb-card)", borderColor: "var(--rb-border)" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full" style={{ background: "var(--rb-accent)" }} />
                  <span className="font-semibold">Player A</span>
                </div>
                <span className="text-[13px]" style={{ color: "var(--rb-text-dim)" }}>vs</span>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full" style={{ background: "#334155" }} />
                  <span className="font-semibold">Player B</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span style={{ color: "var(--rb-text-dim)" }}>Updated:</span>
                <span>12:34:56</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <InfoPill label="Set" value="1 – 0" />
              <InfoPill label="Games" value="2 – 1" />
              <InfoPill label="Points" value="40 – 30" />
            </div>
          </div>

          {/* Markets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MarketCard title="Match Winner">
              <OddsRow name="Player A" odds="1.83" delta={+0.02} />
              <OddsRow name="Player B" odds="2.06" delta={-0.01} />
            </MarketCard>
            <MarketCard title="Set 1 Winner">
              <OddsRow name="Player A" odds="1.91" delta={+0.00} />
              <OddsRow name="Player B" odds="1.96" delta={+0.00} />
            </MarketCard>
            <MarketCard title="Game (Current)">
              <OddsRow name="Player A" odds="1.72" delta={+0.04} />
              <OddsRow name="Player B" odds="2.12" delta={-0.03} />
            </MarketCard>
            <MarketCard title="Total Games (Set)">
              <OddsRow name="Over 9.5" odds="2.25" delta={-0.02} />
              <OddsRow name="Under 9.5" odds="1.64" delta={+0.01} />
            </MarketCard>
          </div>

          {/* Signals strip */}
          <div className="rounded-2xl border p-3" style={{ background: "var(--rb-card)", borderColor: "var(--rb-border)" }}>
            <div className="flex items-center gap-2 overflow-x-auto">
              <SignalPill market="Match" side="Player A" ev={3.4} strength="A" ttl={8} />
              <SignalPill market="Game" side="Player B" ev={2.1} strength="B" ttl={5} />
              <SignalPill market="Under 9.5" side="Set" ev={1.2} strength="C" ttl={12} />
            </div>
          </div>
        </section>

        {/* Right column (span 4) */}
        <aside className="col-span-12 lg:col-span-4">
          <div className="rounded-2xl border p-4 h-full" style={{ background: "var(--rb-card)", borderColor: "var(--rb-border)" }}>
            <h3 className="mb-3 text-sm font-semibold tracking-wide" style={{ color: "var(--rb-text-dim)" }}>Event Log</h3>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { t: "12:34:56", msg: "Signal A: Match — Player A @ 1.83 (EV +3.4%)" },
                { t: "12:34:51", msg: "Odds update: Game — Player B → 2.12" },
                { t: "12:34:49", msg: "Score: Games 2–1 (break)" },
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border px-3 py-2"
                  style={{ borderColor: "var(--rb-border)", background: "var(--rb-card-alt)" }}>
                  <span className="text-xs" style={{ color: "var(--rb-text-dim)" }}>{e.t}</span>
                  <span className="truncate">{e.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

// ——————————————————————————
// UI bits
// ——————————————————————————

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl px-3 py-2 border flex items-center justify-between"
      style={{ borderColor: "var(--rb-border)", background: "var(--rb-card-alt)" }}>
      <span className="text-xs" style={{ color: "var(--rb-text-dim)" }}>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function MarketCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm" style={{ background: "var(--rb-card)", borderColor: "var(--rb-border)" }}>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold tracking-wide" style={{ color: "var(--rb-text-dim)" }}>{title}</h4>
        <span className="text-[11px] rounded px-1.5 py-0.5" style={{ background: "var(--rb-accent-soft)", color: "var(--rb-accent)" }}>LIVE</span>
      </div>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}

function OddsRow({ name, odds, delta }: { name: string; odds: string; delta: number }) {
  const up = delta > 0;
  const down = delta < 0;
  return (
    <div className="flex items-center justify-between rounded-xl border px-3 py-2"
      style={{ borderColor: "var(--rb-border)", background: "var(--rb-card-alt)" }}>
      <span className="text-sm">{name}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">{odds}</span>
        {up && <DeltaBadge dir="up" val={delta} />}
        {down && <DeltaBadge dir="down" val={delta} />}
      </div>
    </div>
  );
}

function DeltaBadge({ dir, val }: { dir: "up" | "down"; val: number }) {
  const color = dir === "up" ? "var(--rb-positive)" : "var(--rb-negative)";
  return (
    <span className="text-[11px] rounded px-1.5 py-0.5 border" style={{ color, borderColor: color }}>
      {dir === "up" ? "▲" : "▼"} {val > 0 ? `+${val.toFixed(2)}` : val.toFixed(2)}
    </span>
  );
}

function SignalPill({ market, side, ev, strength, ttl }: { market: string; side: string; ev: number; strength: "A"|"B"|"C"; ttl: number }) {
  const ring = strength === "A" ? "var(--rb-accent)" : strength === "B" ? "#f59e0b" : "#64748b";
  return (
    <div className="flex items-center gap-2 rounded-xl px-3 py-2 border"
      style={{ borderColor: "var(--rb-border)", background: "var(--rb-card-alt)", boxShadow: "var(--rb-glow)" }}>
      <span className="text-[11px] rounded-full px-2 py-0.5" style={{ background: "var(--rb-accent-soft)", color: ring }}>{strength}</span>
      <span className="text-sm">{market}</span>
      <span className="text-sm font-semibold">{side}</span>
      <span className="text-sm" style={{ color: "var(--rb-text-dim)" }}>EV {ev.toFixed(1)}%</span>
      <span className="text-xs" style={{ color: "var(--rb-text-dim)" }}>TTL {ttl}s</span>
    </div>
  );
}
