import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Services from './Pages/Main_ServicesPage/Services';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import LogOutPage from './Pages/LoggerPage/LogOutPage';
const router=createBrowserRouter([
{
  path:"/",
  element: <LogOutPage/>
},
{
  path:"Home",
  element: <HomePage/>
},
{
  path:"Services",
  element: <Services/>
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
