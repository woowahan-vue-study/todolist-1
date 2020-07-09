export const FilterType = {
  ALL: {
    className: "all",
    link: "#",
    filter: item => item
  },
  ACTIVE: {
    className: "active",
    link: "#active",
    filter: item => !item.isCompleted
  },
  COMPLETED: {
    className: "completed",
    link: "#completed",
    filter: item => item.isCompleted
  }
};
