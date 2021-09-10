<template>
  <weather />
</template>

<script>
import weather from "./components/weather.vue";

export default {
  components: { weather },
  name: "App",
  data() {
    return {
      weatherData: "",
    };
  },
  created() {
    const api =
      "https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-79.64&hourly=temperature_2m,weathercode";
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => (this.weatherData = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
