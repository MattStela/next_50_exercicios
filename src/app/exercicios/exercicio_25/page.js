export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center items-center min-h-screen break-all">
      <div className="w-3/4 mt-10 mb-10 space-y-4">
        <title>Exercício 25</title>
        <h1>
          25. Adicionar Typescript<br></br>
          Adicione suporte a TypeScript ao seu projeto Next.js.
        </h1>

        <div>
          <h1 className="text-red-400 text-2xl">Passo 1:</h1>
          <p>
            Para fazer isso, primeiro é necessário instalar as dependências
            <br />
            <br />
            com npm...
          </p>
          <code>
            npm install --save-dev typescript @types/react @types/node<br></br>
            ou com yarn...<br></br>
            add --dev typescript @types/react @types/node
          </code>
        </div>
        <div>
          <h1 className="text-red-400 text-2xl">Passo 2:</h1>
          <p>
            O Next.js automaticamente detecta se você tem um arquivo
            tsconfig.json no seu projeto. Se você não tem esse arquivo, você
            pode criá-lo executando o seguinte comando:
          </p>
          <br></br>
          <code>npx tsc --init</code>
        </div>
        <div>
          <h1 className="text-red-400 text-2xl">Passo 3:</h1>
          <p>
            No arquivo tsconfig.json, você pode configurar suas preferências do
            TypeScript. Um exemplo básico de configuração pode ser o seguinte:
          </p>
          <pre className="text-left">
            <code>
              {` 
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

          `}
            </code>
          </pre>
        </div>
        <div>
          <h1 className="text-red-400 text-2xl">Passo 4:</h1>
          <p>
            Agora você pode renomear seus arquivos .js para .ts ou .tsx e o
            TypeScript irá compilar automaticamente o código.
          </p>
        </div>
        <div>
          <p className="text-gray-400">
            Eu não tenho vontade de fazer isso nesse projeto, porquê já tem muitos arquivos em extensão .js, trocar tudo seria muito trabalhoso e por isso eu pesquisei e fiz em um projeto a parte da forma que está descrita acima
          </p>
        </div>
      </div>
    </div>
  );
}
