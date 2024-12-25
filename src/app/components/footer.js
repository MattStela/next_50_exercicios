import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-black p-4 text-white font-mono">
      <div className="container mx-auto flex flex-row space-x-4 items-center justify-center">
        <a href="https://github.com/MattStela">
          <Image
            src="/images/github-mark.png"
            alt="Logo"
            width={25}
            height={25}
            loading="eager"
          />
        </a>
        <a href="https://www.linkedin.com/in/malvetela/">
          <Image
            src="/images/In-Blue-128.png"
            alt="Logo"
            width={25}
            height={25}
            loading="eager"
          />
        </a>
      </div>
    </div>
  );
}
