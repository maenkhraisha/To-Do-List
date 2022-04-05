import './style.css';
import 'boxicons';
import {
  completedStatus,
  del, getLocal, updateindex, updateText,
} from './module/meme-object.js';
import dom from './module/add-Dom-elem.js';
import d from './module/crud.js';

const domBtnInsert = document.getElementById('insert');
const domBtnDelete = document.getElementById('btn-clear');
const inputText = document.getElementById('add-text');

// === display the list === //
getLocal().forEach((element) => {
  dom.creatElements(element.description, element.index);
});
// ======================== //
// === add new item === //
domBtnInsert.addEventListener('click', () => {
  d.btnInsert();
});
// === delete item or multiple items === //
domBtnDelete.addEventListener('click', () => {
  d.btnDelete();
  updateindex();
  window.location.reload();
});
// === event when check the box === //
const cbList = document.querySelectorAll('[type="checkbox"]');
cbList.forEach.call(cbList, (cb) => {
  cb.addEventListener('click', function () {
    if (cb.checked) {
      this.nextElementSibling.style.textDecoration = 'line-through';
      completedStatus(cb.id);
    } else {
      this.nextElementSibling.style.textDecoration = 'none';
      completedStatus(cb.id);
    }
  });
});
// === action when click option icon === //
const icList = document.querySelectorAll('.li-edit-icon');
icList.forEach.call(icList, (ic) => {
  ic.addEventListener('click', () => {
    if (ic.getAttribute('name') === 'trash') {
      del(ic.id);
      updateindex();
      window.location.reload();
    } else {
      ic.setAttribute('name', 'trash');
      ic.parentElement.childNodes[1].setAttribute('contenteditable', 'true');
      ic.parentElement.childNodes[1].focus();
      ic.parentElement.style.backgroundColor = '#f0c5e1';
    }
    ic.parentElement.childNodes[1].addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        updateText(ic.id, ic.parentElement.childNodes[1].innerText);
        ic.setAttribute('name', 'dots-vertical-rounded');
        ic.parentElement.childNodes[1].blur();
        ic.parentElement.childNodes[1].setAttribute('contenteditable', 'false');
        ic.parentElement.style.backgroundColor = '#fff';
      }
    });
  });
});
// ==== add new meme when press enter === //
inputText.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    domBtnInsert.click();
  }
});
// ==== add new meme when press enter === //
document.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    window.location.reload();
  }
});
// === drag and drop 
function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

function handleDragEnd(e) {
  e.target.classList.remove('move');
}
function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

function drop(e) {
  e.target.classList.remove('drag-over');

  // get the draggable element
  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  // add it to the drop target
  e.target.appendChild(draggable);

  // display the draggable element
  draggable.classList.remove('hide');
}
const items = document.querySelectorAll('.drag-item');
items.forEach((item) => {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragend', handleDragEnd);
  item.addEventListener('dragenter', dragEnter);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('dragleave', dragLeave);
  item.addEventListener('drop', drop);
  // dragstart, dragover, drop
});