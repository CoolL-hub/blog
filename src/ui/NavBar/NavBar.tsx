import React, { useEffect } from "react";

import styles from "./NavBar.module.scss";

function NavBar() {

  useEffect(() => {
    startLoop();
  }, [])

  function startLoop() {};

  return (
    <nav className={`${styles.navBar}`}>
      <div className={`${styles.navItem}`}>Home</div>
      <div className={`${styles.navItem}`}>About me</div>
      <div className={`${styles.navItem}`}>Projects</div>
      <div className={`${styles.navItem}`}>Contact</div>
    </nav>
  );
}

export default NavBar;
