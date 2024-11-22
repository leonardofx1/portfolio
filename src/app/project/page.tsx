import desentupidora from "@/assets/desentupidora.png";
import estore from "@/assets/estore.png";
import fxmoney from "@/assets/fxmoney.png";
import { CardProject } from "./ProjectCard";
import styles from "./styles.module.scss";

export default function Project() {
  return (
    <main className={styles.main}>
      <h3>Projetos </h3>

      <section className={styles.wrapperProjects}>
        <CardProject
          title="Fx Money"
          imgSrc={fxmoney}
          linkSite="https://fxmoney.netlify.app/"
          linkRepository="https://github.com/leonardofx1/FxMoney/tree/main/fxmoney"
          description="O objetivo principal da FX Money foi criar uma ferramenta intuitiva e eficiente para gerenciar os gastos pessoais dos usuários."
          frontEndTecs={['React','Typescript','Zod','Styled-components']}
     
          hosting="Netlify"
        />
        <CardProject
          title="Desentupidora Freitas"
          imgSrc={desentupidora}
          linkSite="https://www.desentupidorafreitas.online/"
          description="Projeto Freelancer para a Desentupidora Freitas com o objetivo de atrair mais clientes.Aumentando o faturamento da empresa."
          frontEndTecs={['React','Typescript','Sass']}
       
          hosting="Hostgator"
        />
        <CardProject
          title="Fx estore"
          imgSrc={estore}
          linkSite="https://estore-eight-omega.vercel.app/"
          linkDevelopment="https://github.com/leonardofx1/estore"
          description="O FX estore é uma loja online que desenvolvi como um projeto pessoal para explorar e aprimorar minhas habilidades em desenvolvimento web e e-commerce."
          frontEndTecs={['Nextjs','Typescript','Sass']}
          backEndTecs={['Nodejs','PostgreSql','Drizzle-Orm','Fastify','Typescript']}
          hosting="Vercel"
        />
      </section>
    </main>
  );
}


