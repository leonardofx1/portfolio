import Link from "next/link";
import styles from "./styles.module.scss";
export const Header = () => {
  return (
    <header className={styles.headerBody}>
      <h1>Dev Fullstack</h1>
      <nav>
        <ul className={styles.headerList}>
          <li className={styles.active}>
            <Link href={""}>Contatos</Link>
          </li>
          <li> Inicio</li>
          <li> <Link href="./about">Sobre</Link></li>
          <li>Projetos</li>
        </ul>
      </nav>
    </header>
  );
};
