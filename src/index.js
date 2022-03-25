import './style.css';
import 'boxicons';
import list from './module/do-object.js';
import Dom from './module/Dom-Func.js';

list.getList().forEach((element) => {
  Dom.creatElements(element.description);
});