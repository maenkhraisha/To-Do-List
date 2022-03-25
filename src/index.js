import './style.css';
import 'boxicons';
import { getList } from './module/meme-object.js';
import dom from './module/add-Dom-elem.js';
import d from './module/crud.js';

const domBtnInsert = document.getElementById('insert');
const domBtnDelete = document.getElementById('btn-clear');

getList().forEach((element) => {
  dom.creatElements(element.description, element.index);
});

domBtnInsert.addEventListener('click', () => {
  d.btnInsert();
});
domBtnDelete.addEventListener('click', () => {
  d.btnDelete();
});
