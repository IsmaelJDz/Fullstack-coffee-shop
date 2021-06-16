import React from "react";
import Image from "next/image";

import styles from "./info.module.scss";

const Info = () => {
  return (
    <section className={styles.search}>
      <div className={styles.searchInformation}>
        <h2>BUSCADOR DE CAFÉ</h2>
        <p>
          Nuestros maestros cafeteros han destilado años de
          conocimientos sobre sabores en tres sencillas preguntas para
          ayudarle a encontrar ese café que de seguro le encantará.
        </p>
        <div className={styles.searchFirstSteps}>
          <a href="/">Primeros pasos &gt;&gt;</a>
        </div>
        <div className={styles.searchCoffees}>
          <a href="/">Examina todos los cafés &gt;&gt;</a>
        </div>
      </div>
      <div className="Search-image">
        <Image
          src="/img/heartCoffee.png"
          alt="Coffee"
          width="500"
          height="500"
        />
        {/* <img rc={coffeeHome} salt='coffee' className='image' /> */}
      </div>
    </section>
  );
};

export default Info;
