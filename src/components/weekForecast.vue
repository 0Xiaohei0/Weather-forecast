<template>
  <div class="container">
    <div class="dayItem">
      <p class="dayOfTheWeek">Today</p>
      <font-awesome-icon class="fa-2x" icon="sun" />
      <p class="high">21 &#8451;</p>
      <p class="low">16 &#8451;</p>
    </div>
    <div class="dayItem">
      <p class="dayOfTheWeek">Today</p>
      <font-awesome-icon class="fa-2x" icon="sun" />
      <p class="high">21 &#8451;</p>
      <p class="low">16 &#8451;</p>
    </div>
    <div class="dayItem">
      <p class="dayOfTheWeek">Today</p>
      <font-awesome-icon class="fa-2x" icon="sun" />
      <p class="high">21 &#8451;</p>
      <p class="low">16 &#8451;</p>
    </div>
    <div class="dayItem">
      <p class="dayOfTheWeek">Today</p>
      <font-awesome-icon class="fa-2x" icon="sun" />
      <p class="high">21 &#8451;</p>
      <p class="low">16 &#8451;</p>
    </div>
    <div class="dayItem">
      <p class="dayOfTheWeek">Today</p>
      <font-awesome-icon class="fa-2x" icon="sun" />
      <p class="high">21 &#8451;</p>
      <p class="low">16 &#8451;</p>
    </div>
    <div class="dayItem">
      <p class="dayOfTheWeek">Today</p>
      <font-awesome-icon class="fa-2x" icon="sun" />
      <p class="high">21 &#8451;</p>
      <p class="low">16 &#8451;</p>
    </div>
    <div class="dayItem">
      <p class="dayOfTheWeek">Today</p>
      <font-awesome-icon class="fa-2x" icon="sun" />
      <p class="high">21 &#8451;</p>
      <p class="low">16 &#8451;</p>
    </div>
  </div>
</template>

<script>
import { getNext7Days } from "./utility/util";
export default {
  props: ["data"],
  mounted() {
    console.log(getNext7Days(this.data));
  },
};
</script>

<style scoped>
.container {
  justify-content: space-between;
}
</style>
