
import './App.css'
import { Route, Routes } from "react-router-dom";
import Games from "./components/games/Games"
import { useEffect, useState } from 'react';
import { getGames } from './api/games';
import { GameContext } from './helpers/gameContext'
import type {gameType} from "./types/gameTypes"

function App() {
  const [gameList,setGameList] = useState<gameType[] | null>(null)

  useEffect(() => {
    getGames().then((data) => {
      console.log(data)
      setGameList(data)
    })
  },[])

  return (
    <GameContext.Provider  value={{gameList,setGameList }}>
    <Routes>
    <Route path="/" element={<Games />} />
    {/* <Route path="/about" element={<About />} /> */}
  </Routes>
  </GameContext.Provider>
  )
}

export default App
