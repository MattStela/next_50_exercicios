export default function About() {
  return (
    <>
      <div className="items-center justify-center justify-items-center min-h-screen border border-pink-500 flex flex-col">
        <div className="border border-blue-500 w-3/4">
          <h1>Olha a rota ali</h1>
          <p>essa página está no diretório pages, em src - pages</p>
          <p>
            Acontece que... eu estou usando uma estrutura de diretórios
            diferente, então não posso usar essa pasta pages e esperar que o
            next reconheça a rota dinâmica
          </p>
          <p>
            eu quebrei a cabeça horas tentando entender isso, mas já saquei que
            o pages é onde coloca as páginas, farei melhor na próxima vez
          </p>
          <p>
            a parte legal é que eu aprendi a renderizar o componente header e
            footer, colocando eles na pasta components e fora do contexto da
            raíz do projeto
          </p>
          <p>não sei tu, eu achei muito legal, deixa essa pra próxima</p>
        </div>
      </div>
    </>
  );
}
