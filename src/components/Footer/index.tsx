import styles from "./styles.module.scss";

import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <ul className={styles.wrapperNetwork}>
          <li>
            <FaGithub />
          </li>
          <li>
            <TiSocialLinkedin />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </section>
      <section>
        <h3> Leonardo Nunes Freitas </h3>
      </section>
    </footer>
  );
};
