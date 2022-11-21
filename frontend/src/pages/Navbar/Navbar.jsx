import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className={styles.main_cont}>
          <div className={styles.logo_cont}>
            <p>
              <span className={styles.first_let}>E</span>ng .
            </p>
            <p>
              <span className={styles.first_let}>P</span>rasad{" "}
            </p>
          </div>

          <div className={styles.nav_links_cont}>
            <ul className={styles.nav_links}>
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Projects</NavLink>
              </li>
              <li>
                <NavLink>Notes</NavLink>
              </li>
              <li>
                <NavLink>About</NavLink>
              </li>
              <li>
                <NavLink>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
