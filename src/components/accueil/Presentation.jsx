import { Avatar } from "@mui/material";
import avatarImg from "../../assets/avatar.png";
export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__container">
        <h1 className="presentation__title presentation__title--highlight">
          Bienvenue, <br />
          Je suis Alexandre Viegas
        </h1>
        <h2 className="presentation__title">Développeur Web Full Stack</h2>
        <p className="presentation__description">
          Actuellement en formation en tant que Concepteur Développeur
          d'Applications, je suis passionné par l'écosystème JavaScript, avec
          une expertise grandissante dans la stack MERN/SERN.
        </p>
      </div>
      <Avatar className="presentation__avatar" src={avatarImg} alt="avatar" />
    </section>
  );
}
