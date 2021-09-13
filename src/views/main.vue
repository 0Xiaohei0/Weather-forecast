<template>
  <navBar />
  <main v-if="weatherData != null">
    <temperatureDisplay :data="weatherData" />
    <weekForecast :data="weatherData" />
    <dayForecast id="dayForecast" :data="weatherData" />
    <additionalData id="additionalData" :data="weatherData" />
  </main>
</template>
<script>
import navBar from "@/components/navBar";
import temperatureDisplay from "@/components/temperatureDisplay";
import weekForecast from "@/components/weekForecast";
import dayForecast from "@/components/dayForecast";
import additionalData from "@/components/additionalData";
export default {
  name: "home",
  components: {
    navBar,
    temperatureDisplay,
    weekForecast,
    dayForecast,
    additionalData,
  },
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
@import "../variables.css";
main {
  font-size: 3vw;
}
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
@media (min-width: 790px) {
  main {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 50% 50%;
    font-size: 1rem;
  }
  #additionalData {
    order: 1;
  }
  #dayForecast {
    order: 2;
  }
}
</style>
