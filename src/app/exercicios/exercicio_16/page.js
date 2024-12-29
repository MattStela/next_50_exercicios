import Link from "next/link";

export default function Home() {
  return (
    <main className="break-all min-h-screen flex items-center justify-center">
      <title>Exercício 16</title>
      <div className="p-10">
        <div className="max-w-2xl mx-auto">
          <p>
            16. Redirecionamentos e Rewrites / Configure redirecionamentos e
            rewrites no arquivo next.config.js.
          </p>
          <br />
          <p>
            Redirecionamentos e rewrites são técnicas usadas para manipular URLs
            em aplicações web.
          </p>
          <p>
            Redirecionamentos enviam o usuário de uma URL para outra, enquanto
            rewrites mapeiam uma URL para outra sem alterar a URL exibida no
            navegador.
          </p>
          <p>
            Veja abaixo exemplos de redirecionamento e rewrite configurados no
            arquivo next.config.mjs na raíz desse projeto:
          </p>
          <pre className="text-xs sm:text-base"> 
            {`
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true, // Define se o redirecionamento é permanente (301) ou temporário (302)
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/masked-page',
        destination: '/actual-page',
      },
    ];
  },
};

export default nextConfig;
            `}
          </pre>
          <br />
          <Link className="underline hover:text-blue-500" href="/old-page">
            Teste Redirecionamento
          </Link>
          <br />
          <Link className="underline hover:text-blue-500" href="/masked-page">
            Teste Rewrite
          </Link>
        </div>
      </div>
    </main>
  );
}
