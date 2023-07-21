import { skills } from "../../services/skills";

const Skills = () => {
  return (
    <ul className="skills__list m-0 p-0 list-unstyled d-flex gap-3 flex-wrap">
      {skills.map((skill) => (
        <li key={skill} className="skill simple-card">
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
