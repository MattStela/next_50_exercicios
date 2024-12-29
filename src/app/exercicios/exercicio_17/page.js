import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <title>Exercício 17</title>
      <div className="flex flex-col justify-center items-center p-10">
        <p>
          17. Imagem Otimizada com next/image / Utilize o componente next/image
          para otimização de imagens.
        </p><br></br><br></br>
        <p>
          O componente <code>next/image</code> do Next.js oferece várias
          otimizações automáticas para imagens:
        </p><br></br>
        <ul>
          <li>Carregamento diferido (lazy loading)</li>
          <li>Redimensionamento automático</li>
          <li>Suporte a formatos modernos como WebP</li>
          <li>Otimização de qualidade</li>
          <li>Placeholder de baixa qualidade (blur-up)</li>
        </ul><br></br>
        <p>
          Veja abaixo um exemplo de como usar o componente{" "}
          <code>next/image</code> com algumas dessas otimizações:
        </p>
        <pre>
          {`
<Image
  src="/images/panda_gato.jpg"
  width={500}
  height={500}
  alt="Um panda conversando com um gatito fofíneo"
/>
          `}
        </pre>
        <br></br>
        <Image
          src="/images/panda_gato.jpg"
          width={500}
          height={500}
          alt="Um panda conversando com um gatito fofíneo"
          loading="eager"
        />
      </div>
    </main>
  );
}
