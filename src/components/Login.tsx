import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { newsAsync } from '../redux/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import secureLocalStorage from "react-secure-storage";
import { addCategory } from '../redux/apiSlice';


function Login() {
const dispatch=useDispatch<AppDispatch>();
const navigate = useNavigate();
  const [key, setKey] = useState("");
  const [errorMsg,setErrorMsg]=useState(false)
  const handlelogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newsAsync({ value: 'popular', key:key })).then((m) => {
      if(m.payload)
        {
          secureLocalStorage.setItem("key", key);
          navigate("/home") 
        dispatch(addCategory('Popular'))
        dispatch(newsAsync({ value: 'sport', key:key })).then(() =>{dispatch(addCategory('Sport'))})
        dispatch(newsAsync({ value: 'travel', key:key })).then(() =>{dispatch(addCategory('Travel'))})
        dispatch(newsAsync({ value: 'music', key:key })).then(() =>{dispatch(addCategory('Music'))})
        dispatch(newsAsync({ value: 'technology', key:key })).then(() =>{dispatch(addCategory('Tech'))})
        dispatch(newsAsync({ value: 'fun', key:key })).then(() =>{dispatch(addCategory('Fun'))})
        dispatch(newsAsync({ value: 'health', key:key })).then(() =>{dispatch(addCategory('Health'))})
        dispatch(newsAsync({ value: 'Politics', key:key })).then(() =>{dispatch(addCategory('Politics'))})
        dispatch(newsAsync({ value: 'Culture', key:key })).then(() =>{dispatch(addCategory('Culture'))})
        dispatch(newsAsync({ value: 'Business', key:key })).then(() =>{dispatch(addCategory('Business'))})
        dispatch(newsAsync({ value: 'World', key:key })).then(() =>{dispatch(addCategory('World'))})
        }
          else
      setErrorMsg(true);
    });
  };
  return (
    <div className="font-sans text-gray-900 antialiased">
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
        <div>
          <h2 className="font-bold text-3xl">NEWS <span className="bg-[#f84525] text-white px-2 rounded-md">APP</span></h2>
        </div>
        
        <div className="w-full sm:max-w-md my-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-b-lg">
          <form onSubmit={handlelogin}>
            <div className="py-8">
              <center>
                <span className="text-2xl font-semibold">Log In</span>
              </center>
            </div>

            <div>
              <input type='email'
                name='email'
                placeholder='Email'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]" required />
            </div>

            <div className="mt-4">
              <input id='api' type='text' name="api" placeholder='API Key' required className='w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]'
              onChange={(e)=>setKey(e.target.value)} onClick={()=>setErrorMsg(false)}/>
            </div>
             {errorMsg?<div className='text-red-600 mt-2 ml-1'>The API Key that you've entered is incorrect.</div>:""}
            <div className="flex items-center justify-end mt-16">
              <Link to='https://newsapi.org/register'>
              <span className="hover:underline text-sm text-gray-600 hover:text-gray-900 hover:cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get Key!
              </span>
              </Link>
              <button  className='ms-4 inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login