const func = require('../__mocks__/meme-object.js');

// test add item
test('work', () => {
  expect(func.add('wach car'))
    .toEqual({ description: 'wach car', completed: false, index: 1 });
  func.flushStorage([]);
});

// test delete item
describe('test delete', () => {
  test('work', () => {
    expect(func.add('Read Book'))
      .toEqual({ description: 'Read Book', completed: false, index: 1 });
  });

  test('work', () => {
    expect(func.del(1))
      .toBe(0);
    func.flushStorage([]);
  });
});

// test update index
describe('test delete', () => {
  test('add first item', () => {
    expect(func.add('item 1'))
      .toEqual({ description: 'item 1', completed: false, index: 1 });
  });
  test('add second item', () => {
    expect(func.add('item 2'))
      .toEqual({ description: 'item 2', completed: false, index: 2 });
  });
  test('add third item', () => {
    expect(func.add('item 3'))
      .toEqual({ description: 'item 3', completed: false, index: 3 });
  });
  test('delete second item', () => {
    expect(func.del(2))
      .toBe(2);
  });
  test('update index after delete', () => {
    expect(func.updateindex())
      .toEqual([
        { description: 'item 1', completed: false, index: 1 },
        { description: 'item 3', completed: false, index: 2 },
      ]);
    func.flushStorage([]);
  });
});

// update text
describe('test update item text', () => {
  test('add item', () => {
    expect(func.add('clean clothes'))
      .toEqual({ description: 'clean clothes', completed: false, index: 1 });
  });
  test('update text', () => {
    expect(func.updateText(1, 'dont clean'))
      .toEqual('dont clean');
    func.flushStorage([]);
  });
});

// update status
describe('test delete', () => {
  test('add first item', () => {
    expect(func.add('item 1'))
      .toEqual({ description: 'item 1', completed: false, index: 1 });
  });
  test('add second item', () => {
    expect(func.add('item 2'))
      .toEqual({ description: 'item 2', completed: false, index: 2 });
  });
  test('add third item', () => {
    expect(func.add('item 3'))
      .toEqual({ description: 'item 3', completed: false, index: 3 });
  });
  test('update status ', () => {
    expect(func.completedStatus(1))
      .toEqual([
        { description: 'item 1', completed: true, index: 1 },
        { description: 'item 2', completed: false, index: 2 },
        { description: 'item 3', completed: false, index: 3 },
      ]);
    func.flushStorage([]);
  });
});
// // === get meme list === //
// const getLen = () => getLocal().length;

// // === get the status === //
// const getStatus = (id) => {
//   memeList = getLocal();
//   return memeList[id].completed;
// };