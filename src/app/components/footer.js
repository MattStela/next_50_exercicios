import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-black p-4 text-white font-mono">
      <div className="container mx-auto flex items-center justify-center">
        <a href="https://github.com/MattStela">
          <Image
            src="/images/github-mark.png" // Caminho para a imagem da logo
            alt="Logo"
            width={25} // Largura da imagem
            height={25} // Altura da imagem
            priority // Carregar a imagem imediatamente
          />
        </a>&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/malvetela/">
          <Image
            src="/images/In-Blue-128.png" // Caminho para a imagem da logo
            alt="Logo"
            width={25} // Largura da imagem
            height={25} // Altura da imagem
            priority // Carregar a imagem imediatamente
          />
        </a>
      </div>
    </div>
  );
}
