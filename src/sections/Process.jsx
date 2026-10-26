import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";

export default function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true });

  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="process-title"
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          subtitle={t("process.subtitle")}
        />

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative border-t-2 border-cyan-300/40 pt-6">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm text-cyan-300" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-slate-300">
                  {step.time}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
