<template>
  <ul class="cityList">
    <li
      v-for="(d, index) in data"
      :key="index"
      class="cityItem"
      @change="$emit('cityChange', d.city)"
    >
      {{ d.city }}
    </li>
  </ul>
</template>

<script>
import cityData from "@/data/city.json";

export default {
  data() {
    return {
      data: cityData,
    };
  },

  mounted() {},
};
</script>

<style scoped>
.cityList {
  padding: 0;
}
.cityItem {
  list-style: none;
}
</style>
