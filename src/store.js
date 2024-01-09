// store.js
import { createStore } from 'redux';
import rootReducer from './rootReducer'; // замените это на ваш корневой редюсер

const store = createStore(rootReducer);

export default store;
