import Image from "next/image";
import styles from "./styles.module.scss";
import fxmoney from "@/assets/fxmoney.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Project() {
  return (
    <main className={styles.main}>
      <h3>Projetos </h3>

      <section className={styles.wrapperProjects}>
        <div>
          <article className={styles.wrapperCard}>
            <section className={styles.cardHeader}>
              <Image src={fxmoney} alt="projeto fxmoney" />
            </section>
            <h2>Fxmoney</h2>
          </article>
        </div>
      
        <div>
          <article className={styles.wrapperCard}>
            <section className={styles.cardHeader}>
              <Image src={fxmoney} alt="projeto fxmoney" />
            </section>
            <h2>
              Fxmoney <FaArrowRight />
            </h2>
          </article>
        </div>
        <div>
          <article className={styles.wrapperCard}>
            <section className={styles.cardHeader}>
              <Image src={fxmoney} alt="projeto fxmoney" />
            </section>
            <h2>
              Fxmoney <FaArrowRight />
            </h2>
          </article>
        </div>
        <div>
          <article className={styles.wrapperCard}>
            <section className={styles.cardHeader}>
              <Image src={fxmoney} alt="projeto fxmoney" />
            </section>
            <h2>
              Fxmoney <FaArrowRight />
            </h2>
          </article>
        </div>
        <div>
          <article className={styles.wrapperCard}>
            <section className={styles.cardHeader}>
              <Image src={fxmoney} alt="projeto fxmoney" />
            </section>
            <h2>
              Fxmoney <FaArrowRight />
            </h2>
          </article>
        </div>
      </section>
    </main>
  );
}
