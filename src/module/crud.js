import { add, del, getLen } from './meme-object.js';
import dom from './add-Dom-elem.js';

const btnInsert = document.getElementById('insert');
const inputText = document.getElementById('add-text');
const btnDelete = document.getElementById('btn-clear');

btnInsert.addEventListener('click', () => {
  add(inputText.value);
  inputText.value = '';
  dom.creatElements(inputText.value, getLen());
});

btnDelete.addEventListener('click', () => {
  const checkboxlist = document.querySelectorAll('.checkbox');
  checkboxlist.forEach((element) => {
    if (element.checked === true) del(element.getAttribute('id'));
  });
});

// checkbox.addEventListener('change', (event) => {
//   event.target.value = 'select';
// });