import { deleteTag, showTags } from "../functions/keysFunctions.js";
import {
  createSearchResult,
  getSearchResult,
  searchMessage,
} from "../functions/searchFunctions.js";
import api from "../data/api.js";
import { args,showHideTagsTitle } from "../utils/utils.js";
export default class Tag {
  constructor(tag, index) {
    this.tag = tag;
    this.index = index;
    //
    //crete
    const wrapper = document.createElement("article");
    const description = document.createElement("span");
    const deleteTagBtn = document.createElement("button");
    const deleteIcon = document.createElement("img");
    //
    //-------------------EVENTS--------------------
    //delete tag
    deleteTagBtn.addEventListener("click", () => {
      const { val } = args("main");
      const allRecipes = api();
      deleteTag("tags", this.index);
      const tagList = showTags();
      showHideTagsTitle();

      if (tagList.length === 0 && val.length === 0) {
        createSearchResult(allRecipes);
      } else {
        const result = getSearchResult();
        console.log("result", result);
        const message = searchMessage(tagList); //if no result
        createSearchResult(result, message);
      }
    });
    //-------ADD PROPERTYS & CLASSES -------------
    wrapper.classList.add("tag");
    //text
    description.classList.add("tagDescription");
    description.innerHTML = this.tag;
    //delete tag
    deleteTagBtn.classList.add("deleteTag");
    //delete tag icon
    deleteIcon.classList.add("deleteTagImg");
    deleteIcon.src = "/assets/closeBlack.png";
    deleteIcon.alt = "delete tag";
    //----------------APPEND----------------------
    deleteTagBtn.append(deleteIcon);
    wrapper.append(description, deleteTagBtn);
    return wrapper;
  }
}

//   <article class="tag">
//   <span class="tagDescription">Crème de coco</span>
//   <button id="closeTagIngredients">
//     <img
//       class="closeTagImg"
//       src="/assets/closeBlack.png"
//       alt="close tag"
//     />
//   </button>
// </article>
