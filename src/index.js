// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // путь к вашему файлу с store
import App from './App';
import TopBar from './components/TopBar/TopBar';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

// Используйте createRoot вместо ReactDOM.render
reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      
    </Provider>
  </React.StrictMode>,
);
