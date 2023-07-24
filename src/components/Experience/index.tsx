import { experience } from "../../services/experience";

import "./styles.scss";

const Experience = () => {
  const bizLogoRoute = "/images/companies";

  return (
    <>
      {experience.map((work) => (
        <div className="company d-flex align-items-md-center gap-3">
          <picture className="company__logo">
            <img src={`${bizLogoRoute}/${work.image}`} alt={work.company} />
          </picture>
          <div className="company__info">
            <p className="d-flex flex-wrap m-0 mb-2 company__name">
              <strong className="order-2 order-md-1">{work.company}</strong>
              <span className="badge bg-secondary text-light ms-md-2 mb-2 mb-md-0 order-md-2">{work.type}</span>
            </p>
            <p className="m-0 text-dark">
              <strong>{work.role}</strong>
              <span className="ms-2 me-2 d-none d-md-inline-block">&middot;</span>
              <span className="text-secondary d-block d-md-inline-block">{work.time_worked}</span>
              <span className="ms-2 me-2 text-secondary d-none d-md-inline-block">&middot;</span>
              <span className="text-secondary">
                {work.date_worked.from}
                {work.date_worked.until && `, `}
                {work.date_worked.until}
              </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
