import { add, del, getLen } from './meme-object.js';
import dom from './add-Dom-elem.js';

const inputText = document.getElementById('add-text');

const btnInsert = () => {
  add(inputText.value);
  inputText.value = '';
  dom.creatElements(inputText.value, getLen());
};

const btnDelete = () => {
  const checkboxlist = document.querySelectorAll('.checkbox');
  checkboxlist.forEach((element) => {
    if (element.checked === true) del(element.getAttribute('id'));
  });
};

export default { btnInsert, btnDelete };