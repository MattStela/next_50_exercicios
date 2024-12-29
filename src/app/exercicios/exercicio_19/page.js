"use client";
import { useState } from "react";

export default function Home() {
  const [championName, setChampionName] = useState("");
  const [lore, setLore] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchChampionLore = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `/api/champions?championName=${championName}`
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao buscar a lore do campeão");
      }
      const data = await response.json();
      setLore(data.lore || "Lore não encontrada");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <title>Exercício 19</title>
      <div className="w-3/4 p-10">
        <div className="flex text-center flex-col items-center justify-center space-y-5 font-mono">
          <p>19. Criar API Routes <br></br> Crie rotas de API dentro do diretório `pages/api` e faça uma requisição a partir do cliente.</p>
          <div className="flex flex-row">
            <p>
              API requisitada:
              https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion/
              <a className="text-blue-500 hover:underline">NomeAqui</a>.json{" "}
            </p>
          </div>
          <p>coloque o nome do campeão aqui e aperte "confirmar"</p>
          <input
            className="rounded-2xl text-center text-black"
            value={championName}
            onChange={(e) => setChampionName(e.target.value)}
          />
          <button
            className="bg-blue-500 rounded-2xl w-40"
            onClick={fetchChampionLore}
          >
            confirmar
          </button>
        </div>
      </div>
      <div className="w-3/4 p-10">
        <div className="flex flex-col items-center space-y-5 font-mono">
          {loading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p className="text-center">{lore}</p>
          )}
        </div>
      </div>
    </main>
  );
}
