let pokemonRepository = (function () {

	let pokemonList = [];

	function add (pokemon) {
		if (typeof pokemon === 'object' && pokemon.name && pokemon.height && pokemon.type && Object.keys(pokemon).length === 3) {
			pokemonList.push(pokemon);
		} else {
			return `${pokemon} is not a Pokémon. Pokémon must be an object with the keys name, height and type`;
		}
	}

	function getAll () {
		return pokemonList
	}

	return {
		add: add,
		getAll: getAll

	};

}) ();

pokemonRepository.add({ name: 'Pikachu', height: 1.04, type:[  'electric'] } );
pokemonRepository.add({ name: 'Snorlax', height: 6.11, type: ['normal'] });
pokemonRepository.add({ name: 'Squirtle', height: 1.8, type: ['water'] });
pokemonRepository.add({ name: 'Bulbasaur', height: 2.04, type: ['grass'] });
pokemonRepository.add({ name: 'Charmander', height: 2.0, type: ['fire'] });

let pokemonList = pokemonRepository.getAll();


//forEach() function to iterate over the Pokémon in the pokemonList array
pokemonList.forEach(printDetails);
function printDetails (pokemon) {
	let highlight = '';
	if (pokemon.height > 5.0) {
		highlight = " - Wow, that\’s big!";
	}
	document.write(`<li>${pokemon.name}(type: ${pokemon.type}) ${highlight}</li>`);
}

 let pokemonNames = [];
 for (let i = 0; i < pokemonList.length; i++) {
   pokemonNames.push(pokemonList[i].name);
 }
 function findPokemons (query) {
	return pokemonNames.filter(function (name) {
		return name.toLowerCase().indexOf(query.toLowerCase()) > -1;
	});
}

console.log(findPokemons('Iv'))
	