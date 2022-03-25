import './style.css';
import 'boxicons';
import { getList } from './module/meme-object.js';
import dom from './module/add-Dom-elem.js';
import _ from './module/crud.js';

getList().forEach((element) => {
  dom.creatElements(element.description, element.index);
});