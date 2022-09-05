import React from "react";
import styles from "./AuditTemplateList.module.css";

export default function AuditTemplateList(props) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>{props.auditName}</div>
      <div className={styles.item}>{props.questions}</div>
      <div className={styles.item}>{props.totalCompleted}</div>
      <div className={styles.item}>{props.avgCompletionTime}</div>
      <div className={styles.item}>{props.avgRating}</div>
    </div>
  );
}
