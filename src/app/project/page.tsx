import Image from "next/image";
import styles from "./styles.module.scss";

import t from "@/assets/t.png";


export default function Project() {
  return (
    <main className={styles.main}>
      <h3>Projetos </h3>

      <section className={styles.wrapperProjects}>
       
      <div>
          <article className={styles.wrapperCard}>
            <section className={styles.cardHeader}>
              <Image src={t} alt="projeto fxmoney" />
            </section>
            <h2>Fxmoney</h2>
          </article>
        </div>
      </section>
    </main>
  );
}
