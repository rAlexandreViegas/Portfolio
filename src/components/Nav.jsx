import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">
          <span className="header__title--highlight">&lt;&#47;&gt;</span>
          Alexandre Viegas
        </h1>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/">Accueil</Link>
          </li>
          <li className="header__item">
            <Link to="/competences">Compétences</Link>
          </li>
          <li className="header__item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="header__item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
