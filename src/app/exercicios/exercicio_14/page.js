"use client";
import { useState } from 'react';

const usuario = { login: "Login123", senha: "Senha123" };

export default function Home() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (login === "" && senha === "") {
      setMensagem('Vai escrever nada não?');
    } else if (login === usuario.login && senha === usuario.senha) {
      setMensagem('Login bem-sucedido!');
    } else {
      setMensagem('Login ou senha incorretos.');
    }
  };

  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <title>Exercício 14</title>
      <div className="flex flex-col space-y-4 border border-red-500 p-4 w-60 break-words">

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block mb-2">Login: {usuario.login}</label>
            <input 
              type="text" 
              value={login}
              onChange={function(e){setLogin(e.target.value)}}
              className="text-black w-full rounded-xl p-2 border border-gray-300"
              placeholder="Digite seu login"
            />
          </div>
          <div>
            <label className="block mb-2">Senha: {usuario.senha}</label>
            <input 
              type="password" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="text-black w-full rounded-xl p-2 border border-gray-300"
              placeholder="Digite sua senha"
            />
          </div>
          <button type="submit" className="bg-blue-500 rounded-2xl p-2 hover:bg-blue-700">
            Me clique e faça login
          </button>
        </form>
        
        {mensagem && <p className="mt-4 text-red-500">{mensagem}</p>}
      </div>
    </main>
  );
}


