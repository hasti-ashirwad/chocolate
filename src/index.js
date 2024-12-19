import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // or wherever your tailwind file is located
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fontsource/oswald"; // Defaults to 400 (regular)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
