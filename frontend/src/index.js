import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './Auth';
import Canvas from './Canvas';
import reportWebVitals from './reportWebVitals';
import Menu from './Menu';
import { BrowserRouter } from 'react-router-dom'
import Profile from './Profile';



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
// ...

}else{
  //need route canvas and profile
  if(window.location.pathname=='/'){
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
        <Profile />
      </React.StrictMode>
    );

  }
  if(window.location.pathname=='/canvas'){
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
        <Canvas />
      </React.StrictMode>
    );
  }
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
