import { Education, Experience, Information, Languages, Profile, Resume, Section, Skills } from "../../components";

import "./styles.scss";

const HomePage = () => {
  return (
    <div className="container">
      <Section customClasses="profile">
        <Profile />
      </Section>

      <Section customClasses="information" title="Information">
        <Information />
      </Section>

      <Section customClasses="resume" title="Resume">
        <Resume />
      </Section>

      <Section customClasses="experience" title="Experience">
        <Experience />
      </Section>

      <Section customClasses="education" title="Education">
        <Education />
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
