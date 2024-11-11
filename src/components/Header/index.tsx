'use client'
import Link from "next/link";
import styles from "./styles.module.scss";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

import { IoMdClose } from "react-icons/io";
export const Header = () => {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <header className={styles.headerContainer}>
      <h1>Dev Fullstack</h1>
      <nav className={styles.nav}>
        <ul className={`${ showMenu ? styles.show : styles.headerList}`}>
          <li className={styles.active}>
            
            <Link href="/">Inicio</Link>
          </li>

          <li>
            
            <Link href="./about">Sobre</Link>
          </li>
          <li>
            
            <Link href="./project">Projetos</Link>
          </li>
          <li className={styles.close}><IoMdClose onClick={()=> setShowMenu((state) => !state)}/></li>
        </ul>
      </nav>
      <div className={styles.menu}>
        <LuMenu onClick={()=> setShowMenu((state) => !state)}/>
      </div>
    </header>
  );
};
