<template>
  <div>
    <navBack />
    <citySelect @citychange="onCityChange" />
  </div>
</template>

<script>
import citySelect from "@/components/citySelect";
import navBack from "@/components/navBack";
export default {
  name: "city",
  components: { citySelect, navBack },
  methods: {
    onCityChange(event) {
      this.$emit("citychange", event);
    },
  },
};
</script>
