let mockData = [
  {
    _id: `0f68d9b`,
    content: `죠르디 수건 사기`,
    isCompleted: true,
    isEditing: false
  },
  {
    _id: `0f68d9d`,
    content: `죠르디 케이스 사기`,
    isCompleted: true,
    isEditing: false
  },
  {
    _id: `0f68d9f`,
    content: `죠르디 핸디 선풍기 사기`,
    isCompleted: false,
    isEditing: false
  },
  {
    _id: `1f68d9A`,
    content: `죠르디 양말 선물하기`,
    isCompleted: false,
    isEditing: false
  },
];

const idGenerator = (() => {
  let startId = 1000000
  return () => (++startId).toString()
})()

export default {
  getTodoList() {
    return mockData
  },
  add(content) {
    mockData.push({_id: idGenerator(), content, isCompleted: false, isEditing: false})
  },
  toggle(newItem) {
    let index = mockData.findIndex(item => item._id === newItem._id);
    mockData.splice(index, 1, newItem)
  },
  delete(id) {
    mockData = mockData.filter(item => item._id !== id)
  }
}