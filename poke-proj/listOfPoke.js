window.onload = () => {
    let randomNum = Math.floor((Math.random() * 30) + 1);
      const options = {
        protocol: 'https',
        cache: true,
        timeout: 5 * 1000 // 5s
      }
      const P = new Pokedex.Pokedex(options);

      P.getPokemonsList({limit: 1000}).then(response => {
        console.log(response);
        const pokemonList = response.results;
        const element = document.getElementById('pokeNames');
        let html = '';
        pokemonList.forEach(pokemon => {
           html += `<div> ${pokemon.name}</div>`;
        });
        element.innerHTML = html;
  });
  
}