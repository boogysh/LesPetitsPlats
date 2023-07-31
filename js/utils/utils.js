// truncate string
import { getTagList } from "../functions/keysFunctions.js";
export function truncateStr(str, num) {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
export function truncDescription(str, num) {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
// open or close filter button
export function toggleFilterBtn(type) {
  const { content, arrow } = args(type);
  content.classList.toggle("open");
  arrow?.classList.toggle("rotate");
}

export function closeFilterBtn(type) {
  const { content, arrow } = args(type);
  content.classList.remove("open");
  arrow?.classList.remove("rotate");
}

//delete duplicaate
export function filterDuplicates(arr) {
  const unique = arr.filter(
    (obj, index) => arr.findIndex((item) => item.id === obj.id) === index
  );
  return unique;
}
//show modale
export function showModal(template) {
  const bgModal = document.querySelector(".bgModal");
  const modalWrapper = document.querySelector(".modalWrapper");
  bgModal?.classList.add("showModal");
  modalWrapper.innerHTML = "";
  modalWrapper?.append(template);
}
export function closeModal() {
  const bgModal = document.querySelector(".bgModal");
  bgModal?.classList.remove("showModal");
}
export function showHideTagsTitle() {
  const title = document.querySelector("#tagsTitle");
  const tags = getTagList();
  console.log("tags", tags);

  if (
    window.innerWidth < 767 &&
    window.innerWidth > 419 &&
    (tags.length === 0 || tags === null)
  ) {
    title.style.display = "block";
  } else if (window.innerWidth < 420) {
    title.style.display = "none";
  } else {
    title.style.display = "none";
  }
}

//-----------------------------------------
//reduce parameter numbers
function args(type) {
  const mainInput = document.querySelector("#searchMain");
  const ingredientsInput = document.querySelector("#ingredientsInput");
  const appliancesInput = document.querySelector("#appliancesInput");
  const ustensilsInput = document.querySelector("#ustensilsInput");
  const keyWordsWrapper = document.querySelector(".keyWords");
  const ingredientsKeysWrapper = document.querySelector("#keyListIngredients");
  const appliancesKeysWrapper = document.querySelector(
    "#appliancesKeysWrapper"
  );
  const ustensilsKeysWrapper = document.querySelector("#ustensilsKeysWrapper");
  const ingredientsContent = document.querySelector("#ingredientsContent");
  const appliancesContent = document.querySelector("#appliancesContent");
  const ustensilsContent = document.querySelector("#ustensilsContent");
  const ingredientsArrow = document.querySelector("#ingredientsArrow");
  const appliancesArrow = document.querySelector("#appliancesArrow");
  const ustensilsArrow = document.querySelector("#ustensilsArrow");
  const cleanIngredientsValueBtn = document.querySelector(
    ".cleanSearchIngredientsBtn"
  );
  const cleanAppliancesValueBtn = document.querySelector(
    ".cleanAppliancesValueBtn"
  );
  const cleanUstensilsValueBtn = document.querySelector(
    ".cleanUstensilsValueBtn"
  );
  const cleanSearchValueBtn = document.querySelector(".cleanSearchMain");
  //
  const searchIngredientsBtn = document.querySelector(".searchIngredientsBtn");
  const toggleIngredients = document.querySelector("#toggleIngredients");
  const searchAppliancesBtn = document.querySelector(".searchAppliancesBtn");
  const toggleAppliances = document.querySelector("#toggleAppliances");
  const searchUstensilsBtn = document.querySelector(".searchUstensilsBtn");
  const toggleUstensils = document.querySelector("#toggleUstensils");
  const searchMainBtn = document.querySelector(".searchBtn");

  let input,
    val,
    item,
    currentItem,
    keysWrapper,
    content,
    arrow,
    xBtn,
    searchBtn,
    toggleBtn;
  if (type === "main") {
    input = mainInput;
    val = mainInput.value;
    item = "keysMain";
    currentItem = "currentKeysMain";
    keysWrapper = keyWordsWrapper;
    // content
    // arrow
    xBtn = cleanSearchValueBtn;
    //toggleBtn
    searchBtn = searchMainBtn;
  } else if (type === "ingredients") {
    input = ingredientsInput;
    val = ingredientsInput.value;
    item = "keysIngredients";
    currentItem = "currentKeysIngredients";
    keysWrapper = ingredientsKeysWrapper;
    content = ingredientsContent;
    arrow = ingredientsArrow;
    xBtn = cleanIngredientsValueBtn;
    searchBtn = searchIngredientsBtn;
    toggleBtn = toggleIngredients;
  } else if (type === "appliances") {
    input = appliancesInput;
    val = appliancesInput.value;
    item = "keysAppliances";
    currentItem = "currentKeysAppliances";
    keysWrapper = appliancesKeysWrapper;
    content = appliancesContent;
    arrow = appliancesArrow;
    xBtn = cleanAppliancesValueBtn;
    searchBtn = searchAppliancesBtn;
    toggleBtn = toggleAppliances;
  } else if (type === "ustensils") {
    input = ustensilsInput;
    val = ustensilsInput.value;
    item = "keysUstensils";
    currentItem = "currentKeysUstensils";
    keysWrapper = ustensilsKeysWrapper;
    content = ustensilsContent;
    arrow = ustensilsArrow;
    xBtn = cleanUstensilsValueBtn;
    searchBtn = searchUstensilsBtn;
    toggleBtn = toggleUstensils;
  }
  return {
    input,
    val,
    item,
    currentItem,
    keysWrapper,
    content,
    arrow,
    xBtn,
    searchBtn,
    toggleBtn,
  };
}

export { args };

///////////////////////////////////////////////////////
// //show the focused element
// document.addEventListener("focusout", (ev) => {
//   console.log(ev.relatedTarget);
// });

// //delete accents
// function remove_accents(strAccents) {
//   strAccents = strAccents.split("");
//   let strAccentsOut = new Array();
//   const strAccentsLen = strAccents.length;
//   const accents =
//     "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëÇçðÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
//   const accentsOut =
//     "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeCcdDIIIIiiiiUUUUuuuuNnSsYyyZz";
//   for (var y = 0; y < strAccentsLen; y++) {
//     if (accents.indexOf(strAccents[y]) != -1) {
//       strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
//     } else strAccentsOut[y] = strAccents[y];
//   }
//   strAccentsOut = strAccentsOut.join("");

//   return strAccentsOut;
// }
// const str = "éàèùç";
// const www = remove_accents(str);
// console.log("www", www);
