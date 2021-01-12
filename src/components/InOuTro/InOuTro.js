import styles from "./inoutro.module.css";

export function InOuTro({ title, src }) {
  return (
    <main class={styles.main}>
      <h1>{title}</h1>
      <img alt="gif" src={src} />
    </main>
  );
}
