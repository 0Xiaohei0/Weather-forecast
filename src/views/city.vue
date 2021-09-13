<template>
  <navBack />
  <div class="about">
    <citySelect />
  </div>
</template>

<script>
import citySelect from "@/components/citySelect";
import navBack from "@/components/navBack";
export default {
  name: "city",
  components: { citySelect, navBack },
};
</script>
