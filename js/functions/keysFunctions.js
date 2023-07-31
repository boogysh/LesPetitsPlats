import { args, showHideTagsTitle } from "../utils/utils.js";
import Tag from "../templates/tag.js";
import SearchKeyWord from "../templates/searchKeyWord.js";
import FilterKeyWord from "../templates/filterKeyWord.js";

//----------------KEYWORDS-----------------------
//
//get keywords - used onclick of search button
function addKey(type) {
  let keyList = [];
  const { val, item } = args(type);
  const keys = JSON.parse(localStorage.getItem(item));
  keys !== null && keys !== undefined && (keyList = keys);
  const exist = keyList.includes(val);
  !exist && val.length >= 3 && keyList.unshift(val);
  localStorage.setItem(item, JSON.stringify(keyList));
  return keyList;
}
//emty tag list onload page
window.onload = () => {
  localStorage.removeItem("tags");
};
//
function addTag(type) {
  let tagList = [];
  const { val } = args(type);
  const tags = JSON.parse(localStorage.getItem("tags"));
  tags !== null && tags !== undefined && (tagList = tags);
  const exists = tagList.some((el) => el.name === val);
  !exists && tagList.push({ name: val, type: type });
  localStorage.setItem("tags", JSON.stringify(tagList));
  return tagList;
}
function getTagList() {
  const tagList = JSON.parse(localStorage.getItem("tags"));
  return tagList;
}
function getSplittedTagNames(type) {
  const tags = [];
  const tagList = getTagList();
  const filteredTags = tagList?.filter((tag) => tag.type === type);
  filteredTags?.forEach((tag) => {
    const name = tag.name.split(" ");
    name.map((el) => tags.push(el));
  });
  return tags;
}
function getTagTypes() {
  const types = [];
  const tagList = getTagList();
  tagList?.map((tag) => {
    const exists = types.includes(tag.type);
    !exists && types.push(tag.type);
  });
  return types;
}

function showKeyWordList(type) {
  const { val, item, currentItem, keysWrapper } = args(type);
  //clean keyList before creating to avoid duplicates
  cleanList(type);
  //
  const keys = JSON.parse(localStorage.getItem(item));
  const result = keys?.filter((key) =>
    key?.toLowerCase().includes(val?.toLowerCase())
  );
  if (type === "main") {
    const currentKeys = result?.slice(0, 10);
    localStorage.setItem(currentItem, JSON.stringify(currentKeys));
    val?.length >= 3 &&
      currentKeys?.forEach((key, index) => {
        keysWrapper.appendChild(new SearchKeyWord(type, key, index));
      });
  } else {
    let currentKeys;
    val?.length === 0 && (currentKeys = keys?.slice(0, 6));
    val?.length > 0 && (currentKeys = result?.slice(0, 6));
    localStorage.setItem(currentItem, JSON.stringify(currentKeys));
    currentKeys?.forEach((key, index) => {
      keysWrapper.appendChild(new FilterKeyWord(type, key, index));
    });
  }
}
//

function cleanList(type) {
  const { keysWrapper } = args(type);
  keysWrapper.innerHTML = "";
}
//delete key word
function deleteKeyWord(type, index) {
  const { item, currentItem } = args(type);
  //get current keyWords
  const keys = JSON.parse(localStorage.getItem(currentItem));
  const keyToDelete = keys.filter((key) => keys.indexOf(key) === index);
  //get fullList of keyWords
  const storedKeys = JSON.parse(localStorage.getItem(item));
  //filter deleted keyWord from keyWords fullList
  const updatedKeys = storedKeys.filter((key) => key !== keyToDelete[0]);
  //update keyWords fullList to locaStorage
  localStorage.setItem(item, JSON.stringify(updatedKeys));
}
//deleteTag
function deleteTag(item, index) {
  const tags = JSON.parse(localStorage.getItem(item));
  const tagToDelete = tags.filter((tag) => tags.indexOf(tag) === index);
  const updatedTags = tags.filter((tag) => tag !== tagToDelete[0]);
  localStorage.setItem(item, JSON.stringify(updatedTags));
}
// show Tags  (item = localStorage tagItem)
function showTags() {
  showHideTagsTitle();
  const tagsWrapper = document.querySelector(".tags");
  //empty tags Section to avoid the duplicates
  tagsWrapper.innerHTML = "";
  // get tags from LocalStorage
  const storedTags = JSON.parse(localStorage.getItem("tags"));
  //show tag
  storedTags?.forEach((tag, index) => {
    tagsWrapper.appendChild(new Tag(tag.name, index));
  });
  return storedTags;
}

export {
  cleanList,
  showKeyWordList,
  deleteKeyWord,
  addKey,
  addTag,
  showTags,
  deleteTag,
  getTagList,
  getSplittedTagNames,
  getTagTypes,
};

