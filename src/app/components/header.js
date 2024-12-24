import Image from "next/image";

export default function Header() {
  return (
    <header className="pr-20 pl-10  flex flex-row font-mono bg-gradient-to-r from-blue-500 to-black  text-white">
      <div className=" relative w-32 h-32 flex justify-center items-center flex-grow hidden sm:flex">
        <Image
          src="/images/logo.png"
          alt="logo"
          className=""
          width="70"
          height="70"
        />
      </div>

      <div className="  flex  flex-col justify-items items-center flex-grow container mx-auto">
        <h1 className="flex items-center flex-grow  text-2xl text-center">
          <p>
            <a className="hover:underline hover:text-blue-500" href="https://react.dev/">React</a> /&nbsp;
            <a className="hover:underline hover:text-blue-500" href="https://nextjs.org/">Next</a> /&nbsp;
            <a className="hover:underline hover:text-blue-500" href="https://tailwindcss.com/">Tailwind</a> projeto v1.0
          </p>
        </h1>
        <nav className=" w-full">
          <ul className=" flex flex-row justify-end w-full">
            <li className="flex-grow text-center">
              <a
                href="/"
                className="p-2 hover:no-underline block transition duration-500 ease-in-out hover:text-black border-b-4 border-transparent hover:border-black"
              >
                Home
              </a>
            </li>
            <li className="flex-grow text-center">
              <a
                href="/exercicios"
                className="p-2 hover:no-underline block transition duration-500 ease-in-out hover:text-black border-b-4 border-transparent hover:border-black"
              >
                Exercicios
              </a>
            </li>
            <li className="flex-grow text-center">
              <a
                href="/testes"
                className="p-2 hover:no-underline block transition duration-500 ease-in-out hover:text-black border-b-4 border-transparent hover:border-black"
              >
                Área de testes
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
