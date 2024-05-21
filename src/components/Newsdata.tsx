import { useNavigate } from 'react-router-dom'
import { article} from '../interfaces'

function Newsdata ({article}:{article:article}){
  const navigate=useNavigate();
  
    return (
      <div onClick={()=>navigate(`/description/${article.title}/${article.category}`)} className='border rounded-md hover:cursor-pointer'>
          <div className='relative h-full'>
            <img className='w-full object-cover h-full' src={article.urlToImage} alt="" />
            <div className='absolute bottom-10 left-10'>
            <h1 className='text-white font-bold text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-blue-500'>{article.title}</h1>
          </div>
          </div>
      </div>
    )
  }

export default Newsdata