const parentUL = document.querySelector('.list');

const creatElements = (desc) => {
  const el = document.createElement('p');
  el.innerText = desc;
  parentUL.appendChild(el);
};

export default { creatElements };