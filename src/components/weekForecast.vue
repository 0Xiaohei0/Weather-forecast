<template>
  <div class="container">
    <div v-for="(d, index) in displayData" :key="index" class="dayItem">
      <p class="dayOfTheWeek">{{ d.day }}</p>
      <font-awesome-icon class="fa-2x" :icon="d.weatherIcon" />
      <p class="high">{{ d.high }} &#8451;</p>
      <p class="low">{{ d.low }} &#8451;</p>
    </div>
  </div>
</template>

<script>
import { getNext7Days, WMOtoIcon } from "./utility/util";
export default {
  data() {
    return {
      displayData: [],
    };
  },
  props: ["data"],
  methods: {
    loadData() {
      let day = getNext7Days(this.data);
      let weather = [];
      let lowTemp = [];
      let highTemp = [];
      for (let i = 0; i < 168; i += 24) {
        weather.push(WMOtoIcon(this.data.hourly.weathercode[i]));
        let min = 999;
        let max = -999;
        for (let j = i; j < i + 24 && j < 168; j++) {
          let t = this.data.hourly.temperature_2m[j];
          if (t > max) max = t;
          if (t < min) min = t;
        }
        lowTemp.push(min);
        highTemp.push(max);
      }

      for (let i = 0; i < weather.length; i++) {
        this.displayData.push({
          day: day[i],
          weatherIcon: weather[i],
          high: highTemp[i],
          low: lowTemp[i],
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
.dayItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.high {
  margin-bottom: 0;
}
</style>
