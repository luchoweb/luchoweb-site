import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const NAV = [
  { key: "home", href: "#home" },
  { key: "services", href: "#services" },
  //{ key: "work", href: "#work" },
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
        "transition-all duration-300",
        "border-b border-white/10",
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="rounded-md bg-white/5 px-2 py-1 text-sm tracking-tight text-slate-100 ring-1 ring-inset ring-white/20 font-mono">
              {t("logo")}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Right side: CTA + Lang */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => changeLang("en")}
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-white/10"
            >
              EN
            </button>
            <button
              onClick={() => changeLang("es")}
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-white/10"
            >
              ES
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-sm transition hover:bg-cyan-400/20 hover:border-cyan-300/40"
            >
              <span>{t("cta.letsTalk")}</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            aria-label={t("menu.open")}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-200 hover:bg-white/10"
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
            "absolute inset-0 bg-slate-950/75 backdrop-blur-sm",
            open ? "opacity-100" : "opacity-0",
            "transition-opacity",
          ].join(" ")}
        />

        {/* panel */}
        <aside
          className={[
            "absolute right-0 top-0 h-dvh w-80 max-w-[85%]",
            "bg-slate-950 border-l border-white/10 shadow-xl",
            "transform transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          aria-label={t("menu.title")}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="text-sm text-slate-300">{t("menu.title")}</span>
            <button
              aria-label={t("menu.close")}
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-slate-300 hover:bg-white/10"
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
                className="block rounded-lg px-3 py-3 text-base text-slate-200 hover:bg-white/10"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-3 text-base font-medium text-cyan-50 hover:bg-cyan-400/20"
            >
              {t("cta.letsTalk")}
            </a>

            {/* Simple language switcher (optional) */}
            <div className="mt-4 flex items-center gap-2 px-3">
              <button
                onClick={() => changeLang("en")}
                className="rounded-md border border-white/15 px-3 py-1 text-sm text-slate-300 hover:bg-white/10"
              >
                EN
              </button>
              <button
                onClick={() => changeLang("es")}
                className="rounded-md border border-white/15 px-3 py-1 text-sm text-slate-300 hover:bg-white/10"
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
