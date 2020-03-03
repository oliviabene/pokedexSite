window.onload = () => {
    let randomNum = Math.floor((Math.random() * 30) + 1);
      const options = {
        protocol: 'https',
        cache: true,
        timeout: 5 * 1000 // 5s
      }
      P.resource(`api/v2/pokemon/${randomNum}`)
      .then(pokemon => {
        //console.log(pokemon);
        P.getCharacteristicById(1).then(function(response) {
          console.log(response.highest_stat.name);
          const ele1 = document.getElementById('randoPoke');
          let html3 = '';
          html3 += `<div> ${pokemon.name}</div>`;
          html3 += `<img id = "pokemonImages" src = "${pokemon.sprites.front_default}" height=200 width=200/>`;
          html3 += `<div> ${response.highest_stat.name}</div>`;
          ele1.innerHTML = html3;
        });
      });
  
}
