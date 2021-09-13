<template>
  <ul class="cityList">
    <router-link
      to="/"
      v-for="(d, index) in data"
      :key="index"
      class="cityItem"
      @click="this.$emit('citychange', d)"
    >
      {{ d.city }}
    </router-link>
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
  emits: ["citychange"],
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
