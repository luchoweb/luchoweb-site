import { Check, Mail, PhoneCall } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";

const PHONE_E164 = "573246802829";
const PHONE_DISPLAY = "+57 324 680 2829";
const EMAIL = "luchoweb.dev@gmail.com";

const WhatsAppIcon = (props) => (
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
);

export default function Contact() {
  const { t } = useTranslation();
  const points = t("contact.points", { returnObjects: true });

  const channels = [
    {
      key: "whatsapp",
      Icon: WhatsAppIcon,
      href: `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(t("contact.whatsapp.prefilled"))}`,
      label: `${t("contact.whatsapp.cta")} ${PHONE_DISPLAY}`,
      external: true,
      primary: true,
    },
    {
      key: "email",
      Icon: Mail,
      href: `mailto:${EMAIL}?subject=${encodeURIComponent(t("contact.email.subject"))}&body=${encodeURIComponent(t("contact.email.body"))}`,
      label: t("contact.email.cta"),
    },
    {
      key: "call",
      Icon: PhoneCall,
      href: `tel:+${PHONE_E164}`,
      label: `${t("contact.call.cta")} ${PHONE_DISPLAY}`,
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-title"
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          center
        />

        <ul className="grid gap-5 md:grid-cols-3">
          {channels.map(({ key, Icon, href, label, external, primary }) => (
            <li
              key={key}
              className={[
                "flex flex-col justify-between rounded-2xl border p-6",
                primary ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10 bg-slate-900/50",
              ].join(" ")}
            >
              <div>
                <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-white">{t(`contact.${key}.title`)}</h3>
                <p className="mt-1 text-sm text-slate-300">{t(`contact.${key}.desc`)}</p>
              </div>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={[
                  "mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition",
                  primary
                    ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                    : "border border-white/15 text-slate-100 hover:bg-white/10",
                ].join(" ")}
              >
                {label}
                {external && <span className="sr-only"> {t("contact.newTab")}</span>}
              </a>
            </li>
          ))}
        </ul>

        <ul className="mt-10 flex flex-col items-center justify-center gap-x-8 gap-y-3 sm:flex-row sm:flex-wrap">
          {points.map((text) => (
            <li key={text} className="flex items-center gap-2 text-sm text-slate-300">
              <Check className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
