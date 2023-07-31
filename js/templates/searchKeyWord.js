export default class MainKeyWord {
  constructor(type, key, index) {
    this.type = type;
    this.key = key;
    this.index = index;
    //crete
    const wrapper = document.createElement("li");
    const searchKeyImg = document.createElement("img");
    const mainKeyText = document.createElement("p");
    const searchKeyBtn = document.createElement("button");
    const deleteKeyBtn = document.createElement("button");
    const closeIcon = document.createElement("img");
    //
    
    //-------ADD PROPERTYS & CLASSES -------------
    //wrapper
    wrapper.classList.add("mainKey");
    //search icon
    searchKeyImg.src = "/assets/searchBlack.png";
    searchKeyImg.alt = "search tag icon";
    searchKeyImg.classList.add("searchKeyImg");
    //text
    mainKeyText.classList.add("mainKeyText");
    mainKeyText.innerHTML = this.key;
    //searchTagButton
    searchKeyBtn.classList.add("searchKeyBtn");
    //close button icon
    closeIcon.src = "/assets/closeKey.png";
    closeIcon.alt = "delete tag button";
    closeIcon.classList.add("mainKeyCloseBtn");
    //
    //----------------APPEND----------------------
    searchKeyBtn.append(searchKeyImg, mainKeyText);
    deleteKeyBtn.append(closeIcon);
    wrapper.append(searchKeyBtn, closeIcon);
    return wrapper;
  }
}

/* <li class="mainTag">
  <button class="searchKeyBtn">
    <img class="searchKeyImg" src="/assets//searchBlack.png" alt="" />
    <p class="mainKeyText">limzzz</p>
  </button>
  <button>
    <img
      class="closeIcon"
      src="/assets/closeTag.png"
      alt="delete tag button"
    />
  </button>
</li>; */
