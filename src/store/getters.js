export default {
  selectedItem(state) {
    return state.items.filter(item => state.filterType.filter(item));
  },
  selectedCount(state, getters) {
    return getters.selectedItem.length;
  },
  selectedFilterType(state) {
    return state.filterType;
  }
};
