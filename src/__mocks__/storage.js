let meme = [];
// === set local storage === //
const setLocal = (memeList) => {
  meme = memeList;
};

// === get local storage === //
const getLocal = () => meme;

module.exports = { setLocal, getLocal };