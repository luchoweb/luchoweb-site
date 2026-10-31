import { useTranslation } from "react-i18next";
import { ArrowRight, Award } from "lucide-react";

export default function Hero({ years = 14 }) {
  const { t } = useTranslation();
  const certs = t("hero.certs", { returnObjects: true });
  const proof = t("hero.proof", { returnObjects: true, years });

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-15%] h-[32rem] w-[60%] rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 pb-16 pt-28 lg:grid-cols-12 lg:pb-24 lg:pt-36">
          <div className="lg:col-span-7">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
              {t("hero.eyebrow", { years })}
            </p>
            <h1
              id="hero-title"
              className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {t("hero.title")}{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-transparent">
                {t("hero.titleAccent")}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {t("hero.subtitle")}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                {t("hero.primaryCta")}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {t("hero.certsLabel")}
              </span>
              <ul className="flex flex-wrap gap-2">
                {certs.map((cert) => (
                  <li
                    key={cert}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3.5 py-1.5 text-sm font-medium text-cyan-100"
                  >
                    <Award className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[22rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 bg-slate-900/70 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <img
                  src="/me-site.jpeg"
                  alt={t("hero.imageAlt")}
                  width="841"
                  height="1050"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  sizes="22rem"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pb-16 pt-8">
          <h2 className="sr-only">{t("hero.proofLabel")}</h2>
          <dl className="grid gap-6 sm:grid-cols-3">
            {proof.map((item) => (
              <div key={item.label} className="flex flex-col-reverse gap-1">
                <dt className="text-sm leading-relaxed text-slate-400">{item.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
