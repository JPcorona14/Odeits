import styles from "./MainPage.module.css";
import Menu from "../components/Menu/Menu";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboad from "./Dashboard";
import TeamMembers from "./TeamMembers";
import Audits from "./Audits";
import Organization from "./Organization";
import Reports from "./Reports";
import Settings from "./Settings";
import CurrentAudit from "../components/Audits/CurrentAudit";

export default function MainPage(props) {

    function logOutPress() {
        props.loginVerified(false)
    }

  return (
    <div className={styles.page}>
    <Menu />
    <section className={styles.contentStyle}>
      <Switch>
        <Route path="/Dashboard">
          <Dashboad />
        </Route>
        <Route path="/team_members">
          <TeamMembers />
        </Route>
        <Route path="/audits">
          <Audits />
        </Route>
        <Route path="/organization">
          <Organization />
        </Route>
        <Route path="/reports">
          <Reports />
        </Route>
        <Route path="/" exact>
          <Settings />
        </Route>
        <Route path="/currentAudit">
          <CurrentAudit />
        </Route>
      </Switch>
    </section>
    <button className= {styles.logOut} onClick={logOutPress}>Logout</button>
  </div>
  )
}
