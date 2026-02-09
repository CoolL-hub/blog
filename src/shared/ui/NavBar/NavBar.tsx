import { Link } from "@tanstack/react-router";

import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className={`${styles.navBar}`}>
      <Link to="/" className={`${styles.navItem}`}>Home</Link>
      <Link to="/about" className={`${styles.navItem}`}>About me</Link>
      <Link to="/projects" className={`${styles.navItem}`}>Projects</Link>
      <Link to="/contact" className={`${styles.navItem}`}>Contact</Link>
    </nav>
  );
}

export default NavBar;
