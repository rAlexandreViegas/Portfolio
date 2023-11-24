import { Avatar } from "@mui/material";
import avatarImg from "../../assets/avatar.png";
import links from "../../utils/data/links";
import stack from "../../utils/data/stack";

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__wrapper">
        <div className="presentation__container">
          <h1 className="presentation__title-h1">
            Bienvenue, <br />
            Je suis Alexandre Viegas
          </h1>
          <h2 className="presentation__title-h2">Développeur Web Full Stack</h2>
          <p className="presentation__description">
            Actuellement en formation en tant que Concepteur Développeur
            d'Applications, je suis passionné par l'écosystème JavaScript, avec
            une expertise grandissante dans la stack MERN.
          </p>
          <div className="presentation__social-links-container">
            {links.map((link) => (
              <a
                key={link.name}
                className="presentation__social-link"
                href={link.link}
                target="_blank"
              >
                <Avatar className="presentation__social-frame" variant="square">
                  <link.icon className="presentation__social-icon" />
                  {/* {link.placeholder} */}
                </Avatar>
              </a>
            ))}
          </div>
        </div>
        <Avatar className="presentation__avatar" src={avatarImg} alt="avatar" />
      </div>
      <div className="presentation__stack-container">
        {stack.map((item) => (
          <a
            key={item.name}
            className="presentation__stack-item"
            href={item.link}
            target="_blank"
          >
            {item.name}
            <img
              className="presentation__stack-icon"
              src={item.icon}
              alt={item.name}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
