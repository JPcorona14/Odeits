import React, { useState } from "react";
import styles from "./AuditAnswers.module.css";

export default function AuditAnswers(props) {
  const [selected, setSelected] = useState(false);

  function selectedHandler() {
    selected ? setSelected(false) : setSelected(true);
  }

  return (
    <div
      className={`${styles.answerCont} ${
        selected ? styles.selectedCont : styles.notSelectedCont
      }`}
      onClick={selectedHandler}
    >
      {props.answers}
    </div>
  );
}
