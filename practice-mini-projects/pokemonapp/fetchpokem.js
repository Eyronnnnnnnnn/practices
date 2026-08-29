
export async function fetchpokemondata(name){

    try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = await response.json();
    console.log(data);
    console.log(data.base_experience);
    const abilities = data.abilities.map(a => a.ability.name);  
    console.log(abilities[0]);
    console.log(abilities[1]);
    return data;
    }catch(error){
        console.log("cant get data".error);
    }
  

}

fetchpokemondata("pikachu");