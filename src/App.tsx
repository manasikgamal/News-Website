import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import router from './index';


function App() {
  const isLoggedIn  = useSelector((state:any)=>state.api.login);
  const routing = useRoutes(router(isLoggedIn));
  return (
    <div>
    {routing}
    </div>


  );
}

export default App;
