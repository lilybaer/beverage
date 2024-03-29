import { defineStore } from 'pinia';

//creates a store of beverages with Pinia
export const useBeverageStore = defineStore('beverage', {
  state: () => ({
    recipes: [] as { name: string; temperature: string; creamer: string; syrup: string; baseBeverage: string }[],
    selectedRecipe: {} as { name: string; temperature: string; creamer: string; syrup: string; baseBeverage: string },
  }),

  actions: {
    addRecipe(recipeWithUsername: { name: string; temperature: string; creamer: string; syrup: string; baseBeverage: string }) {
      this.recipes.push(recipeWithUsername);
    },
    
    clearRecipes() {
      this.recipes = [];
    },
  },
});