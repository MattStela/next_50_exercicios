"use client"
import React, { useEffect, useState } from "react";
import MinhaImagem from "@images/panda_gato.jpg";
import Image from "next/image";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevents server-side rendering issues
  }

  return (
    <div className="flex flex-col justify-center text-center items-center min-h-screen break-all">
      
      <div className="w-3/4 mt-10 mb-10 space-y-4">
        <h1>
          21. Configurando Paths Absolutos <br></br> Configure paths absolutos
          para importações mais limpas e organizadas.
        </h1>
        <ol className="space-y-4">
          <li>
            Crie ou atualize o arquivo jsconfig.json na raiz do seu projeto.
          </li>
          <li>
            <pre className="text-left">
              <code>
                {`
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["components/*"],
      "@lib/*": ["lib/*"]
    }
  }
}
`}
              </code>
            </pre>
          </li>
          <li>
            <p>Agora você pode usar os paths absolutos nas suas importações.</p>
            <br></br>
            <pre>
              {`import Header from '@components/Header';
import { fetchData } from '@lib/api';
`}
            </pre>
          </li>
          <li>
            <p>
              na prática... se eu configurar o arquivo jsconfig.json pra me dar
              uma url absoluta de imagens...
            </p>
            <p>ficaria assim, na configuração do meu repositório:</p>
            <pre className="text-left">
              <code>
                {`
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@components/*": ["components/*"],
      "@lib/*": ["lib/*"],
      `}
                <span className="text-red-400">{`"@images/*": ["../public/images/*"]`}</span>
                {`
    }
  }
`}
              </code>
            </pre>
          </li>
          <li>
            <p>a estrutura do projeto deveria ser assim, nesse caso:</p>
          </li>
          <li>
            <pre className="text-left">
              {`
seu-projeto/
├── public/
│   ├── images/
│   │   └── sua-imagem.jpg
├── src/
│   ├── components/
│   │   └── SeuComponente.js
├── jsconfig.json

              `}
            </pre>
          </li>
          <li>
            e agora você pode importar imagens com o @alias que definiu no
            arquivo jsconfig.json:
          </li>
          <li>
            <pre className="text-left">
              {`
import React from 'react';
`}
              <span className="text-red-400">{`import MinhaImagem from '@images/panda_gato.jpg';
import Image from "next/image";`}</span>
              
              {`
function MeuComponente() {
  return (
    <div>
      <Image
        src={MinhaImagem}
        alt="Descrição da Imagem"
        width={500}
        height={500}
      />
    </div>
  );
}

export default MeuComponente;

            `}
            </pre>
          </li>
          <li className="flex flex-col items-center">
            {isClient && (
              <Image
                src={MinhaImagem}
                alt="Descrição da Imagem"
                width={500}
                height={500}
                loading="eager"
              />
            )}
          </li>
          <li>
            <p>eu ainda tive que ativar o parâmetro unoptimized: true na configuração de imagens do Next.js (next.config.js) e desativar a otimização automática de imagens. Isso significa que as imagens serão servidas como estão, sem qualquer processamento ou compressão adicional pelo Next.js. Tudo isso por causa de erros persistentes no console que deixavam o carregamento lento, provavelmente isso não é recomendado. De qualquer forma isso reduz o processamento de imagem e a lentidão consequente</p>
          </li>
        </ol>
        <br></br>
      </div>
    </div>
  );
}
