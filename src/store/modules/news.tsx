import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { News } from "../../types/gameTypes"

interface NewsState {
  news: News[];
}

const initialState: NewsState = {
  news: [],
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<News[]>) {
      state.news = action.payload; 
    },
  },
})

export const { setNews } = newsSlice.actions; 
export default newsSlice.reducer;
