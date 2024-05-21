import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { article } from '../interfaces'
import { newsAsync } from './apiServices'
import secureLocalStorage from 'react-secure-storage'


export interface articlesState {
  news:[]
  status:'loading' | 'idle'|'failed',
  message:any
  catnews:{}
  descnews:{},
  login:boolean,
  search:article[]
}

const initialState: articlesState = {
  news:[],
  status:'idle',
  message:'',
  catnews:localStorage.getItem('catnews')?JSON.parse(localStorage.getItem('catnews') as string):{},
  descnews:{},
  search:[],
  login:secureLocalStorage.getItem('key')?true:false
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addCategory:(state,action:PayloadAction<string>)=>{
          let category=state.news.map((item:article)=>({...item,category:action.payload})) as [];
          state.catnews={...state.catnews,[action.payload]:category}
          localStorage.setItem("catnews", JSON.stringify(state.catnews))
    },
    oneArticle:(state,action:PayloadAction<{type:string,title:string}>)=>{
      const catnews=localStorage.getItem('catnews')?JSON.parse(localStorage.getItem('catnews') as string):''
      state.descnews=catnews[action.payload.type]?catnews[action.payload.type].find((x:article)=>x.title===action.payload.title):{}
    },
    logout:(state)=>{
      secureLocalStorage.removeItem('key');
      localStorage.clear();
      state.login=false
    },
    search:(state,action:PayloadAction<{type:string,title:string}>)=>{
      const category=localStorage.getItem("catnews")?JSON.parse(localStorage.getItem("catnews") as string)[action.payload.type||'']:'';
      state.search=category.filter((x:any)=>x.title.toLowerCase().includes(action.payload.title.toLowerCase()))
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(newsAsync.pending, (state,action) => {
        state.status = 'loading';
      })
      .addCase(newsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.news= action.payload.articles;
        state.login=true
      })
      .addCase(newsAsync.rejected, (state,action) => {
        state.status = 'failed';
        state.message=action.error;
        state.login=false
      })
  }
})

export const {addCategory,oneArticle,logout,search} = articlesSlice.actions

export default articlesSlice.reducer