<script>
import { ref } from 'vue';

  export default {
    data(){
      return {
        message: ref(''),
        number: ref(0),
        randomNumber: ref(this.generateRandomNumber()),
        intentos: ref(3),
        ganados: ref(0),
        perdidos: ref(0),
      }
    },
    methods: {
      checkNumber(){
        if(this.number === this.randomNumber){ //Ha ganado
          this.message = '¡Has ganado!';
          this.ganados++;
          this.intentos = 3;
          this.regenerateRandomNumber();
        }
        else if(this.number > this.randomNumber){
          this.message = 'El número es menor';
          this.intentos--;
          if(this.intentos === 0){
            this.message = "Has perdido";
            this.perdidos++;
            this.intentos = 3;
            this.regenerateRandomNumber();
          }
        }
        else{
          this.message = "El numero es mayor";
          this.intentos--;
          if(this.intentos === 0){
            this.message = "Has perdido";
            this.perdidos++;
            this.intentos = 3;
            this.regenerateRandomNumber();
          }
        }
      },
      generateRandomNumber(){
        return Math.floor(Math.random() * 100) + 1;
      },
      regenerateRandomNumber(){
        this.randomNumber = this.generateRandomNumber();
      }
    }
  }
</script>

<template>
  <nav>
    <h1>Adivinador de números</h1>
    <div class="stats">
      <p id="win">Ganados: {{ ganados }}</p>
      <p id="lose">Perdidos: {{ perdidos }}</p>
    </div>
  </nav>

  <main>
    <div class="message">
      <p :style="{color: message === '¡Has ganado!' ? '#00FF00' : '#FF0000'}">{{ message }}</p>
    </div>
    <div class="input-label">
      <label for="number">Ingresa un número</label>
      <p>Te quedan {{ intentos }} intentos</p>
    </div>
    <div class="input-number">
      <input type="number" placeholder="Ingresa un número" v-model="number">
      <button @click="checkNumber">Adivinar</button>
    </div>
  </main>

  <p>
    {{ randomNumber }}
  </p>
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
  gap: 2rem;
}

.stats{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.message{
  display: flex;
  width: 100%;
  justify-content: center;
}

.input-number{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  margin: 0 auto;
}

.input-label{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.input-label p, .input-label label{
  text-align: center;
}
.input-label p{
  font-size: 0.8rem;
  color: #888;
}

#win{
  color: #00FF00;
}

#lose{
  color: #FF0000;
}
</style>