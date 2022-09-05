import React, { useState } from "react";
import OditLogoDark from "../components/OditLogoDark";
import styles from "./LoginPage.module.css";

export default function LoginPage(props) {
  const [userName, setUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [improperLogin, setImproperLogin] = useState(false);
  const [properLogin, setProperLogin] = useState(true);
  const [properPW, setProperPW] = useState(true);

  function checkLogin() {
    if (userName.length < 6 || userName.length === 0) {
      setProperLogin(false);
    } else {
      setProperLogin(true);
    }
    if (loginPassword.length < 6 || loginPassword.length === 0) {
      setProperPW(false);
    } else {
      setProperPW(true);
    }
  }

  function verifyLogin() {
    if (userName === "OdeitsAdmin" && loginPassword === "Password") {
      props.loginVerified(true);
    } else {
      checkLogin();
      setImproperLogin(true);
      props.loginVerified(false);
    }
  }

  return (
    <div className={styles.mainPage}>
      <div className={styles.loginContainer}>
        <form className={styles.loginList} onSubmit={(e) => e.preventDefault()}>
          <OditLogoDark className={styles.logoContainer} />
          {improperLogin && (
            <div className={styles.mainLoginErr}>
              Username or Password incorrect
            </div>
          )}
          <div className={styles.entryCont}>
            <label>
              <div>Username:</div>
              <input
                name="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
              ></input>
              {!properLogin && (
                <div className={styles.loginErr}>
                  Please Enter a proper Login
                </div>
              )}
            </label>
          </div>
          <div className={styles.entryCont}>
            <label>
              <div>Password:</div>
              <input
                name="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                type="password"
              ></input>
              {!properPW && (
                <div className={styles.loginErr}>
                  Please use a proper password
                </div>
              )}
            </label>
          </div>
          <button
            type="submit"
            onClick={verifyLogin}
            className={styles.submitBtn}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
