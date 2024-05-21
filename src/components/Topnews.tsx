import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store'
import { article } from '../interfaces'
import Newsdata from './Newsdata'

function Topnews() {
    const popular=localStorage.getItem("catnews")?JSON.parse(localStorage.getItem("catnews") as string).Popular:'';
  return (
    <div className='h-full'>
        <div className='grid sm:h-4/6 grid-cols-1 sm:grid-cols-3 my-10 grid-rows-2 gap-2 
        sm:[&>*:nth-child(1)]:row-span-2 sm:[&>*:nth-child(2)]:col-span-2 sm:[&>*:nth-child(3)]:col-span-1 sm:[&>*:nth-child(4)]:col-span-1
        '>
        {popular?popular.slice(0,4).map((article:article,i:number)=><Newsdata key={i} article={article}/>):
        <div className='h-screen flex justify-center items-center'>
        <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-red-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
      </div>
      </div>}
      </div>
      </div>
  )
}

export default Topnews