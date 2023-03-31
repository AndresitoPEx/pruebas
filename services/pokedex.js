    const pokeContenedor = document.getElementById('contenedor-pokemons');

    const anterior = document.querySelector("#anterior");
    const siguiente = document.querySelector("#siguiente");

    let offset = 1;
    let limite = 21;

    anterior.addEventListener("click", () => {
        offset -= 21;
        listarPokemons(offset, limite);
        
    });

    siguiente.addEventListener("click", () => {
        offset += 21;
        listarPokemons(offset, limite);
    });


    function traerPokemon(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => response.json())
        .then((data) => {crearPokemon(data)});

    }

    function listarPokemons(offset, limite) {
        pokeContenedor.innerHTML = '';
        for(i = offset; i < offset + limite; i++){
            traerPokemon(i);
        }
    }


    function crearPokemon(pokemon) {
        const card = document.createElement('div');
        card.className = 'card';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';

        const imgPokemon = document.createElement('img');
        imgPokemon.src = pokemon.sprites.front_default;

        imgContainer.appendChild(imgPokemon);

        const numeroPokemon = document.createElement('p');
        numeroPokemon.className = 'numero-pokemon';
        numeroPokemon.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;

        const nombrePokemon = document.createElement('p');
        nombrePokemon.className = 'nombre-pokemon';
        nombrePokemon.textContent = pokemon.name;

        card.appendChild(imgContainer);
        card.appendChild(numeroPokemon);
        card.appendChild(nombrePokemon);

        pokeContenedor.appendChild(card);
    }

    listarPokemons(offset, limite);

