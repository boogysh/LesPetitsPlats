import api from "../data/api.js";
import Recipe from "../templates/recipe.js";
import ResponseNotFound from "../templates/notFound.js";
import RecipesQuantity from "../templates/nrRecipes.js";
import { toggleFilterBtn, args } from "../utils/utils.js";
import {
  addKey,
  showKeyWordList,
  addTag,
  showTags,
  getTagList,
  cleanList,
  getSplittedTagNames,
  getTagTypes,
} from "./keysFunctions.js";
//
const searchInput = document.querySelector("#searchMain");

//------------------SEARCH FUNCTIONS---------------------
function searchValue(input) {
  return input?.value;
}
function searchValueArray(input) {
  //return array
  return input?.value.toLowerCase().split(" ");
}
function resetSearchValue(input) {
  return (input.value = "");
}
//----------search one sring in the defined area--------
function searchOneStr(type, recipes, str) {
  let result;
  str = str.toLowerCase();
  //
  type === "main" &&
    (result = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(str) ||
        recipe.description.toLowerCase().includes(str) ||
        recipe.ingredients.some((el) =>
          el.ingredient.toLowerCase().includes(str)
        )
    ));
  type === "ingredients" &&
    (result = recipes.filter((recipe) =>
      recipe.ingredients.some((el) => el.ingredient.toLowerCase().includes(str))
    ));
  type === "appliances" &&
    (result = recipes.filter((recipe) =>
      recipe.appliance.toLowerCase().includes(str)
    ));
  type === "ustensils" &&
    (result = recipes.filter((recipe) =>
      recipe.ustensils.some((el) => el.toLowerCase().includes(str))
    ));
  return result;
}
//---------------search expression--------------------
function search(type) {
  const searchMainInputValue = searchValueArray(searchInput);
  const recipes = api(); //all recipes
  let filteredRecipes = recipes;
  //
  //--------------- main search------------------------
  if (type === "main") {
    if (searchMainInputValue.length > 0) {
      for (let str of searchMainInputValue) {
        filteredRecipes = searchOneStr("main", filteredRecipes, str);
      }
      return filteredRecipes;
    } else return [];
  }
  //------------- filters ---------------------
  else {
    const tags = getSplittedTagNames(type);
    if (tags.length > 0) {
      for (let str of tags) {
        filteredRecipes = searchOneStr(type, filteredRecipes, str);
      }
      return filteredRecipes;
    } else return [];
  }
}
//-------------------RESULT-----------------------
function getSearchResult() {
  const valMain = searchValue(searchInput);
  // search axes
  const mainAxeResult = search("main");
  const ingredientsResult = search("ingredients");
  const appliancesResult = search("appliances");
  const ustensilsResult = search("ustensils");
  //-----------------------------------------------
  //verify what filter is active
  const tagTypes = getTagTypes();
  const matchAxe1 = valMain.length >= 3;
  const matchAxe2 = tagTypes.includes("ingredients");
  const matchAxe3 = tagTypes.includes("appliances");
  const matchAxe4 = tagTypes.includes("ustensils");
  //
  const data = [
    matchAxe1 ? mainAxeResult : null,
    matchAxe2 ? ingredientsResult : null,
    matchAxe3 ? appliancesResult : null,
    matchAxe4 ? ustensilsResult : null,
  ];
  //filter null arrays from data
  const newData = data.filter((arr) => arr !== null);
  //intersect mainAxe and filters
  if (newData.length === 0) {
    return [];
  } else return newData.reduce((a, b) => a.filter((c) => b.includes(c)));
}
//---------------SHOW RESULT------------------------------------
//
function createSearchResult(recipes, val) {
  const recipesWrapper = document.querySelector(".recipesWrapper");
  recipesWrapper.innerHTML = "";
  //
  const exists = recipes?.length > 0;
  //
  !exists && recipesWrapper.appendChild(new ResponseNotFound(val));
  exists &&
    recipes.forEach((recipe) => {
      const Template = new Recipe(recipe);
      recipesWrapper.appendChild(Template.createRecipe());
    });
  new RecipesQuantity(recipes); //nr recipes
}

// update search value clicking on keyword
function updateSearchValue(type, index) {
  let { input, currentItem } = args(type);
  const keys = JSON.parse(localStorage.getItem(currentItem));
  const result = keys.filter((key) => keys.indexOf(key) === index);
  input.value = result[0]; //asign a value to search input
}
// show button of clean search value
function showOrHide_X_button(type) {
  const { val, xBtn } = args(type);
  const hadShowClass = xBtn.classList.contains("show");
  val.length > 0 && xBtn.classList.add("show");
  hadShowClass && val.length === 0 && xBtn.classList.remove("show");
}
// search message for a "0" recipes result
function searchMessage(tagList) {
  const searchInput = document.querySelector("#searchMain");
  const val = searchValue(searchInput); //input mainAxe
  const tags = [];
  val.length >= 3 && tags.push(val);
  tagList?.map((tag) => tags.push(tag.name));
  return tags.join(" + ");
}

//////////////////////////////////////////////////
//--------------search by axe--------------------
function searchAxe(type) {
  let tagList;
  const { input } = args(type);
  addKey(type); //add key to list
  //--------main axe------------
  if (type === "main") {
    tagList = getTagList();
    cleanList(type);
  }
  //------filters axes-----------
  else {
    addTag(type); //add tag to list
    tagList = showTags(type); //show tag list
    toggleFilterBtn(type); // close filter button
    resetSearchValue(input); //reset input value
  }
  //result all axes
  const result = getSearchResult();
  const message = searchMessage(tagList); //if no result
  createSearchResult(result, message);
}
//////////////////////////////////////////////////
// put all events filter in one function
function axeEvents(type) {
  const { input, xBtn, searchBtn, toggleBtn } = args(type);
  //---------------------EVENTS-----------------------
  //clean search value
  xBtn?.addEventListener("click", () => {
    resetSearchValue(input);
    cleanList(type);
  });
  //show keyWords list
  input?.addEventListener("input", () => {
    showKeyWordList(type);
    showOrHide_X_button(type);
  });
  //show search result clicking on enter key
  window.addEventListener("keyup", (e) => {
    const active = document.activeElement.id === input.id;
    if (e.key === "Enter" && active) {
      searchAxe(type);
    }
  });
  //-----------------  SEARCH BUTTON ------------------------
  searchBtn?.addEventListener("click", () => searchAxe(type));
  //clicking inside input show keyword list
  input.addEventListener("focus", () => {
    showKeyWordList(type);
  });
  //open close ingredientsFilter button
  toggleBtn?.addEventListener("click", () => {
    toggleFilterBtn(type);
  });
  //show result on input
  //!!! IS NOT A GREEN CODE SOLUTION!!!
  // if(type === "main"){
  //   searchInput.addEventListener("input", () => searchAxe("main"));
  // }
}
//////////////////////////////////////////////////


export {
  updateSearchValue,
  createSearchResult,
  getSearchResult,
  searchMessage,
  searchAxe,
  axeEvents,
};
