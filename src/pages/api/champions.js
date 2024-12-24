import axios from 'axios';

export default async function handler(req, res) {
  const { championName } = req.query;

  if (!championName) {
    console.error("Nome do campeão é obrigatório");
    return res.status(400).json({ error: 'Nome do campeão é obrigatório' });
  }

  try {
    const apiUrl = `https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion/${championName}.json`; // Ajuste conforme necessário
    console.log(`Fetching data from: ${apiUrl}`);
    const response = await axios.get(apiUrl);

    const championData = response.data.data[championName];
    if (!championData) {
      return res.status(404).json({ error: 'Campeão não encontrado' });
    }

    console.log("Data fetched successfully");
    return res.status(200).json(championData);
  } catch (error) {
    console.error("Erro ao buscar a lore do campeão:", error.message);
    return res.status(500).json({ error: 'Erro ao buscar a lore do campeão' });
  }
}
