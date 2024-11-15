import Image, { StaticImageData } from "next/image";
import styles from "../styles.module.scss";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { ShowTecs } from "./ShowTecs";
interface CardProps {
  linkSite?: string;
  linkRepository?: string;
  imgSrc: StaticImageData;
  title: string;
  description: string;
  frontEndTecs?: string[];
  backEndTecs?: string[];
  hosting:string
}

export const CardProject = ({
  imgSrc,
  linkRepository = "",
  linkSite = "",
  title,
  description,
  frontEndTecs,
  backEndTecs,
  hosting
}: CardProps) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.wrapperCard}>
        <section className={styles.wrapperImg}>
          <Image unoptimized src={imgSrc} alt="title" />
        </section>
        <motion.h2
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.description}
        >
          {description}
        </motion.p>
        {!!frontEndTecs?.length && (
          <motion.div className={styles.containerTecs}>
            <span>Front-End :</span> <ShowTecs tecs={frontEndTecs} />
          </motion.div>
        )}
        {!!backEndTecs?.length && (
          <motion.div className={styles.containerTecs}>
            <span>Back-End :</span> <ShowTecs tecs={backEndTecs} />
          </motion.div>
        )}
        {hosting?.length && (
          <motion.div className={styles.containerTecs}>
            <span>Hospedagem:</span> {hosting}
          </motion.div>
        )}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.wrapperBtn}
        >
          {!!linkSite.length && (
            <Link href={linkSite} target="_blank" className={styles.site}>
              Ir para o Site
            </Link>
          )}
          {!!linkRepository.length && (
            <Link
              href={linkRepository}
              target="_blank"
              className={styles.repository}
            >
              Ir para o Repositório
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
