import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import {Router} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./redux/store";
import History from "./lib/History";


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router history={History}>
              <App />
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);


