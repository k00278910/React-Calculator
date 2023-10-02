import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// set up a React root, select the HTML element 
// with the id 'root', and render the <App /> component into that root 
// with the additional checks provided by <React.StrictMode>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function

reportWebVitals();
