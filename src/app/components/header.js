"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "Exercicios", url: "/exercicios" },
    { name: "Área de testes", url: "/testes" },
  ];

  return (
    <header className="flex flex-row font-mono bg-gradient-to-r from-blue-500 to-black text-white">
      <div className="relative w-32 h-32 flex justify-end items-center flex-grow hidden sm:flex">
        <a href="https://next-50-exercicios.vercel.app/">
          <Image
            src="/images/logo.png"
            alt="logo"
            className=""
            width="50"
            height="50"
            style={{ width: "auto", height: "auto" }} // Manter a proporção
            loading="eager"
          />
        </a>
      </div>

      <div className="flex flex-col items-center flex-grow container">
        <h1 className="flex items-center flex-grow text-2xl text-center">
          <p className="hidden sm:block">
            <a
              className="hover:underline hover:text-blue-500"
              href="https://react.dev/"
            >
              React
            </a>{" "}
            /&nbsp;
            <a
              className="hover:underline hover:text-blue-500"
              href="https://nextjs.org/"
            >
              Next
            </a>{" "}
            /&nbsp;
            <a
              className="hover:underline hover:text-blue-500"
              href="https://tailwindcss.com/"
            >
              Tailwind
            </a>{" "}
            projeto v1.0
          </p>

          
          <p className="sm:hidden">
            <a
              className="hover:underline hover:text-blue-500"
              href="https://react.dev/"
            >
              R
            </a>{" "}
            /&nbsp;
            <a
              className="hover:underline hover:text-blue-500"
              href="https://nextjs.org/"
            >
              N
            </a>{" "}
            /&nbsp;
            <a
              className="hover:underline hover:text-blue-500"
              href="https://tailwindcss.com/"
            >
              T
            </a>{" "}
            projeto v1.0
          </p>
        </h1>
        <nav className="w-full">
          <ul className="hidden sm:flex flex-row justify-end w-full">
            {menuItems.map((item, index) => (
              <li key={index} className="flex-grow text-center">
                <a
                  href={item.url}
                  className="p-2 hover:no-underline block transition duration-500 ease-in-out hover:text-black border-b-4 border-transparent hover:border-black"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex justify-center flex-col items-center relative z-50">
            
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:no-underline block transition duration-500 ease-in-out hover:text-black"
            >
              Menu ▼
            </button>
            <div>
              {menuOpen && (
                <ul className="absolute bg-white text-black mt-2 w-48 border rounded shadow-lg">
                  {menuItems.map((item, index) => (
                    <li key={index} className="border-b">
                      <a
                        href={item.url}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
