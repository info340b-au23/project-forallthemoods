import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDmv5-CS1o0Of9hNqN4ny_gajFfinJnr5I",
  authDomain: "forallthemoods-7a39a.firebaseapp.com",
  projectId: "forallthemoods-7a39a",
  storageBucket: "forallthemoods-7a39a.appspot.com",
  messagingSenderId: "93267463092",
  appId: "1:93267463092:web:e104c9f352c6d15a2880e1"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </React.StrictMode> 
);