// Purple eyebrow pill label used above section titles.
export default function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border-purple bg-purple/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-text-sub">
      <span className="h-1.5 w-1.5 rounded-full bg-magenta" aria-hidden />
      {children}
    </span>
  );
}
