import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App.jsx';
import reportWebVitals from './reportWebVitals';
import  allReducers from "./reducers";
import { createStore } from "redux";
import {Provider} from 'react-redux';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom'

//creating store
const store = createStore(allReducers, 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//calling axios request
axios.get('http://127.0.0.1:8000/api/profile/').then(
  res => {
    store.dispatch(
      {
        type:'GETPROFILES',
        payload:res.data
      }
    )
  }
)

axios.get('http://127.0.0.1:8000/api/tutorial/').then(
  res =>
  {
    store.dispatch(
      {
        type:'GETTUTORIALS',
        payload:res.data
      }
    )
  }
).catch(
  err => {
    store.dispatch(
      {
        type:'ERROR',
        payload:err.message
      }
    )
  }
)

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>

      <App/>  
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
