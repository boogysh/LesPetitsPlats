//
export default class Recipe {
  constructor(recipe) {
    this.recipe = recipe;
    this.modalWrapper = document.querySelector(".modaleWrapper");
  }
  createIngredients() {
    let ingredientsList = "";
    this.recipe.ingredients?.map((elt) => {
      // fix quantity & unit name
      const quantity = elt.quantity ? elt.quantity : "";
      const unit = elt.unit ? elt.unit : "";
      //
      ingredientsList += `
      <li class="ingredient">
      <p class="ingredientType">${elt.ingredient}</p>
      <span class="ingredientQty">${quantity} ${unit}</span>
      </li>
    `;
    });
    return ingredientsList;
  }

  createRecipe() {
    //create
    const wrapper = document.createElement("div");
    const recipeTime = document.createElement("div");
    const recipeImg = document.createElement("img");
    const recipeDescriptionWrapper = document.createElement("div");
    const recipeTitle = document.createElement("h3");
    const recipeH4 = document.createElement("h4");
    const description = document.createElement("p");
    const recipeH4_2 = document.createElement("h4");
    const ingredients = document.createElement("ul");
    //link
    const link = document.createElement("a");
    link.innerHTML = " voir plus...";
    link.classList.add("more");
    
    //-------ADD PROPERTYS & CLASSES -------------
    wrapper.classList.add("recipeWrapper");
    recipeTime.classList.add("recipeTime");
    recipeTime.innerHTML = `${this.recipe.time}min`;
    recipeImg.classList.add("recipeImg");
    recipeImg.src = `/assets/recipes/${this.recipe.image}`;
    recipeImg.alt = `${this.recipe.name}`;
    recipeDescriptionWrapper.classList.add("recipeDescriptionWrapper");
    recipeTitle.classList.add("recipeTitle");
    recipeTitle.innerHTML = `${this.recipe.name}`;
    recipeH4.classList.add("recipe-h4");
    recipeH4.innerHTML = "RECETTE";
    description.classList.add("description");
    description.innerHTML = `${this.recipe.description}`;
    recipeH4_2.classList.add("recipe-h4");
    recipeH4_2.innerHTML = "Ingredients";
    ingredients.classList.add("ingredients");
    ingredients.innerHTML = `${this.createIngredients()}`;
    //-------------APPEND-------------
    if (this.recipe.description.length > 230) {
      description.append(link);
    }
    recipeDescriptionWrapper.append(
      recipeTitle,
      recipeH4,
      description,
      recipeH4_2,
      ingredients
    );
    wrapper.append(recipeTime, recipeImg, recipeDescriptionWrapper);

    return wrapper;
  }
  createRecipeModal() {
    //create
    const wrapper = document.createElement("div");
    const close = document.createElement("button");
    const closeImg = document.createElement("img");
    const recipeTime = document.createElement("div");
    const recipeImg = document.createElement("img");
    const recipeDescriptionWrapper = document.createElement("div");
    const recipeTitle = document.createElement("h3");
    const recipeH4 = document.createElement("h4");
    const description = document.createElement("p");
    const recipeH4_2 = document.createElement("h4");
    const ingredients = document.createElement("ul");
    
    //-------ADD PROPERTYS & CLASSES -------------
    wrapper.classList.add("modalWrapper");
    close.classList.add("closeModalBtn");
    closeImg.classList.add("closeModalImg");
    closeImg.src = "/assets/closeKey.png";
    recipeTime.classList.add("recipeTime", "modalTime");
    recipeTime.innerHTML = `${this.recipe.time}min`;
    recipeImg.classList.add("recipeImg","modalImg");
    recipeImg.src = `/assets/recipes/${this.recipe.image}`;
    recipeImg.alt = `${this.recipe.name}`;
    recipeDescriptionWrapper.classList.add("recipeDescriptionWrapper");
    recipeTitle.classList.add("recipeTitle");
    recipeTitle.innerHTML = `${this.recipe.name}`;
    recipeH4.classList.add("recipe-h4");
    recipeH4.innerHTML = "RECETTE";
    description.classList.add("description");
    description.innerHTML = `${this.recipe.description}`;
    recipeH4_2.classList.add("recipe-h4");
    recipeH4_2.innerHTML = "Ingredients";
    ingredients.classList.add("ingredients");
    ingredients.innerHTML = `${this.createIngredients()}`;
    //-------------APPEND-------------
    close.append(closeImg);
    recipeDescriptionWrapper.append(
      recipeTitle,
      recipeH4,
      description,
      recipeH4_2,
      ingredients
    );
    wrapper.append(recipeTime, close, recipeImg, recipeDescriptionWrapper);

    return wrapper;
  }
}

// `<a onclick="showModale()" class="more"> voir plus...</a>`
//
// const recipe = `
//       <div class="recipeTime">${this.recipe.time}min</div>
//       <img class="recipeImg" src="/assets/recipes/${
//         this.recipe.image
//       }" alt="recette-01" />
//       <div class="recipeDescriptionWrapper">
//         <h3 class="recipeTitle">${truncateStr(this.recipe.name, 42)}</h3>
//         <h4 class="recipe-h4">RECETTE</h4>
//         <p class="description">${this.truncateDescription()}</p>
//         <h4 class="recipe-h4">Ingredients</h4>
//         <ul class="ingredients">
//         ${this.createIngredients()}
//         </ul>
//       </div>
//           `;

//     wrapper.innerHTML = recipe;
