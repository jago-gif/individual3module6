import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

function obtenerPokemon() {
    const pokeRandom = Math.floor(Math.random() * 151) + 1;
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeRandom}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            throw error;
        });
}

app.get('/pokemon', async (req, res) => {
    try {
        const pokemon = await obtenerPokemon();
        res.json(pokemon.name);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener Pokémon' });
    }
});

app.listen(port, () => {
    console.log(`funcionando en http://localhost:${port}`);
});
