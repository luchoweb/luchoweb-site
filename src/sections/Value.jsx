import { useTranslation } from "react-i18next";
import { Bot, Rocket, Target, Users } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const items = [
  { key: "production", Icon: Bot },
  { key: "speed", Icon: Rocket },
  { key: "problems", Icon: Target },
  { key: "leadership", Icon: Users },
];

export default function Value() {
  const { t } = useTranslation();

  return (
    <section id="value" aria-labelledby="value-title" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="value-title"
          eyebrow={t("value.eyebrow")}
          title={t("value.title")}
          subtitle={t("value.subtitle")}
        />

        <ul className="grid gap-6 sm:grid-cols-2">
          {items.map(({ key, Icon }) => (
            <li
              key={key}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-7 transition hover:border-cyan-300/40"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 ring-1 ring-inset ring-cyan-300/25">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {t(`value.items.${key}.title`)}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                {t(`value.items.${key}.desc`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
