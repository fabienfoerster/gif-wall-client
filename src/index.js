import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBLrKMTIoiiFpDW92x0uIpQutOQ_eoTFrM",
    authDomain: "gif-wall.firebaseapp.com",
    databaseURL: "https://gif-wall.firebaseio.com",
    storageBucket: "gif-wall.appspot.com",
    messagingSenderId: "264236050372"
  };
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
