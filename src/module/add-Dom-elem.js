const parentUL = document.querySelector('.list');

const creatElements = (desc, index) => {
  const elLi = document.createElement('li');
  const elText = document.createElement('p');
  const elCheckBox = document.createElement('INPUT');
  const hLine = document.createElement('hr');
  // contenteditable="true"
  elCheckBox.setAttribute('type', 'checkbox');
  elCheckBox.setAttribute('id', index);
  elCheckBox.className = 'checkbox';
  elCheckBox.className = 'checkbox';
  elText.innerText = desc;
  elText.setAttribute('contenteditable', 'true');

  elLi.appendChild(elCheckBox);
  elLi.appendChild(elText);
  elLi.appendChild(hLine);
  parentUL.appendChild(elLi);
};

export default { creatElements };