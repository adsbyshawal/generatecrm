import { dashboard } from "@/lib/content";

const R = 40;
const C = 2 * Math.PI * R;

// Single-value progress donut.
function Donut({
  percent,
  color,
  children,
}: {
  percent: number;
  color: string;
  children: React.ReactNode;
}) {
  const dash = (percent / 100) * C;
  return (
    <div className="relative h-28 w-28 lg:h-32 lg:w-32">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={R} fill="none" stroke="#eef0f7" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${C}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-tight">
        {children}
      </div>
    </div>
  );
}

// Multi-segment distribution donut.
function MultiDonut({
  segments,
}: {
  segments: readonly { label: string; value: number; color: string }[];
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  let acc = 0;
  return (
    <div className="relative h-28 w-28 lg:h-32 lg:w-32">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={R} fill="none" stroke="#eef0f7" strokeWidth="10" />
        {segments.map((s) => {
          const len = (s.value / total) * C;
          const off = -acc * C;
          acc += s.value / total;
          return (
            <circle
              key={s.label}
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke={s.color}
              strokeWidth="10"
              strokeDasharray={`${len} ${C - len}`}
              strokeDashoffset={off}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-ink">
        {total}
      </div>
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-ink/45">
      {children}
    </p>
  );
}

export default function AnalyticsDashboard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-black/10 bg-white text-sm shadow-2xl ring-1 ring-black/5">
      {/* App topbar */}
      <div className="flex items-center justify-between border-b border-black/5 bg-[#FAFBFD] px-5 py-3">
        <span className="flex items-center gap-2 font-semibold text-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 rounded-full object-cover"
          />
          {dashboard.title}
        </span>
        <span className="rounded-md border border-black/10 px-3 py-1 text-xs text-ink/55">
          {dashboard.range}
        </span>
      </div>

      {/* Metric row */}
      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3 sm:gap-4 sm:p-5">
        {dashboard.metrics.map((m) => (
          <div
            key={m.label}
            className="flex flex-col rounded-xl border border-black/5 bg-[#FCFCFD] p-4 sm:p-5"
          >
            <CardTitle>{m.label}</CardTitle>
            <div className="flex flex-1 items-center justify-center pb-1">
              {m.kind === "donut" ? (
                <Donut percent={m.percent} color={m.color}>
                  <span className="text-lg font-bold text-ink">{m.value}</span>
                  <span className="text-[10px] text-ink/45">{m.caption}</span>
                </Donut>
              ) : (
                <div className="flex w-full flex-col items-center">
                  <span className="text-2xl font-bold text-ink">{m.value}</span>
                  <span className="mb-2 text-[10px] text-ink/45">{m.caption}</span>
                  <div className="flex h-8 w-full items-end justify-center gap-1">
                    {m.trend.map((t, i) => (
                      <span
                        key={i}
                        style={{ height: `${t}%` }}
                        className="w-2 rounded-sm bg-accent/70"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Funnel + distribution */}
      <div className="grid grid-cols-1 gap-3 px-4 pb-4 sm:gap-4 sm:px-5 sm:pb-5 md:grid-cols-2">
        <div className="rounded-xl border border-black/5 bg-[#FCFCFD] p-4 sm:p-5">
          <CardTitle>Funnel</CardTitle>
          <div className="flex flex-col gap-2.5">
            {dashboard.funnel.map((f) => (
              <div key={f.stage}>
                <div className="mb-1 flex items-center justify-between text-[11px]">
                  <span className="font-medium text-ink/80">{f.stage}</span>
                  <span className="text-ink/40">{f.pct}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-black/[0.05]">
                  <div
                    style={{ width: `${f.pct}%`, backgroundColor: f.color }}
                    className="h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-[#FCFCFD] p-4 sm:p-5">
          <CardTitle>Stage distribution</CardTitle>
          <div className="flex items-center gap-4">
            <MultiDonut segments={dashboard.distribution} />
            <ul className="flex flex-col gap-1.5">
              {dashboard.distribution.map((d) => (
                <li key={d.label} className="flex items-center gap-2 text-[11px]">
                  <span
                    style={{ backgroundColor: d.color }}
                    className="h-2 w-2 shrink-0 rounded-full"
                  />
                  <span className="text-ink/70">{d.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
