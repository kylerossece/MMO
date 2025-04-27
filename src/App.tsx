
import './App.css'
import { Route, Routes } from "react-router-dom";
import Games from "./components/games/Games"
import GameDetails from './components/games/components/GameDetails';
import { useEffect, useState } from 'react';
import { getGames } from './api/games';
import { GameContext } from './helpers/gameContext'
import type {gameType} from "./types/gameTypes"

function App() {
  const [gameList,setGameList] = useState<gameType[] | null>(null)
  const [filteredList, setFilteredList]  = useState<gameType[] | null>(null)
  const [platform, setPlatform] = useState<string[] | null>([])
  const [gameId, setGameId] = useState<number | null>(null)
  const [genre, setGenre] = useState<string[] | null>([])

  useEffect(() => {

    getGames(null).then((data) => {
    
       setGameList([])
       setGameList(data)
      
    })
  },[platform, genre, gameId])

  return (
    <GameContext.Provider  value={{gameList,setGameList, platform, setPlatform, genre, setGenre, filteredList, setFilteredList,  gameId, setGameId }}>
    <Routes>
    <Route path="/" element={<Games />} />
    <Route path="/game/:gameId" element={<GameDetails />} />
  </Routes>
  </GameContext.Provider>
  )
}

export default App
