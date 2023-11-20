import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Typography>&copy; 2023 Alexandre Viegas</Typography>
        <Typography>
          <a
            href="https://github.com/rAlexandreViegas"
            target="_blank"
            rel="noreferrer"
          >
            Mon dépot GitHub
            <GitHubIcon sx={{ fontSize: "inherit", ml: 1 }} />
          </a>
        </Typography>
      </div>
      <Typography>Built by Alexandre Viegas using React and SCSS.</Typography>
    </footer>
  );
}
