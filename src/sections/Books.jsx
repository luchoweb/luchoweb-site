import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";

export const AMAZON_AUTHOR_URL = "https://www.amazon.com/author/luchoweb";

// typographic covers: no cover images in the repo, so each book gets a tinted spine
const COVER_TINTS = ["from-cyan-300/30 to-cyan-500/5", "from-sky-300/30 to-indigo-500/5"];

export default function Books() {
  const { t } = useTranslation();
  const items = t("books.items", { returnObjects: true });

  return (
    <section id="books" aria-labelledby="books-title" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            id="books-title"
            eyebrow={t("books.eyebrow")}
            title={t("books.title")}
            subtitle={t("books.subtitle")}
          />
          <a
            href={AMAZON_AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="-mt-4 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
          >
            {t("books.cta")}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only"> {t("contact.newTab")}</span>
          </a>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <li key={item.title}>
              <a
                href={AMAZON_AUTHOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition hover:border-cyan-300/40 hover:bg-slate-900/80"
              >
                <div
                  className={[
                    "relative flex aspect-[16/9] flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br p-5 pl-7 ring-1 ring-inset ring-white/10 sm:aspect-[4/3]",
                    COVER_TINTS[i % COVER_TINTS.length],
                  ].join(" ")}
                >
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-2 bg-white/10" />
                  <span className="font-mono text-xs tracking-tight text-slate-300">Lucho Web</span>
                  <h3 className="text-xl font-semibold leading-tight tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 px-1 text-sm">
                  <span className="text-slate-300 transition group-hover:text-white">{t("books.byline")}</span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                    aria-hidden="true"
                  />
                </div>
                <span className="sr-only"> {t("contact.newTab")}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
