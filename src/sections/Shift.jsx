import { useTranslation } from "react-i18next";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Shift() {
  const { t } = useTranslation();
  const tools = t("shift.tools", { returnObjects: true });
  const outcome = t("shift.outcome", { returnObjects: true });

  return (
    <section aria-labelledby="shift-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="shift-title"
          eyebrow={t("shift.eyebrow")}
          title={t("shift.title")}
          subtitle={t("shift.intro")}
        />

        <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-slate-400">
              {t("shift.toolsLabel")}
            </h3>
            <ul className="mt-5 space-y-3">
              {tools.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="flex items-center justify-center text-cyan-300">
            <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0" />
          </div>

          <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.06] p-6">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-cyan-300">
              {t("shift.outcomeLabel")}
            </h3>
            <ul className="mt-5 space-y-3">
              {outcome.map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium text-white">
                  <Check className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
