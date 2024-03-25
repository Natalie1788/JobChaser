import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"
import logo from "../images/logo.png"
import { signOut } from "firebase/auth";
import { auth } from "./../../firebase-config";

function Navbar() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        // Additional actions after sign out, such as redirecting to another page
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <nav  className={styles.menu}>
      <img src={logo} alt='logo' />
      <ul className={styles.list}>
        <li><Link to="/"><span className={styles.itemtext}>Home</span></Link></li>
        <li><Link to="/joblist"><span className={styles.itemtext}>Job</span></Link></li>
        <li><Link to="/about"><span className={styles.itemtext}>About</span></Link></li>
        <li><Link to="/contact"><span className={styles.itemtext}>Contact</span></Link></li>
        <li><Link to="/signup"><span className={styles.itemtext}>SingUp</span></Link></li>
        <li><button onClick={handleSignOut}>Sign Out</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;