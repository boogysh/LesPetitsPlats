export default class RecipesQuantity {
  constructor(recipes) {
    this.recipes = recipes;
    const qty = this.recipes.length;
    const $wrapper = document.querySelector(".qtyRecipes");
    $wrapper.innerHTML = `${qty} recettes`;
    return $wrapper;
  }
}


