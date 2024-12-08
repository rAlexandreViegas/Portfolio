import { Avatar } from "@mui/material";
import socialLinks from "../../utils/data/accueil/socialLinks";

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__container">
        <h1 className="presentation__title">
          Bienvenue, <br />
          Je suis Alexandre Viegas
        </h1>
        <h2 className="presentation__title-h2">Développeur Web Full Stack</h2>
        <p className="presentation__description">
          Actuellement en formation en tant que Concepteur Développeur
          d'Applications, je suis passionné par l'écosystème JavaScript, avec
          une expertise grandissante dans la stack MERN.
        </p>
        <div className="presentation__social">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className="presentation__social-link"
              href={link.link}
              target="_blank"
            >
              <Avatar className="presentation__social-frame" variant="square">
                <link.icon className="presentation__social-icon" />
              </Avatar>
            </a>
          ))}
        </div>
      </div>
      <Avatar className="presentation__avatar" src={} alt="avatar" />
    </section>
  );
}
