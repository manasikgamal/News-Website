import React from 'react'
import { article } from '../interfaces'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { search } from '../redux/apiSlice';
function Newscategory({ category }: { category: article[] }) {
  const navegate=useNavigate();
  const dispatch=useDispatch();
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1500 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1500, min: 700 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };
    return (
        <Carousel responsive={responsive}>
            {category ? category.map((x,i) =>
            (<div key={i} className='flex justify-between w-full mt-5 sm:w-[30rem] shadow-md'>
                <div className='w-5/12 relative'>
                    <img className='w-full h-44 object-cover' src={x.urlToImage} alt='' />
                    <div onClick={()=>{navegate(`/news/${x.category}`);dispatch(search({type:x.category,title:''}))}} className='absolute top-0 left-0 bg-black text-white w-16 h-8 items-center flex justify-center border-l-8 border-[#f84525]
                hover:cursor-pointer hover:transition-all ease-out duration-1000 hover:bg-[#f84525] hover:bg-left-bottom'>{x.category}</div>
                </div>
                <div className='w-7/12 flex flex-col justify-evenly ml-2 flex-wrap'>
                    <h1 onClick={()=>navegate(`/description/${x.title}/${x.category}`)} className='font-bold hover:cursor-pointer hover:text-blue-600'>{x.title.slice(0, 40)}...</h1>
                    <div className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-[#f84525]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                        <span className='text-[#868585]'>{x.publishedAt}</span></div>
                    <p className='flex border-t-2 pt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-[#f84525]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                        <span className='text-[#868585]'>{x.author}</span></p>
                </div>
            </div>)) : <div>Loading</div>}
        </Carousel>
    )
}

export default Newscategory