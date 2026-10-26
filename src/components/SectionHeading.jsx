export default function SectionHeading({ id, eyebrow, title, subtitle, center = false }) {
  return (
    <div className={["mb-12 max-w-3xl", center ? "mx-auto text-center" : ""].join(" ")}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p>}
    </div>
  );
}
