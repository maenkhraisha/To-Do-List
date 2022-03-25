let doList = [
  {
    description: 'fix car',
    completed: true,
    index: 1,
  },
  {
    description: 'go to gym',
    completed: true,
    index: 2,
  },
  {
    description: 'coffe time',
    completed: true,
    index: 3,
  },
  {
    description: 'shopping',
    completed: true,
    index: 4,
  },
  {
    description: 'read quran',
    completed: true,
    index: 5,
  },
];

const del = (index) => { doList = doList.filter((e) => e.index !== index); };
const add = (item) => doList.push(item);
function getList() {
  return doList;
}
export default { add, getList, del };