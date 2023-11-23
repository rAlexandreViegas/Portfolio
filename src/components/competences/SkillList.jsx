import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";

export default function SkillList({ title, skills }) {
  const [animationDelay, setAnimationDelay] = useState("0.1s");
  const [marginClass, setMarginClass] = useState("");
  const [scaleClass, setScaleClass] = useState("");

  useEffect(() => {
    switch (title) {
      case "Hobbies":
        setAnimationDelay("0.25s");
        setMarginClass("skills__container--margin-top");
        setScaleClass("skills__icon--no-scale");
        break;
      case "Outils":
        setAnimationDelay("0.2s");
        setMarginClass("skills__container--margin-top");
        break;
      case "Back-end":
        setAnimationDelay("0.15s");
        break;
      default:
        setAnimationDelay("0.1s");
        break;
    }
  }, [title]);

  return (
    <div
      className={`skills__container ${marginClass}`}
      style={{ animationDelay }}
    >
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
            <li className="skills__item">
              <Avatar
                className={`skills__icon ${scaleClass}`}
                variant="square"
                src={skill.icon}
              />
              <p className="skills__text">{skill.name}</p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
