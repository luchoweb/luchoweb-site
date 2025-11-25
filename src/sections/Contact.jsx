import { Mail, PhoneCall } from "lucide-react";
import { useTranslation } from "react-i18next";

const PHONE_E164 = "573246802829";
const PHONE_DISPLAY = "+57 324-680-2829";
const EMAIL = "luchoweb.dev@gmail.com";

const Icon = {
  phone: (props) => (
    <PhoneCall {...props} />
  ),
  whatsapp: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2a9 9 0 019 9 9 9 0 01-13.2 7.8L4 21l2.2-3.8A9 9 0 0112 2z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.5 8.5c0 1.8 2.3 4 3.5 4.5.6.3 1 .3 1.5 0l1-.6c.2-.1.5 0 .6.2l.7 1.1c.1.2 0 .6-.2.8-.8.7-2 1.2-3.3.9-2-.4-4.5-2.8-5-4.8-.3-1.2.2-2.4.9-3.3.2-.2.5-.3.8-.2l1.1.7c.2.1.3.4.2.6l-.6 1c-.3.5-.3.9 0 1.5z"
        fill="currentColor"
      />
    </svg>
  ),
  mail: (props) => (
    <Mail {...props} />
  ),
  check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12l4 4 10-10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Contact() {
  const { t } = useTranslation();

  const WHATSAPP_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
    t('contact.whatsapp.prefilled')
  )}`;
  const MAILTO_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
    t('contact.email.subject')
  )}&body=${encodeURIComponent(t('contact.email.body'))}`;

  return (
    <section id="contact" className="relative bg-neutral-950 py-20 sm:py-24">
      {/* subtle background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-56 w-56 rounded-full bg-emerald-600/10 blur-3xl"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Call */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl flex justify-between flex-col">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-emerald-400">
                {Icon.phone({ className: "h-5 w-5" })}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-medium text-white">
                  {t("contact.call.title")}
                </h3>
                <p className="text-sm text-neutral-400">
                  {t("contact.call.desc")}
                </p>
              </div>
            </div>
            <a
              href={`tel:+${PHONE_E164}`}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700 bg-emerald-700/20 px-4 py-2.5 text-sm font-medium text-emerald-200 hover:bg-emerald-700/30"
            >
              {Icon.phone({ className: "h-4 w-4" })}
              <span className="flex-1">
                {t("contact.call.cta")} {PHONE_DISPLAY}
              </span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl flex justify-between flex-col">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-emerald-400">
                {Icon.whatsapp({ className: "h-5 w-5" })}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-medium text-white">
                  {t("contact.whatsapp.title")}
                </h3>
                <p className="text-sm text-neutral-400">
                  {t("contact.whatsapp.desc")}
                </p>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700 bg-emerald-700/20 px-4 py-2.5 text-sm font-medium text-emerald-200 hover:bg-emerald-700/30"
            >
              {Icon.whatsapp({ className: "h-4 w-4" })}
              <span className="flex-1">
                {t("contact.whatsapp.cta")} {PHONE_DISPLAY}
              </span>
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl flex justify-between flex-col">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-sky-400">
                {Icon.mail({ className: "h-5 w-5" })}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-medium text-white">
                  {t("contact.email.title")}
                </h3>
                <p className="text-sm text-neutral-400">
                  {t("contact.email.desc")}
                </p>
              </div>
            </div>
            <a
              href={MAILTO_URL}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sky-700 bg-sky-700/20 px-4 py-2.5 text-sm font-medium text-sky-200 hover:bg-sky-700/30 basis-full"
            >
              {Icon.mail({ className: "h-4 w-4" })}
              <span className="flex-1">
                {t("contact.email.cta")}
              </span>
            </a>
          </div>
        </div>

        {/* Trust bullets */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            t("contact.points.response"),
            t("contact.points.discovery"),
            t("contact.points.ethics"),
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-4"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-950 ring-1 ring-inset ring-neutral-800 text-emerald-400">
                {Icon.check({ className: "h-4 w-4" })}
              </span>
              <p className="text-sm text-neutral-300 flex-1">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-neutral-500">
          {t("contact.note")}
        </p>
      </div>
    </section>
  );
}
