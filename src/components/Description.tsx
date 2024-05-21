import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { AppDispatch } from '../store';
import { oneArticle } from '../redux/apiSlice';
import Header from './Header';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { article } from '../interfaces';
import Side from './Side';
import Separatebar from './Separatebar';
import Share from './Share';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

function Description() {
   let {title,type}=useParams();
   const location = useLocation();
   const dispatch=useDispatch<AppDispatch>();
   const navegate=useNavigate();
   const descnews=useSelector((state:any)=>state.api.descnews)
   const category=localStorage.getItem("catnews")?JSON.parse(localStorage.getItem("catnews") as string)[type||'']:'';
  useEffect(()=>{dispatch(oneArticle({type:type||'',title:title||''}))},[location])
  return (
    <div className=''>
        <Header/>
        {descnews&&category?
       (<div className='my-10'>
        <Carousel responsive={responsive}>
            {category.map((x:article,i:number)=><div key={i} className='relative'><img className='w-52 h-28 object-cover rounded-md' src={x.urlToImage} alt=''/>
            <div onClick={()=>navegate(`/description/${x.title}/${x.category}`)} className='absolute left-2 bottom-2 hover:cursor-pointer text-white hover:text-blue-800 font-semibold'>{x.title.slice(0,40)}...</div></div>)}
        </Carousel>
        <div className='flex flex-col sm:flex-row mx-10 w-[90%] justify-between mt-10'>
            <div className='sm:w-[75%] w-full'>
              <h1 className='text-2xl font-bold my-10'>{descnews.title}</h1>
              <span>by <span className='font-semibold text-lg'>{descnews.author} </span>on </span><span className='text-gray-500'>{descnews.publishedAt&&descnews.publishedAt.slice(0,10)}</span>
              <Share/>
              <div className='text-xl'>{descnews.description}</div>
              <img className='w-full object-cover my-10' src={descnews.urlToImage} alt=''/>
              <div className='text-lg'>{descnews.content}</div>
              <div className='my-10'><span className='text-lg font-semibold'>For More Information: </span><a className='hover:text-blue-700 text-lg' href={descnews.url}>{descnews.url}</a></div>
            </div>
            <div className='sm:w-[24%] w-full'>
                <Separatebar name='Contact'/>
                <Side/>
                </div>
        </div>
    </div>)
    :<div className='text-6xl font-bold flex justify-center min-h-screen items-center'>Wrong Title</div>} 
    </div>
  )
}

export default Description