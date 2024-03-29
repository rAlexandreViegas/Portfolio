import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">&copy; 2023 Alexandre Viegas</p>
        <div className="footer__link">
          <a
            className="footer__text"
            href="https://github.com/rAlexandreViegas/Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Dépot GitHub du portfolio
          </a>
          <GitHubIcon className="footer__icon" />
        </div>
      </div>
      <p className="footer__text">
        Built by Alexandre Viegas using React.js
      </p>
    </footer>
  );
}
