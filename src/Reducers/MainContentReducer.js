function MainContentReducer(state, action) {
  switch (action.type) {
    case 'GET-PHOTO-LIST':
      return { ...state, photosList: action.photosList };
    case 'GET-TOPIC-LIST':
      return { ...state, topicList: action.topicList };
    case 'SEARCH-PHOTO-LIST':
      return { ...state, searchVal: action.searchVal };
    case 'GET-MORE-PHOTO':
      return { ...state, photosList: [...state.photosList, ...action.photosList] };
    default:
      return state;
  }
}

export const setSearchValue = (val) => ({ type: 'SEARCH-PHOTO-LIST', searchVal: val });
export default MainContentReducer;
