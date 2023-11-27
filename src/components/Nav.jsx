import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import navLinks from "../utils/data/navLinks";

export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      <Link className="header__link" to="/">
        <h1 className="header__title">
          <span className="header__title header__title-logo">
            &lt;&#47;&gt;
          </span>
          <span className="header__title header__title-full">
            Alexandre Viegas
          </span>
          <span className="header__title header__title-short">Alexandre</span>
        </h1>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          {navLinks.map((link) => (
            <li key={link.to} className="header__list-link">
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="header__mobile">
          <Button
            className="header__mobile-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            className="header__mobile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {navLinks.map((link) => (
              <MenuItem key={link.to} className="header__link">
                <Link to={link.to}>{link.text}</Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </nav>
    </header>
  );
}
