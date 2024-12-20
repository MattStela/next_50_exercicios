import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="border p-10">
        <div>
          eu do passado: Ta pedindo vercel, mas vou usar o github pages<br></br>
          <br></br>
          eu do futuro: Descobri que deploy com github pages não funciona quando
          se fala de next, porquê não tem index.html, tem que buildar antes se
          quiser usar o github pages, então... voltando a primeira idéia, eu
          tive muita dificuldade pra configurar o vercel, porquê precisa ter
          tudo no github na branch main, e eu não sabia dar merge ainda mas tudo
          está resolvido e solucionado com a ajuda do meu amigo Copilot<br></br>
          <br></br>
          <p>eis o link: </p>
          <a
            href="https://next-50-exercicios.vercel.app/"
            className="underline  hover:text-blue-500"
          >
            Site Online no Vercel
          </a>
          <br></br><br></br>
          <p>
            tem também o github pages, que não mostra o site de verdade, mas
            mostra o readme, já que não tem index.html (o que é muito legal)
          </p>
          <a
            href="https://mattstela.github.io/next_50_exercicios/"
            className="underline  hover:text-blue-500"
          >
            Github Pages
          </a>
        </div>
      </div>
    </main>
  );
}
