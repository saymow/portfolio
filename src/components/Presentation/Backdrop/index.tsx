import styles from "./backdrop.module.css";

const Backdrop = () => {
  return (
    <div className={styles.container}>
      {new Array(20).fill(0).map((_, idx) => (
        <span key={idx}></span>
      ))}
    </div>
  );
};

export default Backdrop;
