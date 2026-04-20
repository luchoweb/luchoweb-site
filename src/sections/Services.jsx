import React from "react";
import { useTranslation } from "react-i18next";
import {
  BriefcaseBusiness,
  Code,
  MonitorCloud,
  PanelsTopLeft,
  Presentation,
  Store,
} from "lucide-react";

const services = [
  { key: "customDev", icon: <Code /> },
  { key: "saas", icon: <MonitorCloud /> },
  { key: "ecommerce", icon: <Store /> },
  { key: "landing", icon: <PanelsTopLeft /> },
  { key: "consulting", icon: <BriefcaseBusiness /> },
  { key: "teaching", icon: <Presentation /> },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative bg-transparent py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-cyan-100">
            {t("services.eyebrow")}
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, icon }) => (
            <div
              key={key}
              className="rounded-2xl border border-white/10 bg-slate-900/55 p-6 text-center transition backdrop-blur-sm hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/75"
            >
              <div className="mb-4 flex items-center justify-center">
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
