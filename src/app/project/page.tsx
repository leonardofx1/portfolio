
import styles from "./styles.module.scss";


import { SwiperContainer } from "@/components/Swiper";

export default function Project() {
  return (
    <main className={styles.main}>
      <h3>Projetos </h3>

      <section className={styles.wrapperProjects}>
     
       <SwiperContainer key={5}/>
      </section>

      
    </main>
  );
}
