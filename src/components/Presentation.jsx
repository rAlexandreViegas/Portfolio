import { Avatar } from "@mui/material";
import avatarImg from "../assets/avatar.png";
export default function Presentation() {
  return (
    <main className="accueil">
      <section className="accueil__container">
        <div className="accueil__text">
          <h1 className="accueil__title accueil__title--highlight">
            Bienvenue, <br />
            Je suis Alexandre Viegas
          </h1>
          <h2 className="accueil__title">Développeur Web Full Stack</h2>
          <p className="accueil__description">
            Actuellement en formation en tant que Concepteur Développeur
            d'Applications, je suis passionné par l'écosystème JavaScript, avec
            une expertise grandissante dans la stack MERN/SERN.
          </p>
        </div>
        <Avatar className="accueil__avatar" src={avatarImg} alt="avatar" />
      </section>
    </main>
  );
}
