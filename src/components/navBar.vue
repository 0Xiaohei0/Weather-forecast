<template>
  <div class="container container-nav">
    <h1 class="cityName">{{ this.cityName }}</h1>
    <router-link to="/city" class="link-city">
      <font-awesome-icon class="fa-2x" icon="city" />
    </router-link>
  </div>
</template>
<!--style="border: 2px solid yellow" -->
<script>
export default {
  data() {
    return {};
  },
  props: ["cityName"],
};
</script>

<style scoped>
.link-city {
  color: var(--old-lavender);
}
.container-nav {
  justify-content: space-between;
  align-items: center;
  background-color: var(--mint-cream);
  color: var(--old-lavender);
}
</style>
