import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


  export const newsAsync = createAsyncThunk(
    'news/newsAsync',
    async (obj:{value:string,key:string}) => {
      const{value,key}=obj;
        try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${value}&apiKey=${key}`);
    if(response.data)
    return response.data;
        } catch (e:any) {
          return Promise.reject(e.message);
        }
      
    }
  );
 
 