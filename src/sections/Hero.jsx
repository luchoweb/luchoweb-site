import { useTranslation } from "react-i18next";

export default function Hero({ years = 14 }) {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative overflow-hidden bg-neutral-950">
      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-20%] h-96 w-[60%] rounded-full bg-purple-600/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          {/* Copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">
              <span>{t("hero.badge", { years })}</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
              {t("hero.subtitle", { years })}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 hover:border-neutral-600"
              >
                {t("hero.primaryCta")}
              </a>
              {/*<a
                href="#work"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-2.5 text-sm font-medium text-neutral-200 transition hover:bg-neutral-900"
              >
                {t("hero.secondaryCta")}
              </a>*/}
            </div>
          </div>

          {/* Placeholder image */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800" />
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-16 w-16 rounded-full border border-neutral-800 bg-neutral-950" />
                  <p className="text-sm text-neutral-400">
                    {t("hero.imagePlaceholder")}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-800" />
            </div>
            <p className="mt-3 text-center text-xs text-neutral-500">
              {t("hero.imageAlt")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
