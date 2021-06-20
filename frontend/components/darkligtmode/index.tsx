import React from "react";

import styles from "./darklight.module.scss";

const DarkLightMode = () => {
  return (
    <div className={styles.themeSwitchWrapper}>
      <span id="toggle-icon">
        <i className="fas fa-sun"></i>
      </span>
      <label className={styles.themeSwitch}>
        <input type="checkbox" />
        <div className={styles.slider + " " + styles.round}></div>
      </label>
    </div>
  );
};

export default DarkLightMode;
