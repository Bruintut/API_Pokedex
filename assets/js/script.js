console.log('Hello World!')
const pokedex = document.getElementById("pokedex");
const promises = [];

const fetchPokemon = ()=>{

    for(i=1; i <= 150; i++){    
        const url =  `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));

    }

    Promise.all(promises).then(results => {
        const pokemon = results.map(data => ({
          name: data.name,
          id: data.id,
          image: data.sprites["front_default"],
          type: data.types.map(type => type.type.name).join(", "),
        }));

        displayPokemon(pokemon);
    });
};

const displayPokemon = pokemon => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
      .map(
        pokeman =>
          ` <li class="card"> <img class="card-image" src="${pokeman.image}"/> <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2> <p class="card-subtitle">Type: ${pokeman.type}</p> </li> `
      )
      .join("");
    pokedex.innerHTML = pokemonHTMLString;
};




fetchPokemon();


// const modalImage = document.querySelector("#modal-image");
// const modalName = document.querySelector("#modal-name");
// const modalSpecies = document.querySelector("#modal-species");
// const modalGender = document.querySelector("#modal-gender");

// //Este cards está dentro de uma função
// const cards = document.querySelectorAll(".cards")
// //Seleciona as cards que estão aparentes no pokemon pode haver um nome diferente.

// cards.forEach((card) => {

//     card.addEventListener("click", function (event){
//         const cardElement = event.path.filter((item) => item.clasfectsName == "card");

//     })
// })