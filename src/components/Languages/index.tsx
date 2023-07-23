import { languages } from "../../services/languages";

import "./styles.scss";

const Languages = () => {
  return (
    <ul className="languages__list list-unstyled m-0 p-0 d-flex gap-3">
      {languages.map((lang) => (
        <li key={lang.name} className="lang simple-card">
          <p className="lang__name">{lang.name}</p>
          <p className="m-0 lang__level">{lang.level}</p>
        </li>
      ))}
    </ul>
  );
};

export default Languages;
