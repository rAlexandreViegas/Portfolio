import SkillList from "./SkillList";
import frontEndLanguages from "../../utils/data/competences/frontEndLanguages";
import backEndLanguages from "../../utils/data/competences/backEndLanguages";
import outils from "../../utils/data/competences/outils";
import hobbies from "../../utils/data/competences/hobbies";

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
