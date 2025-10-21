
const pokedex = document.querySelector('#pokedex');
const pokelist = document.querySelector('#pokelist');


async function getPokemonList() {
  try {
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=20`);
    if(response.ok){
       const data = await response.json();
       let results = data.results;
       return results;
    } else {
        throw new Error('Erreur: Erreur de récupération des données.')
    }


  } catch (error) {
    console.error("Erreur :", error);
  }
}

async function getPokemonInfo(name){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(response.ok){
            const data = await response.json();
            // console.log(data.sprites.front_default);
            //On ne renvoie pas un objet avec result : on veut toutes les infos
            return data;
        }
    } catch {
        throw new Error('Erreur: Erreur de récupération des données du pokémon.')
    }
}


//si la promesse est tenue, on boucle sur les resultats pour sortir les données de chaque pokemon
getPokemonList().then(results => {
    results.forEach(pokemon => {
        const newLi = document.createElement('li');
        newLi.classList.add("flex","flex-col-reverse","items-center","p-5","bg-base-100","rounded-xl");
        let pokemonName = pokemon.name;
        pokelist.appendChild(newLi);
        newLi.innerHTML = `${pokemonName}`;

        getPokemonInfo(pokemonName).then(data =>{
            // console.log(data.sprites.front_default);
            const urlImg = data.sprites.front_default;
            const img = document.createElement('img');
            img.setAttribute('src', `${urlImg}`);
            newLi.appendChild(img);
            

        });
    });
    
})



   









   

    


    









