<template>
  <div class="container">
    <div v-for="(d, index) in displayData" :key="index" class="hourItem">
      <p class="dayOfTheWeek">{{ d.time }}</p>
      <font-awesome-icon class="fa-2x" :icon="d.weather" />
      <p class="temp">{{ d.temp }} &#8451;</p>
    </div>
  </div>
</template>

<script>
import { WMOtoIcon } from "./utility/util";
export default {
  data() {
    return {
      displayData: [],
    };
  },
  props: ["data"],
  methods: {
    loadData() {
      const INTERVAL = 4;
      let time = [];
      let weather = [];
      let temp = [];
      for (let i = 0; i <= 24; i += INTERVAL) {
        time.push(
          this.data.hourly.time[i].substring(
            this.data.hourly.time[i].length - 5,
            this.data.hourly.time[i].length
          )
        );
        weather.push(WMOtoIcon(this.data.hourly.weathercode[i]));
        temp.push(this.data.hourly.temperature_2m[i]);
      }
      for (let i = 0; i < time.length; i++) {
        this.displayData.push({
          time: time[i],
          weather: weather[i],
          temp: temp[i],
        });
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.container {
  justify-content: space-around;
}
</style>
