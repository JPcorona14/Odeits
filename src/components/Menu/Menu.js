import React from "react";
import OditLogo from "../OditLogo";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <OditLogo />
      <nav>
        {/* <Link to="/" className={styles.links}>
          Dashboad
        </Link> */}
        {/* <Link to="/team_members" className={styles.links}>
          Team Members
        </Link> */}
        <Link to="/audits" className={styles.links}>
          Audits
        </Link>
        {/* <Link to="/organization" className={styles.links}>
          Organization
        </Link> */}
        {/* <Link to="/reports" className={styles.links}>
          Reports
        </Link> */}
        <Link to="/" className={styles.links}>
          Settings
        </Link>
      </nav>
    </div>
  );
}
