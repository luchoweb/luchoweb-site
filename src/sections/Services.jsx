import React from "react";
import { useTranslation } from "react-i18next";

const Icons = {
  customDev: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3 5h18v11H3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 20h6M12 16v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 10l-2 2 2 2M15 10l2 2-2 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  saas: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M7 16a4 4 0 010-8 5 5 0 019.7 1.2A3.5 3.5 0 0117.5 16H7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="16.5"
        cy="17.5"
        r="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16.5 16v3M15 17.5h3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  ecommerce: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6 7h14l-1.5 9.5a2 2 0 01-2 1.5H9.5a2 2 0 01-2-1.5L5 4H3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="20" r="1" fill="currentColor" />
      <circle cx="17" cy="20" r="1" fill="currentColor" />
    </svg>
  ),
  landing: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M14 3l7 7-6 1-2 2-1 6-7-7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 20l4-1-3-3-1 4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  consulting: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 7l3 5-5 3 2-8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  teaching: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3 9l9-5 9 5-9 5-9-5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 12v5c0 1.1 2.24 2 5 2s5-.9 5-2v-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
};

const services = [
  { key: "customDev", icon: Icons.customDev },
  { key: "saas", icon: Icons.saas },
  { key: "ecommerce", icon: Icons.ecommerce },
  { key: "landing", icon: Icons.landing },
  { key: "consulting", icon: Icons.consulting },
  { key: "teaching", icon: Icons.teaching },
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
                  {React.createElement(icon, { className: "h-6 w-6" })}
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
