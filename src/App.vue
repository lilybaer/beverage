<template>
  <div>
    <Beverage
      :isIced="currentTemp === 'Cold'"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
      :beverage="currentBeverage"
    />
    <h3 class="section-header">Temperature:</h3>
    <ul>
      <li v-for="temp in temps" :key="temp">
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
      </li>
    </ul>
    <h3 class="section-header">Creamer:</h3> 
    <ul>
      <li v-for="creamer in creamers" :key="creamer">
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
      </li>
    </ul>
    <h3 class="section-header">Syrup:</h3>
    <ul>
      <li v-for="syrup in syrups" :key="syrup">
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
      </li>
    </ul>
    <h3 class="section-header">Base Beverage:</h3>
    <ul>
      <li v-for="baseBeverage in baseBeverages" :key="baseBeverage">
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
      </li>
    </ul>
    <!-- New input field for user's name -->
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="userName" />

    <!-- Button to save the users recipe -->
    <button @click="makeBeverage">Make Beverage</button>

    <!-- Display stored recipes -->
    <div v-if="recipes.length > 0">
      <h2 class="section-header">Stored Recipes:</h2>
      <ul>
        <li v-for="(recipe, index) in recipes" :key="index">
          <button @click="showBeverage(recipe)">
            {{ recipe.name }} 
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
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
const recipes = computed(() => beverageStore.recipes);

// Reactive variable to store user's name
const userName = ref('');

//save recipe function saves current user selections and adds the recipe to beverage store
const makeBeverage = () => {
  const recipe = {
    name: userName.value,
    temperature: currentTemp.value,
    creamer: currentCreamer.value,
    syrup: currentSyrup.value,
    baseBeverage: currentBeverage.value,
  };
  beverageStore.addRecipe(recipe);
  userName.value = '';
};

// Function to display a beverage corresponding to a recipe
interface Recipe{
  temperature: string;
  creamer: string;
  syrup: string;
  baseBeverage: string;
}
const showBeverage = (recipe: Recipe) => {
  // Update current selections based on the recipe
  currentTemp.value = recipe.temperature;
  currentCreamer.value = recipe.creamer;
  currentSyrup.value = recipe.syrup;
  currentBeverage.value = recipe.baseBeverage;
};

// Add the recipe to the Pinia store
//beverageStore.$patch((state) => {
//  state.recipes.push(recipe);
//});

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
.section-header{
  font-size: .85rem;
  margin-bottom: 0.05rem;
}

</style>