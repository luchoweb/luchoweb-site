import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitch from "./LanguageSwitch";

const NAV = [
  { key: "value", href: "#value" },
  { key: "process", href: "#process" },
  { key: "production", href: "#production" },
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
  const { t } = useTranslation();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    // lock scroll and handle Escape while the mobile menu is open
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-slate-950/85 backdrop-blur-xl"
          : "border-b border-transparent",
      ].join(" ")}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-cyan-300 focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950"
      >
        {t("skip")}
      </a>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="rounded-md font-mono text-sm tracking-tight text-slate-100">
            {t("logo")}
          </a>

          <nav aria-label={t("nav.label")} className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitch />
            <a
              href="#contact"
              className="hidden rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:inline-flex"
            >
              {t("cta.letsTalk")}
            </a>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-200 hover:bg-white/10 lg:hidden"
            >
              <span className="sr-only">{t("menu.open")}</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "fixed inset-0 z-50 lg:hidden",
          open ? "visible" : "invisible",
        ].join(" ")}
      >
        <div
          onClick={close}
          className={[
            "absolute inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t("menu.title")}
          className={[
            "absolute right-0 top-0 h-dvh w-80 max-w-[85%] border-l border-white/10 bg-slate-950 shadow-xl transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="text-sm text-slate-300">{t("menu.title")}</span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-slate-300 hover:bg-white/10"
            >
              <span className="sr-only">{t("menu.close")}</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={t("nav.label")} className="px-2 py-2">
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
              className="mt-3 block rounded-lg bg-cyan-300 px-3 py-3 text-center text-base font-semibold text-slate-950 hover:bg-cyan-200"
            >
              {t("cta.letsTalk")}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
