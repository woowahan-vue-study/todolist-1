export default {
  selectedItem(state) {
    if (state.selectedState === 'all') {
      return state.items
    }
    if (state.selectedState === 'unCompleted') {
      return state.items.filter(item => !item.isCompleted)
    }
    return state.items.filter(item => item.isCompleted)
  },
  selectedCount(state, getters) {
    return getters.selectedItem.length
  },
  selectedState(state) {
    return state.selectedState
  }
}