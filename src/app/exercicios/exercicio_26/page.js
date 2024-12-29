export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center items-center min-h-screen break-all">
      <title>Exercício 26</title>
      <div className="w-3/4 mt-10 mb-10 space-y-4">
        <div>
          <h1>26. Formulários com Formik e Yup</h1>
          <p>
            Implemente formulários utilizando Formik para gerenciamento de
            estado e Yup para validação.
          </p>
        </div>
        <div className="w-1/2 mx-auto">
          <form action="#" method="POST">
            <div class="mb-4">
              <label
                for="name"
                class="block text-gray-500 text-sm font-bold mb-2"
              >
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite seu nome completo"
              ></input>
            </div>
            <div class="mb-4">
              <label
                for="email"
                class="block text-gray-500 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite seu email"
              ></input>
            </div>
            <div class="mb-4">
              <label
                for="password"
                class="block text-gray-500 text-sm font-bold mb-2"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Digite sua senha"
              ></input>
            </div>
            <div class="mb-6">
              <label
                for="confirm-password"
                class="block text-gray-500 text-sm font-bold mb-2"
              >
                Confirme a Senha
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirme sua senha"
              ></input>
            </div>
            <div class="flex items-center justify-center">
              <button
                type="submit"
                class="rounded-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>

        <p>eu tenho que estudar formik e yup, provavelmente vai ser só ano que vem</p>
      </div>
    </div>
  );
}
