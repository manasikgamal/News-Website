
import { useSelector } from 'react-redux';
import Newscategory from './Newscategory';

function Main() {
    const catnews=useSelector((state:any)=>state.api.catnews);
  return (
    <div className=''>
    {catnews.Sport?<Newscategory category={catnews.Sport}/>:<div>Loading...</div>}
    {catnews.Travel?<Newscategory category={catnews.Travel}/>:<div>Loading...</div>}
    {catnews.Tech?<Newscategory category={catnews.Tech}/>:<div>Loading...</div>}
    {catnews.Health?<Newscategory category={catnews.Health}/>:<div>Loading...</div>}
    </div>
  )
}

export default Main