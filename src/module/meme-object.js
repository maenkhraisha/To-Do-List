import { getLocal, setLocal } from './storage.js';

let memeList = [];

// === update the index values when delete an item === //
const updateindex = () => {
  memeList = getLocal();
  memeList.forEach((element, index) => {
    element.index = parseInt(index, 10) + 1;
    setLocal(memeList);
  });
};

// === update the meme text value === //
const updateText = (id, text) => {
  memeList = getLocal();
  id -= 1;
  memeList[id].description = text;
  setLocal(memeList);
};

// === delete item from meme === //
const del = (index) => {
  index = Number(index);
  memeList = getLocal();
  memeList = memeList.filter((e) => e.index !== index);
  setLocal(memeList);
};

// === add new meme === //
const add = (item) => {
  memeList = getLocal();
  const len = memeList.length;
  const obj = { description: item, completed: false, index: len + 1 };
  memeList.push(obj);
  setLocal(memeList);
};

// === get meme list === //
const getLen = () => getLocal().length;

// === toggle status completed from true to false === //
const completedStatus = (id) => {
  memeList = getLocal();
  id -= 1;
  memeList[id].completed = !memeList[id].completed;
  setLocal(memeList);
};

// === get the status === //
const getStatus = (id) => {
  memeList = getLocal();
  return memeList[id].completed;
};

export {
  add, del, getLen, updateindex, updateText, completedStatus, getStatus,
};
