export const BASE_URL = "https://todo-api.roto.codes";

export const USER_NAMES = {
  DONGLE: "dongle",
  EASTJUN: "eastjun"
};

export const FilterType = {
  ALL: {
    className: "all",
    link: "#",
    predicate: item => item,
    text: "전체보기"
  },
  ACTIVE: {
    className: "active",
    link: "#active",
    predicate: item => !item.isCompleted,
    text: "해야할 일"
  },
  COMPLETED: {
    className: "completed",
    link: "#completed",
    predicate: item => item.isCompleted,
    text: "완료한 일"
  }
};
