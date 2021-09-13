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
  margin: 0;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
}
.cityItem {
  padding: 0.1rem;
  width: 70%;
  color: black;
  text-decoration: none;
  border-bottom: 1px solid var(--old-lavender);
}
</style>
