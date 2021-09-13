<template>
  <div class="container container-temp">
    <font-awesome-icon class="fa-5x" :icon="iconString" />
    <p class="temp">{{ temp }} &#8451;</p>
    <p class="weather">{{ weather }}</p>
    <p class="dataInfo">
      Latitude:{{ lat }} Longitude:{{ lon }} Time updated:{{ time }}
    </p>
  </div>
</template>
<script>
import {
  WMOtoString,
  WMOtoIcon,
  getCurrentTimeIndex,
  getCurrentTime,
} from "./utility/util";
export default {
  data() {
    return {
      iconString: "sun",
      temp: 21,
      weather: "sunny",
      time: "00:00",
    };
  },
  props: ["data", "lat", "lon"],
  methods: {
    updateState() {
      let i = getCurrentTimeIndex(this.data);
      this.temp = this.data.hourly.temperature_2m[i];
      this.weather = WMOtoString(this.data.hourly.weathercode[i]);
      this.iconString = WMOtoIcon(this.data.hourly.weathercode[i]);
      this.time = getCurrentTime();
    },
  },
  mounted() {
    this.updateState();
  },
};
</script>

<style scoped>
.temp {
  font-size: 3.5rem;
  margin: 1rem 0 0.5rem 0;
}
.weather {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
}
.container-temp {
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
}
.dataInfo {
  color: rgb(209, 209, 209);
  font-size: 0.9rem;
}
</style>
