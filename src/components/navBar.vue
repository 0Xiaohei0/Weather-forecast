<template>
  <div class="container container-nav">
    <h1 class="cityName">City Name</h1>
    <button class="button-options">
      <font-awesome-icon class="fa-2x" icon="ellipsis-v" />
    </button>
  </div>
</template>
<!--style="border: 2px solid yellow" -->
<script>
export default {};
</script>

<style scoped>
.button-options {
  background: transparent;
  border: 0px solid transparent;
}
.container-nav {
  justify-content: space-between;
  background-color: var(--mint-cream);
  color: var(--old-lavender);
}
</style>
