const parentUL = document.querySelector('.list');

const creatElements = (desc) => {
  const elLi = document.createElement('li');
  const elText = document.createElement('p');
  const elCheckBox = document.createElement('INPUT');
  const hLine = document.createElement('hr');
  elCheckBox.setAttribute('type', 'checkbox');
  elText.textContent = desc;
  elCheckBox.className = 'checkbox';

  elLi.appendChild(elCheckBox);
  elLi.appendChild(elText);
  elLi.appendChild(hLine);
  parentUL.appendChild(elLi);
};

export default { creatElements };