import { useTranslation } from "react-i18next";

export default function Hero({ years = 14 }) {
  const { t } = useTranslation();
  const proof = [
    t("hero.proof.delivery"),
    t("hero.proof.focus"),
    t("hero.proof.roi"),
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-transparent">
      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[-20%] h-[30rem] w-[65%] rounded-full bg-cyan-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          {/* Copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              <span>{t("hero.badge", { years })}</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              {t("hero.subtitle", { years })}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-100 shadow-sm transition hover:bg-cyan-400/20 hover:border-cyan-300/40"
              >
                {t("hero.primaryCta")}
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proof.map((item) => (
                <p
                  key={item}
                  className="rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-xs text-slate-300"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Placeholder image */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-slate-900/70 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-950/50 to-slate-900/50" />
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <img src="/me-site.jpeg" alt="me" className="h-full w-full object-cover" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
