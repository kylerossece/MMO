
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getGames } from "../../../api/games"
import type { gameData } from "../../../types/gameTypes";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const GameDetails = () => {
    const { gameId } = useParams(); 
    const [game,setGame] = useState<gameData | null>(null);

    useEffect(() => {
        getGames(Number(gameId)).then((data) => {
                setGame(data)
        })
    }, [])
 
    return (
       game &&      <section className="h-full w-full min-h-screen bg-gray-900 relative overflow-hidden" key={game.id}>
          <CssBaseline />
          <Container>
            {game ? game.title : ''}
            </Container>
        </section>
    )
}

export default GameDetails