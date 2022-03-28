let memeList = [];
// === set local storage === //
const setLocal = () => localStorage.setItem('memelist', JSON.stringify(memeList));
// ==================== //
// === get local storage === //
const getLocal = () => JSON.parse(localStorage.getItem('memelist'));
// ==================== //
// === update the index values when delete an item === //
const updateindex = () => {
  memeList.forEach((element, index) => {
    element.index = index + 1;
  });
};
// ============================= //
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
  add, del, getLocal, getLen, updateindex,
};