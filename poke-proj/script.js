window.onload = () => {
  let randomNum = Math.floor((Math.random() * 200) + 1);
	const options = {
	  protocol: 'https',
	  cache: true,
	  timeout: 5 * 1000 // 5s
	}
	const P = new Pokedex.Pokedex(options); //from documentation(initialize obj)

// Name & Pic
  P.resource(`api/v2/pokemon/${randomNum}`)
    .then(pokemon => {
      P.getCharacteristicById(2).then(function(response) {
        const ele1 = document.getElementById('randoPoke');
        let html3 = '';
        html3 += `<div> ${pokemon.name}</div>`;
        html3 += `<img id = "pokemonImages" src = "${pokemon.sprites.front_default}" height=200 width=200/>`;
        ele1.innerHTML = html3;
      });
    });

  //facts
  P.resource(`api/v2/pokemon/${randomNum}`)
  .then(pokemon => {
    const result = pokemon.results;
    const moves = pokemon.moves[0];
    const ability = pokemon.abilities[0].ability.name;
    const exp = pokemon.base_experience;
    const ele2 = document.getElementById('randoPokeStats');
    let html2 = '';
    html2 += `<div>One famous move is: ${moves.move.name}</div>`;
    html2 += `<p></p>`;
    html2 += `<div>They weigh: ${pokemon.weight} pounds </div>`;
    html2 += `<p></p>`;
    html2 += `<div>One of their abilities is: ${ability} </div>`;
    html2 += `<p></p>`;
    html2 += `<div>Their base exp is: ${exp} </div>`;
    ele2.innerHTML = html2;    
  });
}
