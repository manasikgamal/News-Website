import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { article } from '../interfaces';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../redux/apiSlice';

function Allnews() {
    let {type}=useParams();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const searchitem=useSelector((state:any)=>state.api.search)
    useEffect(()=>{type&&dispatch(search({type:type,title:''}))},[])
  return (
    <div>
        <Header/>
        <div className='mx-auto w-[80%]'>
        <h1 className='text-5xl font-bold  my-5'>{type}</h1>
        <div className='relative'>
              <input onChange={(e)=>type&&dispatch(search({type:type,title:e.target.value}))} type='text'
                name='search'
                placeholder='Search'
                className="w-full rounded-md mt-5 mb-10 py-[0.600rem] px-4 border text-sm outline-[#f84525]" />
            </div>
    <div className='flex flex-wrap gap-3'>
        {searchitem.slice(0,50).map((x:article,i:number)=>(
            <div key={i} className='w-96 border'><img className='h-60 object-cover' src={x.urlToImage} alt=''/>
            <h1 onClick={()=>navigate(`/description/${x.title}/${x.category}`)} className='text-2xl font-bold m-2 hover:text-blue-700 hover:cursor-pointer'>{x.title}</h1>
            <p className='ml-2 text-sm text-gray-600'>{x.description}</p></div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Allnews