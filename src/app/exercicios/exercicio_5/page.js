export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      fazer um header? toma seu header
      <main className="w-3/4 h-3/4 border flex flex-col gap-8 row-start-2 ">
        <nav className="m-2 border border-red-500 p-2 text-center items-center justify-center">
          <ul className="flex flex-row ">
            <li className="flex-grow">
              <a href="">Página1</a>
            </li>
            <li className="flex-grow">
              <a href="">Página2</a>
            </li>
          </ul>
        </nav>
        <div className="text-center justify-items-center">conteúdo</div>
      </main>
    </div>
  );
}
