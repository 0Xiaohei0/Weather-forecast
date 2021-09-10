<template>
  <div class="container container-temp">
    <font-awesome-icon class="fa-5x" icon="sun" />
    <p class="temp">{{ temp }} &#8451;</p>
    <p class="weather">{{ weather }}</p>
  </div>
</template>
<script>
import WMOtoString from "./utility/util";
export default {
  data() {
    return {
      temp: 21,
      weather: "sunny",
    };
  },
  props: ["data"],
  methods: {
    updateState() {
      let i = this.getCurrentTimeIndex();
      this.temp = this.data.hourly.temperature_2m[i];
      this.weather = WMOtoString(this.data.hourly.weathercode[i]);
      console.log(this.data.hourly.weathercode[i]);
      console.log(WMOtoString(this.data.hourly.weathercode[i]));
    },
    getCurrentTimeIndex() {
      const currentDate = new Date();
      const currentTime = currentDate.getTime();
      //returns the index in the data array the correspond to the current time
      for (let i = 0; i < this.data.hourly.time.length; i++) {
        let dataTime = Date.parse(this.data.hourly.time[i]);
        if (currentTime < dataTime) {
          return i;
        }
      }
    },
  },
  mounted() {
    console.log("mounted");
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
</style>
