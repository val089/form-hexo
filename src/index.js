import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ContactForm from 'views/ContactForm';

const reducers = {
  form: formReducer,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContactForm />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
