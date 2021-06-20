import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";

import DarkLightMode from "../darkligtmode";

const Header = () => {
  const [isOpen, toggleMenuState] = useState(false);

  const handleClick = () => toggleMenuState(!isOpen);
  const closeMobileMenu = () => toggleMenuState(false);

  const showModal = () => {};

  return (
    <header className={styles.header}>
      <Link href="/">
        <a onClick={closeMobileMenu} className={styles.anchor}>
          <figure>
            <Image
              src="/img/logo.png"
              alt="logo"
              width="180px"
              height="80"
            />
          </figure>
        </a>
      </Link>

      <nav className={styles.headerMenu}>
        <ul
          className={
            isOpen
              ? styles.navMenu + " " + styles.active
              : styles.navMenu
          }
        >
          <li className={styles.navItem} onClick={closeMobileMenu}>
            <a href="" className={styles.navLinks}>
              Inicio
            </a>
          </li>
          <Link href="/">
            <li className={styles.navItem}>
              <a href="" className={styles.navLinks}>
                Menú
              </a>
            </li>
          </Link>
          <li className={styles.navItem}>
            <a href="" className={styles.navLinks}>
              Tiendas
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="" className={styles.navLinks}>
              Conócenos
            </a>
          </li>
        </ul>
      </nav>
      {/* <div className={styles.headerUser}>
        <button
          className={styles.headerButton}
          onClick={() => showModal()}
        >
          Iniciar sesión
        </button>
      </div> */}
      {/* <DarkLightMode /> */}
      <div className={styles.menuIcon} onClick={handleClick}>
        <i className={isOpen ? "fas fa-times" : "fas fas fa-bars"} />
      </div>
    </header>
  );
};

export default Header;
