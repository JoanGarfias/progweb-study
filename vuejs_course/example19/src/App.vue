<template>
  <div id="app">
    <main>
      <div class="search-box">
          <input type="text" class="search-bar" placeholder="Query the weather in your city..." @input="searchWeather">
      </div>
      <div class="weather-wrap">
        <div class="location-box">
            <div class="location">{{ location }}</div>
            <div class="date">{{ date }}</div>
        </div>
      </div>

      <div class="weather-box">
        <div class="temp">{{ temp }}</div>
        <div class="weather">{{ weather }}</div>
      </div>

    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      api_key: "f40a485f61ec4d949c9b1e2b0ec60a0c",
      location: "",
      date: "",
      temp: "",
      weather: "",
    };
  },
  methods: {
    searchWeather(event) {
      const query = event.target.value;
      if (query.length > 2) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${this.api_key}&units=metric&lang=es`)
          .then(response => response.json())
          .then(data => {
            if(data.cod === 200){
              this.location = `${data.name}` + ` | ${data.sys.country}`; 
              this.date = new Date().toDateString();
              this.temp = `${data.main.temp} °c`
              this.weather = `${data.weather[0].main}` + ` | ${data.weather[0].description}`;
            }
            else{
              this.location = "Ciudad no encontrada";
            }
          })
          .catch(error => console.error('Error:', error));   
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'montserrat', sans-serif;
}

#app{
  background-image: url("./assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

main{
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}

.search-box{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.search-box .search-bar{
  display: block;
  width: 100%;
  max-width: 600px;
  padding: 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  
  color: #313131;
  font-size: 20px;
  appearance: none;

  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus{
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px 0px 16px 0px;
}


.location-box .location{
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0,0,0,0.25);
}

.location-box .date{
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-wrap{
  padding-top: 40px;
}

.weather-box{
  text-align: center;
}

.weather-box .temp{
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 60px;
  font-weight: 600;

  text-shadow: 3px 6px rgba(0,0,0,0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0,0,0,0.25);
}

.weather-box .weather{
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
}


</style>
