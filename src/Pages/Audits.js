import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuditTemplateList from "../components/Audits/AuditTemplateList";
import Loading from "../components/Loading";
import styles from "./Audits.module.css";

export default function Audits(props) {
  const tablePull = "Call Quality Audit".replace(" ", "%20");
  const fbase = `/auditQuestions?audit=${tablePull}`;
  const fullPull = `/allAuditQuestions`

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(fullPull)
      .then((res) => {
        return res.json();
      })
      .then(
        (results) => {
          setIsLoaded(true);
          setItems(results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div className={styles.main}>
        <div className={styles.partOne}>
          <div className={styles.break}></div>
          <div className={`${styles.title}`}>Audits</div>
          <div className={`${styles.break} ${styles.partOneRight}`}>
            <Link
              to={{
                pathname: "/currentAudit",
                state: {
                  name: "Create New Template",
                },
              }}
              className={`${styles.button} ${styles.button_primary}`}
            >
              + New Audit Template
            </Link>
          </div>
        </div>
        <section>
          <div className={styles.cat}>Audit Name</div>
          <div className={styles.cat}>Total Questions</div>
          <div className={styles.cat}>Total Audits</div>
          <div className={styles.cat}>Average Completion Time</div>
          <div className={styles.cat}>Average Rating</div>
        </section>
        {items.map((at) => {
          return (
            <Link
              to={{
                pathname: "/currentAudit",
                state: {
                  name: at,
                },
              }}
              className={styles.partTwo}
              key={at.id}
            >
              <AuditTemplateList
                key={at.id}
                auditName={at.Name}
                questions={at.Questions.split(" | ").length}
                totalCompleted="0"
                avgCompletionTime="0"
                avgRating="0"
              />
            </Link>
          );
        })}
      </div>
    );
  }
}
