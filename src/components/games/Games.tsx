
import Stack from "./game-components/Stack";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FilterField from "./game-components/FilterField";
import { useGameContext } from "../../helpers/gameContext";
import NewsCarousel from "../news/news-components/Carousel";
import { useEffect } from "react";
import { getGames } from "../../api/games";
import Nav from "../Nav"
import { PacmanLoader } from "react-spinners";

const Games = () => {
    const {gameList,   setGameList, platform,genre} = useGameContext();

    useEffect(() => {

        getGames(null, false).then((data) => {
        
           setGameList([])
           setGameList(data)
          
        })
      },[platform, genre])


    return (
         <section className="h-full w-full min-h-screen bg-gray-900 relative overflow-hidden">
          <CssBaseline />
          <Container>
          { gameList ?
          (
            <Grid  container spacing={4} >
              <Nav />
            <Grid  size={{ xs: 12, md: 12 }} order={{ xs: 0, md: 1 }}>
            <NewsCarousel />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} order={{ xs: 2, md: 1 }}>
          
            <Stack />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} order={{ xs: 1, md: 2 }}>
            <FilterField />
            </Grid>
            </Grid>
          ) : (
            <div className="flex justify-center items-center h-screen w-full">
                <PacmanLoader color="#36d7b7" size={55}  />

            </div>
          )
            }
            </Container>
        </section>
        
    )
}

export default Games;
