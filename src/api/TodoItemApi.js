import mockData from "../model/TodoItemMockData.js";

const idGenerator = (() => {
  let startId = 1000000;
  return () => (++startId).toString();
})();

export default {
  getTodoList() {
    return new Promise(res => setTimeout(() => res(mockData), 1000));
  },
  add(content) {
    return new Promise(res =>
      setTimeout(() => {
        const createdId = idGenerator();
        mockData.push({ _id: createdId, content, isCompleted: false });
        res(createdId);
      }, 1000)
    );
  },
  update(newItem) {
    return new Promise(res =>
      setTimeout(() => {
        const index = mockData.findIndex(item => item._id === newItem._id);
        mockData.splice(index, 1, newItem);
        res(newItem._id);
      }, 800)
    );
  },
  delete(id) {
    return new Promise(res =>
      setTimeout(() => {
        const index = mockData.findIndex(item => item._id === id);
        mockData.splice(index, 1);
        res();
      }, 1000)
    );
  }
};
