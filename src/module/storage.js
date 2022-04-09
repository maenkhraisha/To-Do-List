// === set local storage === //
const setLocal = (memeList) => localStorage.setItem('memelist', JSON.stringify(memeList));

// === get local storage === //
const getLocal = () => {
  const data = JSON.parse(localStorage.getItem('memelist'));
  if (data !== null) {
    return data;
  }
  return [];
};

export { setLocal, getLocal };