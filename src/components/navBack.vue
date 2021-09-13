<template>
  <div class="container container-nav">
    <router-link to="/">
      <font-awesome-icon class="fa-2x button-back" icon="arrow-left" />
    </router-link>
  </div>
</template>
<!--style="border: 2px solid yellow" -->
<script>
export default {
  methods: {},
};
</script>

<style scoped>
.button-back {
  margin: 1.5rem 0 1.5rem;
  color: var(--old-lavender);
}
.container-nav {
  justify-content: space-between;
  align-items: center;
  background-color: var(--mint-cream);
  color: var(--old-lavender);
}
</style>
