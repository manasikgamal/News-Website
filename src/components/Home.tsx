import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Topnews from './Topnews'
import Variousnews from './Variousnews'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { newsAsync } from '../redux/apiServices';
import secureLocalStorage from "react-secure-storage";
import { addCategory } from '../redux/apiSlice';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  return (
    <div>
       <Header />
       <div className='mx-10 sm:mx-20 flex flex-col'>
       <Topnews/>
       <Variousnews/>
       </div>
       <Footer/>
    </div>
  )
}

export default Home