import React from "react";
import moviedbLogo from "../img/moviedb.png";

const SideBar = ({ items, onItemSelect, selectedItem }) => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        {items.map(item => (
          <li
            key={item.id}
            className={
              item === selectedItem
                ? "side-nav__item side-nav__item--active"
                : "side-nav__item"
            }
            onClick={() => onItemSelect(item)}
          >
            <a className="side-nav__link">{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="footer">
        <a
          href="https://www.themoviedb.org/"
          target="_blanck"
          className="footer__logo"
        >
          <img
            src={moviedbLogo}
            alt="Powered by the movie database"
            className="footer__logo-img"
          />
        </a>
        <div className="legal">
          &copy; 2019 by{" "}
          <a
            href="https://github.com/King-Kyle"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Kyle King.
          </a>{" "}

        </div>
      </div>
    </nav>
  );
};

export default SideBar;
