<template>
  <div class="container container-temp">
    <font-awesome-icon class="fa-5x" icon="sun" />
    <p class="temp">21 &#8451;</p>
    <p class="weather">sunny</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      displayedData: [],
    };
  },
  props: ["data"],
  mounted() {},
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
