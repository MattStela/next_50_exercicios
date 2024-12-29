import Image from "next/image";

export default function Footer({ onClick, darkMode }) {
  return (
    <div
      className={`bg-gradient-to-t ${
        darkMode ? "from-blue-500 to-blue-950" : "from-blue-500 to-blue-100"
      } text-white font-mono`}
    >
      <div className="flex space-x-4 flex-row items-center justify-center">
        <a href="https://github.com/MattStela">
          <Image
            src="/images/github-mark.png"
            alt="Logo"
            width={25}
            height={25}
            loading="eager"
          />
        </a>
        <div className="flex flex-row justify-center items-end w-[70px] h-[70px]">
          <a onClick={onClick}>
            <Image
              src="/images/espiando.png"
              alt="espiando.png"
              width={50}
              height={50}
              loading="eager"
              className="object-contain w-full h-full"
              style={{ width: 'auto', height: 'auto' }}
            />
          </a>
        </div>
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
