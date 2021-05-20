const poke_container = document.getElementById('poke_container');
const pokemon_total = 151;

const fetchPokemon = async() => {
    for (let i = 1; i <= pokemon_number; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async id => {
    const url = 'https://pokeapi.co/api/v2/pokemon/${id}';
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${
							pokemon.id
						}.png" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
							.toString()
							.padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

    pokemonElement.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonElement);
}

fetchPokemon();