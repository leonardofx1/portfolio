import Image, { StaticImageData } from "next/image";
import styles from "../styles.module.scss";
import * as motion from "framer-motion/client";
import Link from "next/link";
interface CardProps {
  link: string;
  imgSrc: StaticImageData;
  title: string;
}

export const CardProject = ({ imgSrc, link, title }: CardProps) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link href={link} className={styles.wrapperCard}>
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
      </Link>
    </motion.div>
  );
};
