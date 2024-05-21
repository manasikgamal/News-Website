import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import { store } from './store'
import { Provider } from 'react-redux'
import Description from './components/Description';
import Login from './components/Login';
import Allnews from './components/Allnews';


const router = (isLoggedIn:boolean)=>[
  {
    path: "/",
    element:isLoggedIn?<Navigate to='/home'/>:<Login/>,
  },
  {
    path:'/home',
    element:isLoggedIn?<Home/>:<Navigate to='/'/>
  },
  {
    path:'/description/:title/:type',
    element:isLoggedIn?<Description/>:<Navigate to='/'/>
  },
  {
    path:'/news/:type',
    element:isLoggedIn?<Allnews/>:<Navigate to='/'/>
  },
  {
    path:"*",
    element:isLoggedIn?<Navigate to="/home" replace />:<Navigate to="/" replace />
  }
];


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <BrowserRouter>
    <App />
  </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

export default router;

