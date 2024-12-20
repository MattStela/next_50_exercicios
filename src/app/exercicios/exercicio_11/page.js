"use client"
import { useState } from 'react';

export default function Home (){

    const [contador, setContador] = useState(0);
    //contador: É a variável de estado que guarda o valor atual.
    //setContador: É a função que você chama para atualizar o valor de contador.
    //0: É o valor inicial do estado.

    return(
        <main className="flex flex-col justify-center space-y-4 items-center min-h-screen">
            <div>{contador > 10 && contador < 30 ? "Eita, já pode parar" : 
            contador > 29 && contador < 50 ? "não adianta nada ficar apertando": 
            contador > 49 && contador < 70 ? "ainda não vai dar em nada isso":
            contador > 69 && contador < 100 ? "então continua apertando, fica á vontade":
            null}</div>
            <div className="border border-pink-500 p-4">
                contador: {contador}
            </div>
            <button onClick={() => setContador(contador + 1)} className="rounded-3xl bg-blue-500 p-2">Aperte aqui!</button>
        </main>
    )
}