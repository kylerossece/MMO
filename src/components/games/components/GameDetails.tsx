
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getGames } from "../../../api/games"
import type { gameData } from "../../../types/gameTypes";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {dateFormatter } from "../../../helpers/dateFormatter";


const GameDetails = () => {
    const { gameId } = useParams(); 
    const [game,setGame] = useState<gameData | null>(null);
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        getGames(Number(gameId)).then((data) => {
                setGame(data)
        })
    }, [])

    const handleImage = (image: string) => {
        setImage(image)
    }
    useEffect(() => {
        console.log("game",game)
    })
    return (
       game &&      
       <section className="h-full w-full min-h-screen bg-gray-900 relative overflow-hidden" key={game.id}>
          <CssBaseline />
          <Container>
            
            {game && 
            <>
            <section className="text-gray-200 min-h-screen md:flex flex-col items-start justify-center">
                <h1 className="text-2xl mb-1">{game.title}</h1>
                <Grid className="" container spacing={3}>
                <Grid size={{ xs: 12, md: 8 }} order={{ xs: 2, md: 1 }}>
                  
                    <LazyLoadImage
                className="w-auto h-auto cursor-pointer"
                alt={game.title}
                src={image || game.screenshots[0].image || ''} 
                        
                            />
                            <div className="mt-4 flex gap-2">
                            { game.screenshots.map((screenshot) => {
                                return(
                                    <LazyLoadImage
                                    className="w-full h-28 object-cover overflow-y-auto cursor-pointer"
                                    alt={game.title}
                                    src={screenshot.image} 
                                    onClick={() => handleImage(screenshot.image)}
                                            
                                                />  
                                )
                            })

                            }
                            </div>
                    </Grid>
                    <Grid  size={{ xs: 12, md: 4 }} order={{ xs: 1, md: 2 }}>
                    <LazyLoadImage
                        className="w-full h-auto cursor-pointer"
                        alt={game.title}
                        src={game.thumbnail || ''} 
                        
                            />
                    <p className="my-4 text-sm">{game.short_description}</p>
                    <div className="flex items-center">
                        <div className="mr-12 uppercase text-gray-500 text-xs font-medium tracking-wide ">
                            <p>Genre:</p>
                            <p>Release Date:</p>
                            <p>Platform:</p>
                            <p>Publisher:</p>
                            <p>Developer:</p>
                        </div>
                        <div className="text-xs tracking-wide">
                            <p>{game.genre}</p>
                            <p> {dateFormatter(game.release_date)}</p>
                            <p>{game.platform}</p>
                            <p>{game.publisher}</p>
                            <p>{game.developer}</p>
                        </div>
                    </div>
                    </Grid>
                    </Grid>
                </section>
                <section className="text-gray-200 mt-1 h-full w-full min-h-screen">
                <Grid className="" container spacing={3}>
                <Grid size={{ xs: 12, md: 8 }} order={{ xs: 2, md: 1 }}>
                <h1 className="text-xl tracking-wider mt-2">About {game.title}</h1>
                <div className="mt-4" dangerouslySetInnerHTML={{ __html: game.description }} />
                { game.minimum_system_requirements && 
                <div>
                <h1 className="text-xl tracking-wider mt-8 mb-4">System Requirements</h1>
                       <div className="flex grow-1 items-center w-full">
                        <div className="text-gray-500 font-medium tracking-wide mr-8">
                            <p>OS:</p>
                            <p>Processor:</p>
                            <p>Memory:</p>
                            <p>Graphics:</p>
                            <p>Storage:</p>
                        </div>
                        <div className="tracking-wide">
                            <p>{game.minimum_system_requirements?.os}</p>
                            <p> {game.minimum_system_requirements?.processor}</p>
                            <p>{game.minimum_system_requirements?.memory}</p>
                            <p>{game.minimum_system_requirements?.graphics}</p>
                            <p>{game.minimum_system_requirements?.storage}</p>
                        </div>
                    </div>
                    </div>
                    }
                </Grid>
                </Grid>
                </section>
         
                </>
                }
            </Container>
         
        </section>
    )
}

export default GameDetails