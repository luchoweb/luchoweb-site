import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const steps = t("about.steps", { returnObjects: true });
  const stages = t("about.aiStages", { returnObjects: true });

  return (
    <section id="about" className="relative bg-transparent py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Left: positioning + AI applied */}
          <div className="lg:col-span-7">
            <span className="mb-4 inline-flex text-xs uppercase tracking-[0.18em] text-slate-400">
              {t("about.badge")}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t("about.title")}
            </h2>
            <div className="mt-5 space-y-6 text-slate-300 leading-relaxed">
              <p>{t("about.intro")}</p>
              <p>{t("about.ai")}</p>
            </div>

            <p className="mt-8 mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">
              {t("about.aiLabel")}
            </p>
            <ul className="flex flex-wrap gap-2">
              {stages.map((stage) => (
                <li
                  key={stage}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {stage}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: approach */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="text-lg font-medium text-white">
                {t("about.approachTitle")}
              </h3>
              <ol className="mt-4 divide-y divide-white/10">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-3 py-4">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 font-mono text-xs text-cyan-200 ring-1 ring-inset ring-white/15">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="flex-1 text-sm text-slate-300">
                      <span className="font-medium text-white">{step.title}.</span>{" "}
                      {step.desc}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="mt-4 rounded-lg bg-white/5 p-3 text-xs text-slate-400 ring-1 ring-inset ring-white/10">
                {t("about.depth")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
