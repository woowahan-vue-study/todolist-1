export const FILTER = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
  of: function (target) {
    return Object.values(this)
      .filter((value) => target.classList.contains(value))
      .join();
  },
};
