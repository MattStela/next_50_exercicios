"use client"
import { useState } from 'react';

export default function Home() {
  const [catFact, setCatFact] = useState('Descubra um fato aleatório sobre gatos!');

  const pressButton = async () => {
    try {
      const response = await fetch('https://meowfacts.herokuapp.com/');
      const data = await response.json();
      setCatFact(data.data[0]);  // Ajustando para o formato desta API
    } catch (error) {
      console.error('Erro ao buscar o fato:', error);
      setCatFact('Erro ao buscar o fato. Tente novamente.');
    }
  };

  return (
    <>
      <main className="grid min-h-screen space-x-4 flex items-center justify-center">
        <form onSubmit={(e) => { e.preventDefault(); pressButton(); }} className="p-4 border flex flex-col text-center items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 w-60 h-auto">
          <p>{catFact}</p>
          <br />
          <button type="submit" className="bg-red-600 rounded-3xl p-2">Me clique!</button>
        </form>
      </main>
    </>
  );
}
