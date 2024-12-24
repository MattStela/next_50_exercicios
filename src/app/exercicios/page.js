import fs from 'fs';
import path from 'path';
import CustomButton from "../components/button";


const exercicios = Array.from({ length: 50 }, (_, i) => i + 1);

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16">
      <main className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 items-center sm:items-start">
        {exercicios.map((num) => {
          const exercicioPath = path.join(process.cwd(), `src/app/exercicios/exercicio_${num}`);
          if (fs.existsSync(exercicioPath)) {
            const formattedNum = num.toString().padStart(2, '0'); // Adicione um zero à esquerda para números de 1 a 9
            return <CustomButton key={num} destination={`/exercicios/exercicio_${num}`} label={`Exercicio ${formattedNum}`} />;
          }
          return null;
        })}
      </main>
    </div>
  );
}