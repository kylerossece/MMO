
import './App.css'
import { Route, Routes } from "react-router-dom";
import Games from "./components/games/Games"
import Details from './components/games/game-components/Details';
import { useState } from 'react';
import { GameContext } from './helpers/gameContext'
import Article from './components/news/news-components/Article';
import type {gameType} from "./types/gameTypes"
import News from './components/news/News';

function App() {
  const [gameList,setGameList] = useState<gameType[] | null>(null)
  const [filteredList, setFilteredList]  = useState<gameType[] | null>(null)
  const [platform, setPlatform] = useState<string[] | null>([])
  const [gameId, setGameId] = useState<number | null>(null)
  const [newsId, setNewsId] = useState<number | null>(null)
  const [genre, setGenre] = useState<string[] | null>([])


 

  return (
    <GameContext.Provider  value={{
      gameList,
      setGameList, 
      platform, 
      setPlatform, 
      genre, setGenre, 
      filteredList, 
      setFilteredList,  
      gameId, 
      setGameId, 
      newsId, 
      setNewsId, 
       }}>
    <Routes>
    <Route path="/" element={<Games />} />
    <Route path="/news" element={<News />} />
    <Route path="/game/:gameId" element={<Details />} />
    <Route path="/news/:newsId" element={<Article />} />
  </Routes>
  </GameContext.Provider>
  )
}

export default App
