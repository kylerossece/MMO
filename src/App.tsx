
import './App.css'
import { Route, Routes } from "react-router-dom";
import Games from "./components/games/Games"
import GameDetails from './components/games/components/GameDetails';
import { useState } from 'react';
import { GameContext } from './helpers/gameContext'
import GameArticle from './components/games/components/GameArticle';
import type {gameType, News} from "./types/gameTypes"

function App() {
  const [gameList,setGameList] = useState<gameType[] | null>(null)
  const [filteredList, setFilteredList]  = useState<gameType[] | null>(null)
  const [platform, setPlatform] = useState<string[] | null>([])
  const [gameId, setGameId] = useState<number | null>(null)
  const [newsId, setNewsId] = useState<number | null>(null)
  const [genre, setGenre] = useState<string[] | null>([])
  const [news, setNews] = useState<News[] | null>([])

 

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
      news, 
      setNews }}>
    <Routes>
    <Route path="/" element={<Games />} />
    <Route path="/game/:gameId" element={<GameDetails />} />
    <Route path="/news/:newsId" element={<GameArticle />} />
  </Routes>
  </GameContext.Provider>
  )
}

export default App
