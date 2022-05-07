import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { AppContainer } from './views/containers';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import './index.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.min';

/* Log the initial state */
console.log(store.getState());
const unsibscribe = store.subscribe(()=> console.log(store.getState()));
unsibscribe();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
