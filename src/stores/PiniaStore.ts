import { defineStore } from 'pinia';

//creates a store of beverages with Pinia
export const useBeverageStore = defineStore({
  id: 'beverage',
  state: () => ({
    recipes: [] as { temperature: string; creamer: string; syrup: string; baseBeverage: string }[],
  }),
  actions: {
    addRecipe(recipe: { temperature: string; creamer: string; syrup: string; baseBeverage: string }) {
      this.recipes.push(recipe);
    },
    clearRecipes() {
      this.recipes = [];
    },
  },
});