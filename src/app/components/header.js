export default function Header () {
    return (
      <header className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center mb-4">
            React / Next / Tailwind projeto v1
          </h1>
          <nav>
            <ul className="flex justify-center w-full">
              <li className="flex-grow text-center">
                <a href="/" className="hover:no-underline block hover:font-bold transition duration-900 ease-in-out hover:text-black hover:underline ">
                  Home
                </a>
              </li>
              <li className="flex-grow text-center">
                <a href="/exercicios" className="hover:no-underline block hover:font-bold transition duration-900 ease-in-out hover:text-black hover:underline ">
                  Exercicios
                </a>
              </li>
              <li className="flex-grow text-center">
                <a href="/testes" className="hover:no-underline block hover:font-bold transition duration-900 ease-in-out hover:text-black hover:underline ">
                  Área de testes
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };