"use client"
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="font-mono space-y-4 flex flex-col break-all justify-center items-center text-center min-h-screen">
      <label>texto: {input}</label>
      <input onChange={handleInputChange} />
      <button onClick={() => alert(input)}>Botão</button>
    </div>
  );
}
