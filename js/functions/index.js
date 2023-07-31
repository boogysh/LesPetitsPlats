import { axeEvents, createSearchResult } from "./searchFunctions.js";
import { showKeyWordList, cleanList } from "./keysFunctions.js";
import api from "../data/api.js";
import { showHideTagsTitle } from "../utils/utils.js";

function main() {
  axeEvents("main");
  axeEvents("ingredients");
  axeEvents("appliances");
  axeEvents("ustensils");
}
main();

//show all recipes on loading page
window.onload = () => {
  const recipes = api();
  createSearchResult(recipes, "");
  localStorage.removeItem("tags");
};
//
//--------MAIN AXE-----------
//clicking inside input show keyword list
searchMain.addEventListener("focus", () => {
  showKeyWordList("main");
});
//close keyWordList clicking outside
window.onclick = function (e) {
  const myBox = document.getElementById("searchWrapper");
  e.target.contains(myBox) && e.target !== myBox && cleanList("main");
};
//show tags title in responsive
window.addEventListener("resize", showHideTagsTitle);
