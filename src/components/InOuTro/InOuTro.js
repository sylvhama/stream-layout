import styles from "./inoutro.module.css";

export function InOuTro({ title, src }) {
  return (
    <main class={styles.main}>
      <h2>{title}</h2>
      <img alt="gif" src={src} />
    </main>
  );
}
