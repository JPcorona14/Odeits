import React from "react";
import AuditAnswers from "./AuditAnswers";
import styles from "./AuditQuestions.module.css";

function AuditQuestions(props) {

  let i = -1;
  let questionNumber = 0;
  const questionAnswers = props.q.Answers;

  return (
    <div className={styles.cont}>
      {props.q.Questions.split(" | ").map((e) => {
        i++;
        questionNumber++;

        return (
          <div className={styles.questCont} key={`${i}`}>
            <div>
              {questionNumber}.) {e}
            </div>
            <div className={styles.optionCont}>
              {questionAnswers.includes(" | ")
                ? questionAnswers
                    .split(" | ")[i].split(" , ")
                    .map((option) => {
                      return (
                        <AuditAnswers answers={option} key={`${i} ${option}`} />
                      );
                    })
                : questionAnswers.split(" , ").map((option) => {
                    return (
                      <AuditAnswers answers={option} key={`${i} ${option}`} />
                    );
                  })}
            </div>
          </div>
        );
      })}
    </div>
  );
}


export default AuditQuestions;
