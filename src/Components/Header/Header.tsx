import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.divh}>
        <span>CONVERSOR DE NÚMEROS ROMANOS E VICE-VERSA</span>
      </div>
    </header>
  );
}
