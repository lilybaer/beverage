import { defineStore } from 'pinia';

//creates a store of beverages with Pinia
export const useBeverageStore = defineStore('beverage', {
  state: () => ({
    recipes: [] as { name: string; temperature: string; creamer: string; syrup: string; baseBeverage: string }[],
    selectedRecipe: {} as { name: string; temperature: string; creamer: string; syrup: string; baseBeverage: string },
  }),

  actions: {
    addRecipe(recipe: { name: string; temperature: string; creamer: string; syrup: string; baseBeverage: string }) {
      this.recipes.push(recipe);
    },

    getAllRecipes() {
      return this.recipes;
    },

    selectRecipe(recipe: { name: string; temperature: string; creamer: string; syrup: string; baseBeverage: string }) {
      this.selectedRecipe = recipe;
    },
    clearRecipes() {
      this.recipes = [];
    },
  },
});