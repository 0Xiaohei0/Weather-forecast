<template>
  <div class="container">
    <div v-for="(d, index) in displayData" :key="index" class="dayItem">
      <p class="dayOfTheWeek">{{ d.day }}</p>
      <font-awesome-icon class="fa-2x" :icon="d.weatherIcon" />
      <p class="high">21 &#8451;</p>
      <p class="low">16 &#8451;</p>
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
      //let lowTemp = [];
      //let highTemp = [];
      for (let i = 0; i < 168; i += 24) {
        weather.push(WMOtoIcon(this.data.hourly.weathercode[i]));
      }
      for (let i = 0; i < weather.length; i++) {
        this.displayData.push({ day: day[i], weatherIcon: weather[i] });
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
  justify-content: space-between;
}
</style>
