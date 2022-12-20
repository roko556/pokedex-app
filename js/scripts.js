
//adding an array with four different pokemon and their information 
let pokemonList= [
    { name: 'Pikachu', type: 'electric', weight: 13.2, height: 1.04, weaknesses: 'water,ground,rock' }, 
    { name: 'Bulbasaur', type: 'grass', weight: 15.2, height: 2.04, weaknesses: 'fire,psychic,flying,ice' },
    { name: 'Squirtle', type: 'water', weight:19.8, height: 1.8, weaknesses: 'electric' },
    { name: 'Charmander', type: 'fire', weight:18.8, height: 2.0,weaknesses:'water,ground,rock' },
    { name: 'Snorlax', type: 'normal', weight:1014, height: 6.11,weaknesses:'fighting' }
    
]
//creating loop that iterates over each item
for (let i = 0;
    i < pokemonList.length; i++) {
    if(pokemonList[i].height >= 3) {
        document.write(pokemonList[i].name + " height: " + pokemonList[i].height + " wow, that's big" + "<br>")
    }
    else if (pokemonList[i].height >= 1 && pokemonList[i].height <3){
        document.write(pokemonList[i].name + " height: " + pokemonList[i].height+ "<br>" )
    }
    else {
        document.write(pokemonList[i].name + " height: " + pokemonList[i].height+ "<br>" )
    }
}