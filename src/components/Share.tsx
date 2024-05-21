import React from 'react'

function Share() {
  return (
    <div className='flex justify-evenly my-10 flex-wrap'>
        <div className='bg-blue-800 flex items-center justify-start p-1 w-32'><img className='w-7 h-7 mx-2' src='https://i.pinimg.com/originals/8e/fb/55/8efb55e9efc12eb11bedf41caa7f33bb.png' alt=''/><span className='text-white font-semibold'>Share</span></div>
        <div className='bg-gray-700 flex items-center justify-start p-1 w-32'><img className='w-7 h-5 mx-2' src='https://www.webdesignerdepot.com/imager/assets/posts/featured/x_logo_a301dae254912f020a6fa82f7a16ae51.png' alt=''/><span className='text-white font-semibold'>X</span></div>
        <div className='bg-red-700 flex items-center justify-start p-1 w-32'><img className='w-7 h-7 mx-2' src='https://static.vecteezy.com/system/resources/previews/023/986/473/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png' alt=''/><span className='text-white font-semibold'>Subscribe</span></div>
        <div className='bg-pink-600 flex items-center justify-start p-1 w-32 mt-1'><img className='w-7 h-7 mx-2' src='https://lh3.googleusercontent.com/_mu7RjIhODQVVymzXfvOhoHoAIUxlFghFwtgRwD5XmlSDo2UCEkhoVZBjOJl6lViBo3QSLnDXimQ5jRjdw=s440-rw' alt=''/><span className='text-white font-semibold'>Instagram</span></div>
    </div>
  )
}

export default Share