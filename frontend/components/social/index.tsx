import React from "react";

import styles from "./social.module.scss";

const Social = () => {
  return (
    <section className={styles.social}>
      <div className={styles.socialContainer}>
        <i className={"fab fa-facebook-f" + " " + styles.icon}></i>
        <i
          className={"fab fa-twitter-square" + " " + styles.icon}
        ></i>
        <i className={"fab fa-instagram" + " " + styles.icon}></i>
      </div>
    </section>
  );
};

export default Social;
