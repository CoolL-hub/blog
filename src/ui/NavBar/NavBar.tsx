import React, { useEffect } from "react";

import styles from "./NavBar.module.scss";
import { Link } from "@tanstack/react-router";

function NavBar() {

  return (
    <nav className={`${styles.navBar}`}>
      <Link to="/" className={`${styles.navItem}`}>Home</Link>
      <div className={`${styles.navItem}`}>About me</div>
      <Link to="/projects" className={`${styles.navItem}`} >Projects</Link>
      <div className={`${styles.navItem}`}>Contact</div>
    </nav>
  );
}

export default NavBar;
