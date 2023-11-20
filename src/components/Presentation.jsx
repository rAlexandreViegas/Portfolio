import { Avatar, Typography } from "@mui/material";
import avatarImg from "../assets/avatar.png";
export default function Presentation() {
  return (
    <main className="presentation">
      <section className="presentation__container">
        <div className="presentation__text">
          <Typography
            className="presentation__text__title"
            variant="h1"
            sx={{ fontSize: "4rem", fontWeight: "bold" }}
          >
            Bienvenue, <br />
            Je suis Alexandre Viegas
          </Typography>
          <Typography
            className="presentation__text__title"
            variant="h2"
            sx={{ fontSize: "2rem" }}
          >
            Développeur Web Full Stack
          </Typography>
          <Typography
            className="presentation__text__description"
            variant="subtitle1"
            sx={{ fontSize: "1.2rem" }}
          >
            Actuellement en formation en tant que Concepteur Développeur
            d'Applications, je suis passionné par l'écosystème JavaScript, avec
            une expertise grandissante dans la stack MERN/SERN.
          </Typography>
        </div>
        <Avatar
          src={avatarImg}
          alt="avatar"
          sx={{ width: 400, height: 400, bgcolor: "#273039" }}
        />
      </section>
    </main>
  );
}
