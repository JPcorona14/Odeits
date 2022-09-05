import React from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import AuditQuestions from "./AuditQuestions";

import styles from "./CurrentAudit.module.css";

function CurrentAudit() {
  const location = useLocation();
  const name = location.state.name;

  return (
    <div className={styles.main}>
      {/* Top Part */}
      <div className={styles.partOne}>
        <div className={`${styles.break} ${styles.partOneLeft}`}>
          <Link
            to="/audits"
            className={`${styles.button} ${styles.button_primary}`}
          >
            {"< Back Home"}
          </Link>
        </div>
        <div className={`${styles.title} ${styles.break}`}>{name.Name}</div>
        <div className={styles.break} />
      </div>
      <AuditQuestions q={name} />
    </div>
  );
}

export default withRouter(CurrentAudit);
