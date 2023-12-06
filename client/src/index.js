import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


let defaultState = []

function reducer( state = defaultState, action){
  if( action.type === 'addItem'){
    let found = state.findIndex((a)=>{return a.id === action.payload.id});
      if( found >= 0){
        let copy = [...state];
        return copy;
      } else {
        let copy = [...state];
        copy.push(action.payload);
        return copy
      }    
  }  
  else{ return state}
}

let store = createStore(reducer)   //combineReducers({reducer, reducer2})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
