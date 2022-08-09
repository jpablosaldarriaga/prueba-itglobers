import { useState } from "react";
import { NavLink } from "react-router-dom";

import Swal from "sweetalert2";

import styles from "./Navbar.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { info } from "console";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Prueba React</span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <NavLink to="/avianca" className={styles.nav__item}>
              Avianca
            </NavLink>
            <NavLink to="/vivair" className={styles.nav__item}>
              Vivair
            </NavLink>
            <div className={styles.nav__button__container}>
              <Button />
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button />
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

const showModal = () => {
  Swal.fire({
    icon: "info",
    title: "Prueba React",
    text: "Por: Juan Pablo Saldarriaga Valencia",
  });
};

const Button = () => {
  return (
    <button className={styles.button} onClick={showModal}>
      Click me
    </button>
  );
};

export default Navbar;
