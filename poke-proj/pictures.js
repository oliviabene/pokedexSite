window.onload = () => {
    const options = {
    protocol: 'https',
    cache: true,
    timeout: 5 * 1000 // 5s
    }
    const P = new Pokedex.Pokedex(options); //from documentation(initialize obj)

P.getPokemonsList({limit: 100}).then(response => {
     //console.log(response);
    const pokemonList = response.results;
    const imageContainer = document.getElementById('pokemonImages');
    let imageList = '';
        pokemonList.forEach(pokemon => {
            P.getPokemonByName(pokemon.name).then(pokeData => {
            imageList += "<div>";
            imageList+= `<img id = "pokemonImages" src = "${pokeData.sprites.front_default}" height=200 width=200/>`;
            imageList += "</div>";
            
            pokeData.types.forEach(type => {
                imageList += `<div id = "names">${pokemon.name}</div>`;
                imageList += `<div id = "names">${type.type.name}</div>`;
                imageList += `<p></p>`;
            });
            imageContainer.innerHTML = imageList;
            });
        });
});
}