import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUsPage from './AboutUsPage';
import LogOutPage from './LogOutPage';
const router=createBrowserRouter([
{
  path:"/",
  element: <HomePage/>
},
{
  path:"Home",
  element: <HomePage/>
},
{
  path:"Services",
  element: <App/>
},
{
  path:"About us",
  element:<AboutUsPage />
},
{
  path:"Log Out",
  element:<LogOutPage />
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
