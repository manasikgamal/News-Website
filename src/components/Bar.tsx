import React, { useEffect, useState } from 'react'

function Bar() {
    const [progressPercentage,setProgressPercentage]=useState(0)
    const toggleProgree=()=>{
        let id=setInterval(frame, 10)
         function frame() {
           if (progressPercentage >= 100) {
             clearInterval(id);
           } else {
             setProgressPercentage(progressPercentage+10); 
             console.log(progressPercentage)
           }
         }
       }
  return (
    <div className="w-full mt-6 sm:max-w-md  bg-white rounded-t-lg dark:bg-gray-700">
    <div className={`bg-[#f84525] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-t-lg `}
    style={{width:progressPercentage+'%'}} 
    ></div>
  </div>
  )
}

export default Bar