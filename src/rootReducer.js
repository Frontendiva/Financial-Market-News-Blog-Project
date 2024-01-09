// rootReducer.js
import { combineReducers } from 'redux';
import postsReducer from './postsReducer'; // замените на путь к вашему редюсеру

const rootReducer = combineReducers({
  posts: postsReducer,
  // другие редюсеры, если есть
});

export default rootReducer;
