import { JSX } from "react";

import "./styles.scss";

interface Props {
  children: JSX.Element;
  customClasses: string;
  title?: string;
}

const Section = ({ children, customClasses, title }: Props) => {
  return (
    <section className={`section ${customClasses}`}>
      {title ? <h3 className="section__title">{title}</h3> : ""}
      {children}
    </section>
  );
};

export default Section;
