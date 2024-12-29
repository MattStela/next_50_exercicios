import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <title>Exercício 24</title>
      <main className="flex flex-col gap-8 row-start-2 ">

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
        Eu sou a prova definitiva que o Tailwind existe </button>
      </main>
    </div>
  );
}
