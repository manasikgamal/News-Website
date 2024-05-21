import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';



function Musicnews() {
    const dispatch = useDispatch<AppDispatch>();
    const popular = useSelector((state: any) => state.api.popular)
  return (
    <div>Musicnews</div>
  )
}

export default Musicnews