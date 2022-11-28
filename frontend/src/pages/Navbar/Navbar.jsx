import React from "react";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

const Navbar = () => {
   const boxVarient = {
     hidden: {
       y: "-100vw",
     },
     visible: {
       y: 0,
       transition: {
         delay: 0.5,
         type: "spring",
         stiffness: 35,
       },
     },
   };

  return (
    <>
      <motion.div
        className={styles.nav_cont}
        variants={boxVarient}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.nav}>
          <h1 className={styles.logo}>Eng. Prasad</h1>
          <ul className={styles.list}>
            <li className={styles.list_item}>Home</li>
            <li className={styles.list_item}>About</li>
            <li className={styles.list_item}>Projects</li>
            <li className={styles.list_item}>Notes</li>
            <li className={styles.list_item}>Conatct</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
