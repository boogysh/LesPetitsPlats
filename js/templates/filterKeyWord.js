export default class FilterKeyWord {
  constructor(type, key, index) {
    this.type = type;
    this.key = key;
    this.index = index;
    //
    //create
    const wrapper = document.createElement("li");
    const keyBtn = document.createElement("button");
    const deleteKeyBtn = document.createElement("button");
    const deleteIcon = document.createElement("img");
    //
    //-------ADD PROPERTYS & CLASSES -------------
    wrapper.classList.add("keyFilter");
    //text
    keyBtn.classList.add("keyFilterBtn");
    keyBtn.innerHTML = this.key;
    //delete key
    deleteKeyBtn.classList.add("closeKeyWordFilter");
    deleteIcon.classList.add("closeKeyWordFilterImg");
    //delete key icon
    deleteIcon.src = "/assets/closeKey.png";
    deleteIcon.alt = "delete keyword";
    //----------------APPEND----------------------
    deleteKeyBtn.append(deleteIcon);
    wrapper.append(keyBtn, deleteKeyBtn);
    return wrapper;
  }
}

/* <li class="keyFilter">
<button class="keyFilterBtn">Jus de citron</button>
<button class="closeKeyWordFilter">
  <img
    class="closeKeyWordFilterImg"
    src="/assets/closeTag.png"
    alt="delete keyword"
  />
</button>
</li> */
