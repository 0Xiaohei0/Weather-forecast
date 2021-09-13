<template>
  <router-view
    :cityName="cityName"
    :lat="lat"
    :lon="lon"
    @citychange="onCityChange"
  />
</template>

<script>
export default {
  data() {
    return { cityName: "Toronto", lat: 43.48, lon: -79.64 };
  },
  methods: {
    onCityChange(event) {
      console.log(event);
      this.cityName = event.city;
      this.lat = event.lat;
      this.lon = event.lng;
    },
  },
};
</script>
<style>
@import "./variables.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
