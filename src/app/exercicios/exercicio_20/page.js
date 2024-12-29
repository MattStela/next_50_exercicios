import React from "react";
export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center items-center min-h-screen break-all">
      <title>Exercício 20</title>
      <div className="w-1/2">
        <h1>
          20. SSR com Apollo Server <br></br>
          <br></br> Configure o servidor Apollo para fazer SSR (Server-Side
          Rendering) de consultas GraphQL.
        </h1><br></br>
        <p>
          A estrutura simples desse projeto não permite fazer isso, pois eu
          estou renderizando muitas outras coisas do lado do client, que
          deixariam de funcionar e causariam outros problemas se renderizasse do lado do servidor, mas eu entendi a funcionalidade disso, que é pré renderizar as páginas do lado do servidor antes de renderizar do lado do client
        </p>
        <br></br>
      </div>
    </div>
  );
}
