
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
