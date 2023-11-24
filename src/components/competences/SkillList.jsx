import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";

export default function SkillList({ title, skills }) {
  const [animationDelay, setAnimationDelay] = useState("");
  const [scaleClass, setScaleClass] = useState("");

  useEffect(() => {
    switch (title) {
      case "Hobbies":
        setAnimationDelay("0.175s");
        setScaleClass("skills__skill-icon--no-scale");
        break;
      case "Outils":
        setAnimationDelay("0.15s");
        break;
      case "Back-end":
        setAnimationDelay("0.125s");
        break;
      default:
        setAnimationDelay("0.1s");
        break;
    }
  }, [title]);

  return (
    <div className={"skills__container"} style={{ animationDelay }}>
      <h2 className="skills__title">{title}</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <a
            key={skill.name}
            className="skills__link"
            href={skill.link}
            target="_blank"
            rel="noreferrer"
          >
            <li className="skills__skill">
              <Avatar
                className={`skills__skill-icon ${scaleClass}`}
                variant="square"
                src={skill.icon}
              />
              <p className="skills__skill-name">{skill.name}</p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
