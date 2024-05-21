import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { article } from '../interfaces';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Fun() {
    const fun=useSelector((state:any)=>state.api.catnews.Fun);
    const navegat=useNavigate();
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
            {fun ? fun.map((x: article, index: number) => (
                <div key={index} className='w-[30rem] md:w-[18rem] lg:w-[30rem] shadow-lg'>
                    <div className='relative'>
                        <img className='w-full h-[18rem] object-cover' src={x.urlToImage} alt='' />
                        <div className='absolute top-0 left-0 bg-black text-white w-20 h-8 items-center flex justify-center border-l-8 border-[#f84525]
                hover:cursor-pointer hover:transition-all ease-out duration-1000 hover:bg-[#f84525] hover:bg-left-bottom'>{x.category}</div>
                    </div>
                    <div>
                        <h1 onClick={()=>navegat(`/description/${x.title}/${x.category}`)} className='font-bold ml-2 my-2 text-wrap hover:text-blue-500 hover:cursor-pointer'>{x.title.slice(0, 40)}...</h1>
                        <div className='flex flex-col'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-2 text-[#f84525]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                <span className='text-[#868585]'>{x.publishedAt.slice(0, 10)}</span>
                            </div>
                            <div className='flex mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-2 text-[#f84525]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className='text-[#868585]'>{x.publishedAt.slice(11, 19)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )) : <div>Loading...</div>}
        </Carousel>
      
    )
}

export default Fun