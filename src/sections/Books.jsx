import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";

export const AMAZON_AUTHOR_URL = "https://www.amazon.com/author/luchoweb";

const BOOKS = [
  { cover: "/books/ia-que-factura.webp", href: "https://a.co/d/00NcNk6a" },
  { cover: "/books/potencia-tu-talento-con-ia.webp", href: "https://a.co/d/0eTHMyhb" },
];

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

        <ul className="grid grid-cols-2 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <li key={item.title}>
              <a
                href={BOOKS[i].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-3 transition hover:border-cyan-300/40 sm:p-4 hover:bg-slate-900/80"
              >
                <img
                  src={BOOKS[i].cover}
                  alt=""
                  width="600"
                  height="960"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/8] w-full rounded-lg object-cover shadow-lg shadow-black/40 ring-1 ring-white/10 transition duration-300 group-hover:-translate-y-1"
                />
                <h3 className="mt-4 px-1 font-semibold leading-snug text-white">{item.title}</h3>
                <div className="mt-1 flex items-center justify-between gap-3 px-1 text-sm">
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
