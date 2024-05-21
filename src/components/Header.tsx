import React from 'react'
import Topnews from './Topnews'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import secureLocalStorage from 'react-secure-storage';
import { logout, search } from '../redux/apiSlice';
function Header() {
  const navegate=useNavigate();
  const dispatch=useDispatch<AppDispatch>();
  const userlogout=()=>{
    dispatch(logout())
    navegate('/')
  }
  return (
    <div>
        <div className='flex justify-around items-center h-32'>
          <h2 className="font-bold text-4xl lg:text-3xl md:text-3xl ">NEWS <span className="bg-[#f84525] text-white px-2 rounded-md">APP</span></h2>
          <img className='w-52 h-20 sm:w-80 sm:object-cover hidden lg:block md:block' src='https://th.bing.com/th/id/R.b02d413f31ddbc6526b3bab10092d3e8?rik=0gytSe3ABpe5Uw&riu=http%3a%2f%2fwww.jfasites.com%2fFHS%2fNews.jpg&ehk=DeM%2bPG8mAKy5r2nT7BN1F7OuMaFuhsdFb2RjpIUe8vg%3d&risl=&pid=ImgRaw&r=0'alt=''/>
       </div>
        <div className='bg-black text-white h-12'>
            <ul className='flex justify-around sm:w-1/2 w-full h-12 items-center sm:ml-10 ml-0'>
                <li onClick={()=>navegate('/home')} className='hover:cursor-pointer hover:text-blue-500'>Home</li>
                <li onClick={()=>{navegate('/news/World');dispatch(search({type:'World',title:''}))}} className='hover:cursor-pointer hover:text-blue-500'>World</li>
                <li onClick={()=>{navegate('/news/Politics');dispatch(search({type:'Politics',title:''}))}} className='hover:cursor-pointer hover:text-blue-500'>Politics</li>
                <li onClick={()=>{navegate('/news/Culture');dispatch(search({type:'Culture',title:''}))}} className='hover:cursor-pointer hover:text-blue-500'>Culture</li>
                <li onClick={()=>{navegate('/news/Business');dispatch(search({type:'Business',title:''}))}} className='hover:cursor-pointer hover:text-blue-500'>Business</li>
                <li onClick={userlogout} className='hover:cursor-pointer hover:text-blue-500' >Logout</li>
            </ul>
        </div>
    </div>
  )
}

export default Header