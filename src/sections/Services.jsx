import React from "react";
import { useTranslation } from "react-i18next";
import {
  BriefcaseBusiness,
  Compass,
  Layers,
  PanelsTopLeft,
  Sparkles,
  Workflow,
} from "lucide-react";

const services = [
  { key: "strategy", icon: <Compass /> },
  { key: "product", icon: <PanelsTopLeft /> },
  { key: "architecture", icon: <Layers /> },
  { key: "poc", icon: <Sparkles /> },
  { key: "leadership", icon: <BriefcaseBusiness /> },
  { key: "automation", icon: <Workflow /> },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative bg-transparent py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 inline-flex text-xs uppercase tracking-[0.18em] text-slate-400">
            {t("services.eyebrow")}
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-3 text-slate-300">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, icon }) => (
            <div
              key={key}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/75"
            >
              <div className="mb-4 flex items-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/15 text-cyan-200">
                  {icon}
                </span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                {t(`services.items.${key}.title`)}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t(`services.items.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
