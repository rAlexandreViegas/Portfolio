import SkillList from "./SkillList";
import frontEndLanguages from "../../utils/data/frontEndLanguages";
import backEndLanguages from "../../utils/data/backEndLanguages";
import outils from "../../utils/data/outils";
import hobbies from "../../utils/data/hobbies";

export default function Skills() {
  return (
    <section className="skills">
      <SkillList title="Front-end" skills={frontEndLanguages} />
      <SkillList title="Back-end" skills={backEndLanguages} />
      <p className="skills__description">
        Communication efficace • Travail d'équipe • Résolution de problèmes •
        Adaptabilité
      </p>
      <SkillList title="Outils" skills={outils} />
      <SkillList title="Hobbies" skills={hobbies} />
    </section>
  );
}
