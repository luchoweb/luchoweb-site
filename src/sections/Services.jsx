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
    <section id="services" className="relative bg-neutral-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, icon }) => (
            <div
              key={key}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center transition hover:border-neutral-700 hover:bg-neutral-800/70"
            >
              <div className="mb-4 flex items-center justify-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-neutral-300">
                  {icon}
                </span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                {t(`services.items.${key}.title`)}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {t(`services.items.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
