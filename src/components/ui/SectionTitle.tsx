import SectionTag from "./SectionTag";

type SectionTitleProps = {
  tag?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

// Tag (eyebrow pill) + H2 + optional subtitle.
export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl gap-4 ${className}`}>
      {tag ? <SectionTag>{tag}</SectionTag> : null}
      <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.1] text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base font-light leading-relaxed text-text-sub sm:text-[17px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
