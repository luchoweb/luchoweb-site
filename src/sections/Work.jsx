import { useTranslation } from "react-i18next";

const items = [
  { key: "proj1" },
  { key: "proj2" },
  { key: "proj3" },
  { key: "proj4" },
  { key: "proj5" },
  { key: "proj6" },
];

export default function Work() {
  const { t } = useTranslation();

  return (
    <section id="work" className="relative bg-transparent py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-cyan-100">
            {t("work.eyebrow")}
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {t("work.title")}
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            {t("work.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ key }) => (
            <article
              key={key}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/55 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              {/* Thumbnail placeholder — replace with <img src=... alt=... /> */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950/60">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-950/60 to-slate-900/60" />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-3 h-14 w-14 rounded-lg border border-white/15 bg-white/5" />
                    <p className="text-xs text-slate-500">
                      {t("work.thumbnailPlaceholder")}
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              {/* Copy */}
              <div className="p-6">
                <h3 className="text-base font-medium text-white">
                  {t(`work.items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {t(`work.items.${key}.desc`)}
                </p>

                {/* Optional: link/CTA (uncomment if needed) */}
                {false && (
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs text-neutral-200 hover:bg-neutral-900"
                    >
                      {t("work.viewProject")}
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// How to replace the thumbnail later:
// <img src="/path/to/your.jpg" alt={t(`work.items.proj1.title`)} className="h-full w-full object-cover" />
