import styles from "./styles.module.scss";

export const ShowTecs = ({ tecs }: { tecs: string[] }) => {
  return (
    <section className={styles.containerTecs}>
      {tecs.map((item, index) => {
        if (index === tecs.length - 1) {
          return <span key={item}>{item}.</span>;
        }
        return <span key={item}> {item}, </span>;
      })}
    </section>
  );
};
