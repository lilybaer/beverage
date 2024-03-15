<template>
  <div class="syrup" :style="{ backgroundColor: syrupColor }"></div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
type Prop = {
  name: string;
};
type Syrup = {
  name: string;
  color: string;
};
const Syrups: Syrup[] = [
  {
    name: "Vanilla",
    color: "#FFEFD5",
  },
  {
    name: "Caramel",
    color: "#DAA520",
  },
  {
    name: "Hazelnut",
    color: "#6B4423",
  },
];

const props = defineProps({
  syrup: String,
});

const syrupColor = computed(() => {
  // Find the selected syrup in the Syrups array
  const selectedSyrup = Syrups.find(syrup => syrup.name === props.syrup);

  // If a matching syrup is found, return its color
  if (selectedSyrup) {
    return selectedSyrup.color;
  } else {
    // If no matching syrup is found, you can return a default color or handle the case accordingly
    return '#FFEFD5'; // Default color (change this according to your needs)
  }
});

</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>