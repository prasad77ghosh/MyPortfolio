import React from "react";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// animations
const boxVarient = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 30,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listVarient = {
  hidden: {
    y: -10,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
  },
};


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/notes", name: "Notes" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <>
      <div className={styles.main_nav_cont}>
        <motion.div
          className={styles.menu_icon_cont}
          whileHover={{ scale: 1.2 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClear size={40} /> : <MdMenu size={40} />}
        </motion.div>

        {menuOpen && (
          <>
            <motion.div
              className={styles.nav_cont}
              variants={boxVarient}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.nav_links_cont}>
                <div className={styles.link_cont}>
                  {menuLinks.map((link, index) => (
                    <NavLink key={index} to={link.path}>
                      <motion.p
                        className={styles.link_item}
                        onClick={() => setMenuOpen(!menuOpen)}
                        variants={listVarient}
                      >
                        {link.name}
                      </motion.p>
                    </NavLink>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
