import { useTranslation } from "react-i18next";
import { Gauge, PiggyBank, ShieldCheck, UserCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const icons = [Gauge, PiggyBank, ShieldCheck, UserCheck];

export default function Production() {
  const { t } = useTranslation();
  const items = t("production.items", { returnObjects: true });
  const fit = t("fit.items", { returnObjects: true });

  return (
    <section id="production" aria-labelledby="production-title" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 sm:p-10 lg:p-14">
          <SectionHeading
            id="production-title"
            eyebrow={t("production.eyebrow")}
            title={t("production.title")}
            subtitle={t("production.subtitle")}
          />

          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={item.title} className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-16 sm:mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {t("fit.title")}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {fit.map((item) => (
              <li
                key={item}
                className="rounded-xl border-l-2 border-cyan-300 bg-white/[0.03] px-5 py-4 leading-relaxed text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
