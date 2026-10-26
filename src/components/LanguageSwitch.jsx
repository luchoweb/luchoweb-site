import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "es", short: "ES" },
  { code: "en", short: "EN" },
];

export default function LanguageSwitch({ className = "" }) {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage || "es";

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className={`inline-flex rounded-lg border border-white/15 bg-white/5 p-0.5 ${className}`}
    >
      {LANGS.map(({ code, short }) => {
        const active = current === code;
        return (
          <button
            key={code}
            type="button"
            lang={code === "es" ? "es-CO" : "en-US"}
            aria-pressed={active}
            aria-label={t(`lang.${code}`)}
            onClick={() => i18n.changeLanguage(code)}
            className={[
              "min-w-[2.75rem] rounded-md px-2.5 py-1.5 text-xs font-medium transition",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
              active
                ? "bg-cyan-300 text-slate-950"
                : "text-slate-300 hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            {short}
          </button>
        );
      })}
    </div>
  );
}
