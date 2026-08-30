    const getfindbtn = document.querySelector(".find-btn");
    const getmodal = document.querySelector("#pokemon-modal");
    const getPokemonImg = document.querySelector("#pokemon-img");
    const getpokemonname = document.querySelector(".pokemon-name");
    const getpokemonAbility = document.querySelector(".pokemon-Ability");
    export async function fetchpokemondata(name) {
    try {
        const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
        );
        const data = await response.json();
        const officialArtworkImg = data.sprites.other["official-artwork"].front_default;
        console.log(data);
    if (getPokemonImg) getPokemonImg.src = officialArtworkImg;
       
       if (getpokemonname) getpokemonname.textContent = `Name : ${data.name}`;
      
        console.log(data.name);

        const abilities = data.abilities.map((a) => a.ability.name);
         if(getpokemonAbility) getpokemonAbility.textContent = `Abilities : ${abilities}`;
        console.log(abilities[0]);
        console.log(abilities[1]);
        return data;
    } catch (error) {
        console.log("cant get data",error);
    }

    }

    function displaypokemondetail() {
    getmodal.style.display = "flex";
    }

    getfindbtn.addEventListener("click", async (event) => {
    try {
        event.preventDefault();
        const data = await fetchpokemondata("mewtwo");
        if(data){
    displaypokemondetail();
        }
    
    } catch(error) {
        console.log(error);
    }
    });

