export const FILTER = {
  ALL: {
    id: 1,
    class: "all",
    text: "전체보기",
    link: "#/",
  },
  ACTIVE: {
    id: 2,
    class: "active",
    text: "해야할일",
    link: "#/active",
  },
  COMPLETED: {
    id: 3,
    class: "completed",
    text: "완료한 일",
    link: "#/completed",
  },
  of: (filterId) => {
      return Object.values(FILTER).find(({id}) => filterId === id);
  }
};

export const BASE_URL = "https://todo-api.roto.codes/rutgo2/";