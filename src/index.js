import './style.css';
import 'boxicons';
import { getList } from './module/meme-object.js';
import dom from './module/add-Dom-elem.js';
import d from './module/crud.js';

const domBtnInsert = document.getElementById('insert');
const domBtnDelete = document.getElementById('btn-clear');

// === display the list === //
getList().forEach((element) => {
  dom.creatElements(element.description, element.index);
});
// ======================== //
// === add new item === //
domBtnInsert.addEventListener('click', () => {
  d.btnInsert();
});
// ==================== //
// === delete item or multiple items === //
domBtnDelete.addEventListener('click', () => {
  d.btnDelete();
});
// ===================================== //
// === event when check the box === //
const cbList = document.querySelectorAll('[type="checkbox"]');
cbList.forEach.call(cbList, (cb) => {
  cb.addEventListener('click', function () {
    if (cb.checked) this.nextElementSibling.style.textDecoration = 'line-through';
    else this.nextElementSibling.style.textDecoration = 'none';
  });
});
// ================================ //