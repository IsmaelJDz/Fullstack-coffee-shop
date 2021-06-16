import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
  const showModal = () => {};

  return (
    <header className={styles.header}>
      <figure>
        <Image
          src="/img/logo.png"
          alt="logo"
          width="180px"
          height="80"
        />
      </figure>
      <nav className={styles.headerMenu}>
        <ul>
          <li>Inicio</li>
          <li>Menú</li>
          <li>Tiendas</li>
          <li>Conócenos</li>
        </ul>
      </nav>
      <div className="Header-user">
        <button
          className={styles.headerButton}
          onClick={() => showModal()}
        >
          Iniciar sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
