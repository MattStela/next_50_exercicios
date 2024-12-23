"use client"; // Adicione esta linha para garantir que o código seja executado no cliente

import React, { useState } from "react"; // Certifique-se de importar o React e useState
import { ApolloProvider, useLazyQuery, gql } from "@apollo/client";
import client from "../../apollo-client"; // Ajuste o caminho conforme necessário

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
      emoji
    }
  }
`;

// O GraphQL está sendo usado para consultar uma API pública que fornece informações sobre países.
// O Apollo Client é configurado para se conectar ao endpoint da API GraphQL pública da Countries.
// A consulta GraphQL (GET_COUNTRIES) é usada para obter uma lista de países, incluindo informações como código, nome, capital e emoji de cada país.

function DataComponent({ filter }) {
  const [getCountries, { loading, error, data }] = useLazyQuery(GET_COUNTRIES, {
    variables: { filter },
  });

  React.useEffect(() => {
    if (filter) {
      getCountries();
    }
  }, [filter, getCountries]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching data:", error);
    console.log("Network Error:", error.networkError);
    return (
      <div>
        <p>Error: {error.message}</p>
        <p>Verifique se o endpoint GraphQL está correto e acessível.</p>
        <p>Detalhes do erro: {JSON.stringify(error)}</p>
        <p>Network Error: {JSON.stringify(error.networkError)}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const filteredCountries = data.countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredCountries.map((country) => (
        <li key={country.code}>
          <p>Name: {country.name}</p>
          <p>Capital: {country.capital}</p>
          <p>Emoji: {country.emoji}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleInputChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value === "") {
      setShowResults(false);
    }
  };

  return (
    <ApolloProvider client={client}>
      <main className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col justify-center items-center p-10">
          <p>18. Exemplo de Apollo Client com GraphQL</p>
          <br></br>
          <div>
            <p>
              Este exemplo demonstra como usar o Apollo Client para consultar uma
              API GraphQL.
            </p><br></br>
            <p>
              O Apollo Client é configurado no arquivo{" "}
              <code>apollo-client.js</code> com o endpoint da API GraphQL da Countries e um
              cache em memória.
            </p><br></br>
            <p>
              No componente <code>DataComponent</code>, usamos o hook{" "}
              <code>useLazyQuery</code> para fazer uma consulta GraphQL definida pela
              constante <code>GET_COUNTRIES</code>.
            </p>
            <p>
              O hook <code>useLazyQuery</code> retorna o estado da consulta,
              incluindo <code>loading</code>, <code>error</code> e{" "}
              <code>data</code>. Com base nesses estados, renderizamos o conteúdo
              apropriado.<br></br><br></br>
              Se você entendeu, eu te respeito.
            </p><br></br>
            <p>
              Veja abaixo o código do componente <code>DataComponent</code>:
            </p>
          </div><br></br>

          <form onSubmit={handleSearch} className="flex flex-col items-center">
            <label>digite o nome de um país</label><br></br>
            <input
              type="text"
              placeholder="Digite Brazil, United States, etc."
              value={filter}
              onChange={handleInputChange}
              className="text-black mb-4 p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="mb-4 p-2 bg-blue-500 text-white rounded">
              Buscar
            </button>
          </form>

          {showResults && <DataComponent filter={filter} />}
        </div>
      </main>
    </ApolloProvider>
  );
}




