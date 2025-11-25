import { ClockFading, FastForward, Layers, Telescope } from "lucide-react";
import { useTranslation } from "react-i18next";

const Icons = {
  fullstack: (props) => (
    <Telescope {...props} />
  ),
  tech: (props) => (
    <Layers {...props} />
  ),
  methodologies: (props) => (
    <FastForward {...props} />
  ),
  evolution: (props) => (
    <ClockFading {...props} />
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
              <p>{t("about.ai")}</p>
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
                  <p className="text-sm text-neutral-300 flex-1">
                    {t("about.highlights.fullstack")}
                  </p>
                </div>
                <div className="flex gap-3 py-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-neutral-300">
                    {Icons.tech({ className: "h-5 w-5" })}
                  </span>
                  <p className="text-sm text-neutral-300 flex-1">
                    {t("about.highlights.tech")}
                  </p>
                </div>
                <div className="flex gap-3 py-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-neutral-300">
                    {Icons.methodologies({ className: "h-5 w-5" })}
                  </span>
                  <p className="text-sm text-neutral-300 flex-1">
                    {t("about.highlights.methodologies")}
                  </p>
                </div>
                <div className="flex gap-3 py-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-neutral-300">
                    {Icons.evolution({ className: "h-5 w-5" })}
                  </span>
                  <p className="text-sm text-neutral-300 flex-1">
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
