import { education } from "../../services/education";

import "../Experience/styles.scss";

const Education = () => {
  const schoolLogoRoute = "/images/schools";

  return (
    <>
      {education.map((course) => (
        <div className="school d-flex align-items-md-center gap-3">
          <picture className="school__logo">
            <img src={`${schoolLogoRoute}/${course.image}`} alt={course.school} />
          </picture>
          <div className="school__info">
            <p className="d-flex align-items-center flex-wrap m-0 mb-2 school__name">
              <strong>{course.school}</strong>
              <span className="badge bg-secondary ms-2">
                {course.link && (
                  <a href={course.link} className="text-light text-decoration-none d-flex align-items-center" target="_blank" rel="noopener">
                    <span>View certificate</span>
                    <i className="bi bi-box-arrow-up-right ms-1"></i>
                  </a>
                )}
              </span>
            </p>

            <p className="m-0 school__degree">{course.degree}</p>

            <p className="m-0 mt-1 text-secondary">
              <span>{course.type}</span>
              <span className="ms-2 me-2 text-secondary d-none d-md-inline-block">&middot;</span>
              <span>{course.date_worked.until}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Education;
