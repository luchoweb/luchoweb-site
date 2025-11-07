import { useTranslation } from "react-i18next";

const Icons = {
  fullstack: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3 7h18M3 12h18M3 17h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="4" y="5" width="6" height="4" rx="1" fill="currentColor" />
    </svg>
  ),
  tech: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M8 8l-3 4 3 4M16 8l3 4-3 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 6h2M11 18h2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  methodologies: (props) => (
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
        d="M12 7v5l3 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  evolution: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M4 16c3-6 7-8 16-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 6l2 2-2 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function About({ years = 14 }) {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative bg-neutral-950 py-20 sm:py-24">
      {/* decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Left: narrative */}
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">
              <span>
                {t("hero.badge", { years })}
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {t("about.title")}
            </h2>
            <div className="mt-5 space-y-6 text-neutral-300 leading-relaxed">
              <p>{t("about.intro")}</p>
              <p>{t("about.experience")}</p>
              <p>{t("about.modern")}</p>
            </div>
          </div>

          {/* Right: highlight card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl"
              />
              <h3 className="text-lg font-medium text-white">
                {t("about.highlightsTitle")}
              </h3>
              <div className="mt-4 divide-y divide-neutral-800">
                <div className="flex gap-3 py-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-neutral-300">
                    {Icons.fullstack({ className: "h-5 w-5" })}
                  </span>
                  <p className="text-sm text-neutral-300">
                    {t("about.highlights.fullstack")}
                  </p>
                </div>
                <div className="flex gap-3 py-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-neutral-300">
                    {Icons.tech({ className: "h-5 w-5" })}
                  </span>
                  <p className="text-sm text-neutral-300">
                    {t("about.highlights.tech")}
                  </p>
                </div>
                <div className="flex gap-3 py-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-neutral-300">
                    {Icons.methodologies({ className: "h-5 w-5" })}
                  </span>
                  <p className="text-sm text-neutral-300">
                    {t("about.highlights.methodologies")}
                  </p>
                </div>
                <div className="flex gap-3 py-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-neutral-300">
                    {Icons.evolution({ className: "h-5 w-5" })}
                  </span>
                  <p className="text-sm text-neutral-300">
                    {t("about.highlights.evolution")}
                  </p>
                </div>
              </div>

              {/* subtle footer note */}
              <div className="mt-4 rounded-lg bg-neutral-950/60 p-3 text-xs text-neutral-400 ring-1 ring-inset ring-neutral-800">
                {t("hero.subtitle", { years })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
