import { Languages, Profile, Resume, Section, Skills } from "../../components";

import "./styles.scss";

const HomePage = () => {
  return (
    <div className="container">
      <Section customClasses="profile">
        <Profile />
      </Section>

      <Section customClasses="information" title="Information">
        <p>Under construction...</p>
      </Section>

      <Section customClasses="resume" title="Resume">
        <Resume />
      </Section>

      <Section customClasses="experience" title="Experience">
        <p>Under construction...</p>
      </Section>

      <Section customClasses="education" title="Education">
        <p>Under construction...</p>
      </Section>

      <Section customClasses="skills" title="Skills">
        <Skills />
      </Section>

      <Section customClasses="languages" title="Languages">
        <Languages />
      </Section>
    </div>
  );
};

export default HomePage;
