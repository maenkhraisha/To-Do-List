import { getStatus } from './meme-object.js';

const parentUL = document.querySelector('.list');

const creatElements = (desc, index) => {
  const elLi = document.createElement('li');
  const elText = document.createElement('p');
  const elCheckBox = document.createElement('INPUT');
  const hLine = document.createElement('hr');
  const elIcon = document.createElement('box-icon');

  elCheckBox.setAttribute('type', 'checkbox');
  elCheckBox.setAttribute('id', index);
  elCheckBox.className = 'checkbox';
  elText.innerText = desc;
  if (getStatus(index - 1)) {
    elText.style.textDecoration = 'line-through';
    elCheckBox.checked = true;
  }
  elIcon.setAttribute('name', 'dots-vertical-rounded');
  elIcon.className = 'li-edit-icon';
  elIcon.setAttribute('id', index);
  elLi.setAttribute('draggable', 'true');
  elLi.className = 'drag-item';

  elLi.appendChild(elCheckBox);
  elLi.appendChild(elText);
  elLi.appendChild(elIcon);
  elLi.appendChild(hLine);
  parentUL.appendChild(elLi);
};

export default { creatElements };