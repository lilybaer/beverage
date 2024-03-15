<template>
  <div class="baseBeverage" :style="{ backgroundColor: baseColor }"></div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

type BaseBeverage = {
  name: string;
  color: string;
};

const Bases: BaseBeverage[] = [
  {
    name: "Black Tea",
    color: "#8B4513",
  },
  {
    name: "Green Tea",
    color: "#C8E6C9",
  },
  {
    name: "Coffee",
    color: "#6F4E37",
  },
];

const props = defineProps({
  baseBeverage: String,
});

const baseColor = computed(() => {
  // Find the selected base beverage in the Bases array
  const selectedBase = Bases.find(base => base.name === props.baseBeverage);

  // If a matching base beverage is found, return its color
  if (selectedBase) {
    return selectedBase.color;
  } else {
    // If no matching base beverage is found, you can return a default color or handle the case accordingly
    return 'black'; // Default color (change this according to your needs)
  }
});
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
}
</style>
