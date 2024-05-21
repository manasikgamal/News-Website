import React from 'react'

function Socialmedia() {
  return (
    <div className='flex flex-col justify-between h-60'>
        <div className='bg-blue-800 flex items-center justify-start py-1'>
            <img className='w-7 h-7 mx-2' src='https://i.pinimg.com/originals/8e/fb/55/8efb55e9efc12eb11bedf41caa7f33bb.png' alt=''/>
            <span className='text-white font-semibold'>12,740 Likes</span>
        </div>
        <div className='bg-gray-700 flex items-center justify-start py-1'>
          <img className='w-7 h-5 mx-2' src='https://www.webdesignerdepot.com/imager/assets/posts/featured/x_logo_a301dae254912f020a6fa82f7a16ae51.png' alt=''/>
          <span className='text-white font-semibold'>8,700 Followers</span>
        </div>
        <div className='bg-pink-600 flex items-center justify-start py-1'>
          <img className='w-7 h-7 mx-2' src='https://lh3.googleusercontent.com/_mu7RjIhODQVVymzXfvOhoHoAIUxlFghFwtgRwD5XmlSDo2UCEkhoVZBjOJl6lViBo3QSLnDXimQ5jRjdw=s440-rw' alt=''/>
          <span className='text-white font-semibold'>22,700 Followers</span>
        </div>
        <div className='bg-red-700 flex items-center justify-start py-1'>
          <img className='w-7 h-7 mx-2' src='https://static.vecteezy.com/system/resources/previews/023/986/473/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png' alt=''/>
          <span className='text-white font-semibold'>2,700 Subscriber</span>
        </div>
        <div className='bg-blue-500 flex items-center justify-start py-1'>
          <img className='w-7 h-7 mx-2' src='https://vectorseek.com/wp-content/uploads/2023/08/Onlyfans-App-Logo-Vector.svg-.png' alt=''/>
          <span className='text-white font-semibold'>5,600 Fans</span>
        </div>
    </div>
  )
}

export default Socialmedia