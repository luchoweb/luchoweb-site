import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const NAV = [
  { key: "home", href: "#home" },
  { key: "services", href: "#services" },
  { key: "work", href: "#work" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // lock scroll when mobile menu is open
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const changeLang = (lng) => {
      i18n.changeLanguage(lng);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-colors",
        "border-b border-neutral-800",
        scrolled ? "bg-neutral-900/80 backdrop-blur" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="rounded-md bg-neutral-900 px-2 py-1 text-sm tracking-tight text-neutral-200 ring-1 ring-inset ring-neutral-800 font-mono">
              {t("logo")}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-md transition"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Right side: CTA + Lang */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => changeLang("en")}
              className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800"
            >
              EN
            </button>
            <button
              onClick={() => changeLang("es")}
              className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800"
            >
              ES
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 hover:border-neutral-600"
            >
              <span>{t("cta.letsTalk")}</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            aria-label={t("menu.open")}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 text-neutral-200 hover:bg-neutral-800/60"
          >
            <span className="sr-only">{t("menu.open")}</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-neutral-200" />
              <span className="block h-0.5 w-5 bg-neutral-200" />
              <span className="block h-0.5 w-5 bg-neutral-200" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden fixed inset-0 z-50 transition",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* scrim */}
        <div
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/60",
            open ? "opacity-100" : "opacity-0",
            "transition-opacity",
          ].join(" ")}
        />

        {/* panel */}
        <aside
          className={[
            "absolute right-0 top-0 h-full w-80 max-w-[85%]",
            "bg-neutral-900 border-l border-neutral-800 shadow-xl",
            "transform transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          aria-label={t("menu.title")}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
            <span className="text-sm text-neutral-300">{t("menu.title")}</span>
            <button
              aria-label={t("menu.close")}
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 text-neutral-300 hover:bg-neutral-800/60"
            >
              <span className="sr-only">{t("menu.close")}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-current"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav className="px-2 py-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-neutral-200 hover:bg-neutral-800/70"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-3 text-base font-medium text-white hover:bg-neutral-800"
            >
              {t("cta.letsTalk")}
            </a>

            {/* Simple language switcher (optional) */}
            <div className="mt-4 flex items-center gap-2 px-3">
              <button
                onClick={() => changeLang("en")}
                className="rounded-md border border-neutral-800 px-3 py-1 text-sm text-neutral-300 hover:bg-neutral-800"
              >
                EN
              </button>
              <button
                onClick={() => changeLang("es")}
                className="rounded-md border border-neutral-800 px-3 py-1 text-sm text-neutral-300 hover:bg-neutral-800"
              >
                ES
              </button>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
