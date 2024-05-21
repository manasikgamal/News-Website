import React from 'react'
import Separatebar from './Separatebar'
import Main from './Main'
import Fun from './Fun'
import Side from './Side'

const Variousnews = () => {
  return (
    <div className='flex justify-between h-full flex-col sm:flex-row w-full'>
        <div className=' w-full sm:w-3/4'>
            <Separatebar name='World'/>
            <Main/>
            <Separatebar name='Fun'/>
            <Fun/>
        </div>
        <div className='w-full sm:w-1/5 '>
            <Separatebar name='Contact'/>
        <Side/>
        </div>
    </div>
  )
}

export default Variousnews