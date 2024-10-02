
import styles from "./styles.module.scss";

import t from "@/assets/t.png";
import { CardProject } from "./ProjectCard";

export default function Project() {
  return (
    <main className={styles.main}>
      <h3>Projetos </h3>

      <section className={styles.wrapperProjects}>
       <CardProject imgSrc={t} link="o"  title="oi"/>
      </section>

      
    </main>
  );
}
