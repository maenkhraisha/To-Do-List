let memeList = [];
// === set local storage === //
const setLocal = () => {
  const data = localStorage.setItem('memelist', JSON.stringify(memeList));
  if (data !== null) {
    return data;
  }
  return [];
};
// ==================== //
// === get local storage === //
const getLocal = () => JSON.parse(localStorage.getItem('memelist'));
// ==================== //
// === update the index values when delete an item === //
const updateindex = () => {
  memeList.forEach((element, index) => {
    element.index = parseInt(index, 10) + 1;
    setLocal();
  });
};
// ============================= //
// === update the meme text value === //
const updateText = (id, text) => {
  memeList = getLocal();
  id -= 1;
  memeList[id].description = text;
  setLocal();
};
// ================================== //
// === delete item from meme === //
const del = (index) => {
  index = Number(index);
  memeList = getLocal();
  memeList = memeList.filter((e) => e.index !== index);
  setLocal();
};
// ==================== //
// === add new meme === //
const add = (item) => {
  memeList = getLocal();
  const len = memeList.length;
  const obj = { description: item, completed: false, index: len + 1 };
  memeList.push(obj);
  setLocal();
};
// ==================== //
// === get meme list === //
const getLen = () => getLocal().length;
// ==================== //

export {
  add, del, getLocal, getLen, updateindex, updateText,
};