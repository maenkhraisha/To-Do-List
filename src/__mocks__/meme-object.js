const func = require('./storage.js');

let memeList = [];
const add = (item) => {
  memeList = func.getLocal();
  const len = memeList.length;
  const obj = { description: item, completed: false, index: len + 1 };
  memeList.push(obj);
  func.setLocal(memeList);
  return obj;
};
const del = (index) => {
  index = Number(index);
  memeList = func.getLocal();
  memeList = memeList.filter((e) => e.index !== index);
  func.setLocal(memeList);
  return memeList.length;
};
const updateindex = () => {
  memeList = func.getLocal();
  memeList.forEach((element, index) => {
    element.index = parseInt(index, 10) + 1;
    func.setLocal(memeList);
  });
  return memeList;
};
const flushStorage = () => {
  memeList = [];
  func.setLocal(memeList);
};
const updateText = (id, text) => {
  memeList = func.getLocal();
  id -= 1;
  memeList[id].description = text;
  func.setLocal(memeList);
  return memeList[id].description;
};
const completedStatus = (id) => {
  memeList = func.getLocal();
  id -= 1;
  memeList[id].completed = !memeList[id].completed;
  func.setLocal(memeList);
  return memeList;
};

module.exports = {
  add, flushStorage, del, updateindex, updateText, completedStatus,
};
