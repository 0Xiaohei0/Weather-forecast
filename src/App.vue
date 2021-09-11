<template>
  <navBar />
  <main>
    <temperatureDisplay v-if="weatherData != null" :data="weatherData" />
    <weekForecast />
    <dayForecast id="dayForecast" />
    <additionalData id="additionalData" />
  </main>
</template>
<script>
import navBar from "./components/navBar";
import temperatureDisplay from "./components/temperatureDisplay";
import weekForecast from "./components/weekForecast";
import dayForecast from "./components/dayForecast";
import additionalData from "./components/additionalData";
export default {
  components: {
    navBar,
    temperatureDisplay,
    weekForecast,
    dayForecast,
    additionalData,
  },
  name: "App",
  data() {
    return {
      weatherData: null,
    };
  },
  created() {
    const api =
      "https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-79.64&hourly=temperature_2m,relativehumitidy_2m,dewpoint_2m,apparent_temperature,pressure_msl,weathercode,cloudcover,direct_radiation,windspeed_10m,winddirection_10m,soil_temperature_0cm";
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => (this.weatherData = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style>
@import "./variables.css";
body {
  margin: 0;
  background: var(--baby-blue-eyes);
  color: var(--mint-cream);
  text-shadow: 0 1px var(--old-lavender);
}
.container {
  display: flex;
  padding: 0 1rem;
}
@media (min-width: 600px) {
  main {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 50% 50%;
  }
  #additionalData {
    order: 1;
  }
  #dayForecast {
    order: 2;
  }
}
</style>
