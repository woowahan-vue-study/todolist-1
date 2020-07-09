export const FilterType = {
  ALL: {
    className: "all",
    link: "#",
    filter: item => item,
    text: "전체보기"
  },
  ACTIVE: {
    className: "active",
    link: "#active",
    filter: item => !item.isCompleted,
    text: "해야할 일"
  },
  COMPLETED: {
    className: "completed",
    link: "#completed",
    filter: item => item.isCompleted,
    text: "완료한 일"
  }
};
