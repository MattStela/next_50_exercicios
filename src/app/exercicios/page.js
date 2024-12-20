import CustomButton from "../components/button";

export default function Home() {
  return (
    <div className=" flex items-center justify-center min-h-screen p-8 pb-20 gap-16">
      <main className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 items-center sm:items-start">

      <CustomButton destination="/exercicios/exercicio_2"  label="Exercicio 2"   />
      <CustomButton destination="/exercicios/exercicio_3"  label="Exercicio 3"   />
      <CustomButton destination="/exercicios/exercicio_4"  label="Exercicio 4"   />
      <CustomButton destination="/exercicios/exercicio_5"  label="Exercicio 5"   />
      <CustomButton destination="/exercicios/exercicio_6"  label="Exercicio 6 X" />
      <CustomButton destination="/exercicios/exercicio_7"  label="Exercicio 7"   />
      <CustomButton destination="/exercicios/exercicio_8"  label="Exercicio 8 X" />
      <CustomButton destination="/exercicios/exercicio_10" label="Exercicio 10 x"  />
      <CustomButton destination="/exercicios/exercicio_11" label="Exercicio 11"  />
      <CustomButton destination="/exercicios/exercicio_12" label="Exercicio 12"  />
      </main>
    </div>
  );
}
