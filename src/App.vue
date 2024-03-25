<template>
  <div>
    <Beverage
      :isIced="currentTemp === 'Cold'"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
      :beverage="currentBeverage"
    />
    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`rtemp${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in creamers" :key="creamer">
          <label>
            <input
              type="radio"
              name="Creamer"
              :id="`rcreamer${creamer}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="Syrup"
              :id="`rsyrup${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="baseBeverage in baseBeverages" :key="baseBeverage">
          <label>
            <input
              type="radio"
              name="Base Beverage"
              :id="`rbase${baseBeverage}`"
              :value="baseBeverage"
              v-model="currentBeverage"
            />
            {{ baseBeverage }}
          </label>
        </template>
      </li>
    </ul>
    <!-- New input field for user's name -->
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="userName" />

    <!-- Button to save the users recipe -->
    <button @click="MakeBeverage">Make Beverage</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

//import the pinia store
import { useBeverageStore } from './stores/PiniaStore';
import Beverage from "./components/Beverage.vue";
// Define reactive data
const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const currentCreamer = ref("None");
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const currentSyrup = ref("None");
const baseBeverages = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentBeverage = ref("Coffee");

//create a beverage store
const beverageStore = useBeverageStore();

// Reactive variable to store user's name
const userName = ref('');

//save recipe function saves current user selections and adds the recipe to beverage store
const MakeBeverage = () => {
  const recipe = {
    temperature: currentTemp.value,
    creamer: currentCreamer.value,
    syrup: currentSyrup.value,
    baseBeverage: currentBeverage.value,
  };
  beverageStore.addRecipe(recipe);

// Add the recipe to the Pinia store
beverageStore.$patch((state: {
recipes: {
temperature: string; creamer: string;
//import the pinia store
syrup: string; baseBeverage: string;
}[];
}) => {
    state.recipes.push(recipe);
  });
};

  // Clear the user's name after making the beverage
  userName.value = '';
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>