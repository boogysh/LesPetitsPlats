import api from "../data/api.js";
import { createSearchResult } from "../functions/searchFunctions.js";

export default class ResponseNotFound {
  constructor(val) {
    this.val = val;
    console.log("this.val", this.val);
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("notFoundWrapper");
    // let response;
    if (!this.val || this.val.length < 3) {
      const title = document.createElement("h2");
      const btn = document.createElement("button");
      //show all recipes
      btn.addEventListener("click", () => {
        const allRecipes = api();
        createSearchResult(allRecipes);
      });
      //
      title.innerHTML =
        "Saisissez minimum 3 caractères dans la recherche principale, où chercher dans les ingrédients, appareils et ustensiles, où:";
      title.classList.add("searchResponse");
      btn.classList.add("viewList");
      btn.textContent = "voir toutes les recettes";
      $wrapper.append(title, btn);
    } else {
      const response = `
      <h2 class="searchResponse">
        Aucune recette ne contient " ${this.val} " vous pouvez chercher <br> « tarte aux pommes
        », « poisson », etc.
      </h2>
      `;
      $wrapper.innerHTML = response;
    }
    return $wrapper;
  }
}

//   response = `
// <h2 class="searchResponse">
//  Saisissez minimum 3 caractères dans la recherche principale,<br> où chercher dans les ingrédients, appareils et ustensiles.
// </h2>
// <button class="viewList">
//   Voir toutes les recettes
// </button>

// `;
