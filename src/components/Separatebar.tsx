import React from 'react'

function Separatebar({name}:{name:string}) {
  return (
    <div className='flex my-10'>
          <h1 className='bg-[#f84525] text-white text-[16px] font-semibold h-8 w-28 items-center flex justify-center'>{name}</h1>
         <div className='w-full h-8 bg-pink-50'><br/></div> 
    </div>
  )
}
 
export default Separatebar