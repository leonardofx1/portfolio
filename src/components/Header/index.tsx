"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import * as motion from "framer-motion/client";
export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [keyFramer, setKeyFramer] = useState(0);
  const handleOpenClosedMenu = () => {
    setKeyFramer((states) => states + 1);
    setShowMenu((state) => !state);
  }
  return (
    <header className={styles.headerContainer}>
      <h1>Dev Fullstack</h1>
      <nav className={styles.nav}>
        <motion.ul
          key={keyFramer}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={`${showMenu ? styles.show : styles.headerList}`}
        >
           <motion.li
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link href="/"  onClick={
                handleOpenClosedMenu
              }>Inicio</Link>
          </motion.li>

             <motion.li
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link href="./about"  onClick={
                handleOpenClosedMenu
              }>Sobre</Link>
          </motion.li>
          <motion.li
            initial={{ y: 220, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link className="focused" href="./project"  onClick={
                handleOpenClosedMenu
              }>
              Projetos
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
           className={styles.close}>
            <IoMdClose
              onClick={
                handleOpenClosedMenu
              }
            />
          </motion.li>
        </motion.ul>
      </nav>
      <div className={styles.menu}>
        <LuMenu
          onClick={
            handleOpenClosedMenu}
        />
      </div>
    </header>
  );
};
