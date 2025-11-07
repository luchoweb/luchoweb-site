import { useTranslation } from "react-i18next";

const Social = {
  Linkedin: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7.5 10.5v6M7.5 7.5v.01M12 16.5v-6m0 0c0-1.7 3-1.8 3 0v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Instagram: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  ),
  TikTok: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M14 4c.2 2.4 1.7 3.9 4 4v2.2a7 7 0 01-4-1.2v5.2a4 4 0 11-3.5-3.9V8.2a6 6 0 00-1-.1 6 6 0 106 6V4h-1.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          {/* Brand + tagline */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <span className="rounded-md bg-neutral-900 px-2 py-1 text-sm tracking-tight text-neutral-200 ring-1 ring-inset ring-neutral-800 font-mono">
                {t("logo")}
              </span>
            </div>
            <p className="mt-3 text-sm text-neutral-400 max-w-md">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/tu-usuario" // TODO: reemplaza por tu URL real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-inset ring-neutral-800 text-neutral-300 hover:bg-neutral-800"
              aria-label={t("social.linkedin")}
              title={t("social.linkedin")}
            >
              {Social.Linkedin({ className: "h-5 w-5" })}
            </a>
            <a
              href="https://www.instagram.com/tu_usuario" // TODO: reemplaza por tu @ real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-inset ring-neutral-800 text-neutral-300 hover:bg-neutral-800"
              aria-label={t("social.instagram")}
              title={t("social.instagram")}
            >
              {Social.Instagram({ className: "h-5 w-5" })}
            </a>
            <a
              href="https://www.tiktok.com/@tu_usuario" // TODO: reemplaza por tu @ real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-inset ring-neutral-800 text-neutral-300 hover:bg-neutral-800"
              aria-label={t("social.tiktok")}
              title={t("social.tiktok")}
            >
              {Social.TikTok({ className: "h-5 w-5" })}
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-900 py-6">
          <p className="text-center text-xs text-neutral-500">
            &copy; {year} Lucho Web · {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
