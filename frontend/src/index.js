import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './Auth';
import Canvas from './Canvas';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const Page = React.lazy(() => import('./Page'));
const token = localStorage.getItem('token')??'';
const role = localStorage.getItem('role')??'';

if(token=='' || role==''){
root.render(
  <React.StrictMode>
    <Auth />
  </React.StrictMode>
);
}else{
  root.render(
    
    <React.StrictMode>
      <Canvas />
    </React.StrictMode>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
