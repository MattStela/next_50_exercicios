import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <title>Exercício 3</title>
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <p>usando css modules...</p>
        <button className={styles.button}>Um botão estiloso</button>
      </main>
    </div>
  );
}
