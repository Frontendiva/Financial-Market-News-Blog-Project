// postsReducer.js
const initialState = {
    posts: [],
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return {
          ...state,
          posts: action.payload,
        };
      // другие кейсы для других действий, если необходимо
      default:
        return state;
    }
  };
  
  export default postsReducer;
  