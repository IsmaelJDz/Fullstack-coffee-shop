import React from "react";

import styles from "./about.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutCoffee}>
        <h2>CÓMO ELABORAR CAFÉ</h2>
        <p className={styles.aboutTexts}>
          Es sorprendente cómo los distintos métodos de elaboración
          pueden realzar características concretas de su café.
          Ayúdenos a explotar todo el potencial de su café, para que
          cada taza sea perfecta.
        </p>
      </div>
    </section>
  );
};

export default About;
