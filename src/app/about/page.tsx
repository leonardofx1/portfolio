import { TsParticles } from "@/components/TsparticlesComponent/tsparticles";
import styles from "./styles.module.scss";
import Image from "next/image";
import leo from "@/assets/leo.png";
import anki from "@/assets/anki.png";

export default function About() {
  return (
    <main className={styles.main}>
      <TsParticles />
      <section className={styles.wrapperAbout}>
        <article className={styles.containerImg}>
          <div className={styles.wrapperImg}>
       
            <Image src={leo} alt="minha foto." />
          </div>
          <p>
            Olá! Meu nome é <span>Leonardo</span> e sou{" "}
            <span>desenvolvedor Full Stack.</span>
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na
            <span>UNOPAR</span>, onde estou aprimorando minhas habilidades e
            conhecimentos em desenvolvimento de software.
          </p>
        </article>

        <article className={styles.wrapperAnkiImg}>
          <h3>Método de estudo.</h3>

          <div>
            <Image
              className={styles.imgAnki}
              src={anki}
              alt="aplicativo anki."
            />
            <p>
              Utilizo ferramentas de revisão espaçada, como o <span>Anki</span>, para
              garantir que o conhecimento técnico seja constantemente aprimorado
              e aplicado de forma eficiente em projetos práticos. Isso me
              permite não apenas reter o conteúdo, mas também evoluir
              continuamente como <span>desenvolvedor Full Stack</span>, com mais de
              <span>4.000</span>
               revisões realizadas até o momento.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
