<script>
import { ref } from 'vue';

  export default {
    data(){
      return {
        pokemon: ref({}),
        searching: ref(false),
        error: ref(false),
        firstSearch: ref(true),
      }
    },
    methods: {
      buscarPokemon(){
        this.searching = true;
        const buscar = this.id;
        
        const url = `https://pokeapi.co/api/v2/pokemon/${buscar}`;

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error("Pokémon no encontrado");
                return res.json();
            })
            .then(data => {
                this.crearPokemon(data);
                this.searching = false;
                this.error = false;
                this.firstSearch = false;
                console.log(data);
            })
            .catch(err => {
                console.error(err);
                this.error = true;
            });

      },
      crearPokemon(data){
        this.pokemon = {
          name: data.name,
          id: data.id,
          types: data.types,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
        }
      }
    }
  }
</script>

<template>
  <nav>
    <label for="pokemon">Type pokemon name or ID</label>
    <input type="text" placeholder="Pikachu" id="pokemon" v-model="id">
    <button @click="buscarPokemon">Search pokemon!</button>
  </nav>

  <main>
    <div class="searching" v-if="searching">
      <p>Searching pokemon...</p>
    </div>
    <div class="error" v-if="error">
      <p>Pokémon no encontrado</p>
    </div>
    <div class="pokemon-card" v-show="!searching && !error && !firstSearch">
      <div class="pokemon-image">
        <h2>{{ this.pokemon.name }}</h2>
        <img :src="this.pokemon.image" alt="">
      </div>
      <div class="pokemon-types">
        <div class="pokemon-types-title">
          <h2>Types: </h2>
        </div>
        <div class="pokemon-types-content">
            <p v-for="type in this.pokemon.types" class="pokemon-type">
              {{ type.type.name }}
            </p>
        </div>
      </div>
      <div class="pokemon-stats">
        <div class="pokemon-stats-title">
          <h2>Stats: </h2>
        </div>
        <div class="pokemon-stats-content">
          <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            HP -> {{ this.pokemon.hp }}
          </p>
          <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z"/></svg>
            Attack -> {{ this.pokemon.attack }}
          </p>
          <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg>
            Defense -> {{ this.pokemon.defense }}
          </p>
          <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z"/></svg>
            Special Attack -> {{ this.pokemon.specialAttack }}
          </p>
          <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m400-80-20-360-127-73-14 52 81 141-69 40-99-170 48-172 230-132-110-110 56-56 184 183-144 83 48 42 328-268 48 56-340 344-20 400h-80ZM200-680q-33 0-56.5-23.5T120-760q0-33 23.5-56.5T200-840q33 0 56.5 23.5T280-760q0 33-23.5 56.5T200-680Z"/></svg>
            Special Defense -> {{ this.pokemon.specialDefense }}
          </p>
          <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>
            Speed -> {{ this.pokemon.speed }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

*{
  font-family: 'Inter', sans-serif;
  background-color: #1F1F1F;
  color: #fff;
}

nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  min-height: 10vh;
  background-color: #3d3d3d;
}
nav label{
  background-color: #3d3d3d;
}
nav input{
  width: 30%;
  height: 5vh;
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-size: 1.2rem;
  background-color: #3d3d3d;
}

nav button{
  width: 20%;
  height: 8vh;
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-size: 1.2rem;
  background-color: #000;
  color: #fff;
}

main{
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokemon-card{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
}

.pokemon-image{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.pokemon-image h2{
  text-align: center;
}

.pokemon-stats{
  display: flex;
  flex-direction: column;
}

.pokemon-stats-title{
  justify-content: center;
}

.pokemon-stats-content{
  justify-content: left;
}

.pokemon-type{
  background-color: #3d3d3d;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
}
</style>