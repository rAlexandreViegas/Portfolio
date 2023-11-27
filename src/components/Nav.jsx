import { Link } from "react-router-dom";
import navLinks from "../utils/data/navLinks";

export default function Nav() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">
          <span className="header__title header__title--highlight">
            &lt;&#47;&gt;
          </span>
          Alexandre Viegas
        </h1>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          {navLinks.map((link) => (
            <li key={link.to} className="header__link">
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
