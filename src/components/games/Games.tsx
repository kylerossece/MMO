
import GameStack from "./components/GameStack";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FilterField from "./components/FilterField";
import { useGameContext } from "../../helpers/gameContext";
import GameNews from "./components/GameNews";
import { useEffect } from "react";
import { getGames } from "../../api/games";

const Games = () => {
    const {gameList,   setGameList, platform,genre} = useGameContext();

    useEffect(() => {

        getGames(null, false).then((data) => {
        
           setGameList([])
           setGameList(data)
          
        })
      },[platform, genre])


    return (
        gameList && <section className="h-full w-full min-h-screen bg-gray-900 relative overflow-hidden">
          <CssBaseline />
          <Container>
          <Grid  container spacing={4} className="mt-5">
            <Grid  size={{ xs: 12, md: 12 }} order={{ xs: 0, md: 1 }}>
            <GameNews />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} order={{ xs: 2, md: 1 }}>
          
            <GameStack />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} order={{ xs: 1, md: 2 }}>
            <FilterField />
            </Grid>
            </Grid>
            </Container>
        </section>
        
    )
}

export default Games;
