import Link from "next/link";

export default function Home() {
  return (
    <main className="p-20 border border-pink-500 min-h-screen flex flex-col items-center justify-center">
      <p>
        O Next.js espera que todas as rotas sejam definidas dentro do diretório
        pages que está localizado na raiz do projeto. Portanto, não é possível
        criar um outro diretório pages fora desse escopo e esperar que ele
        funcione da mesma maneira. Ele utiliza o diretório pages para
        gerar automaticamente as rotas da aplicação, e qualquer arquivo ou pasta
        dentro desse diretório se torna uma rota acessível. logo... tive que
        colocar o diretório pages na raíz
      </p><br></br>

      <Link className="underline hover:text-blue-500" href="/about">Clique em mim</Link>
    </main>
  );
}
