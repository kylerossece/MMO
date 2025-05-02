
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
        getGames(Number(gameId), false).then((data) => {
                setGame(data)
        })
    }, [])

    const handleImage = (image: string) => {
        setImage(image)
    }

    const redirectToProduct = (url : string) => {
        window.open(url, "_blank")
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
                                    key={screenshot.id}
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
                            <p className="mb-2">Genre:</p>
                            <p className="mb-2">Release Date:</p>
                            <p className="mb-2">Platform:</p>
                            <p className="mb-2">Publisher:</p>
                            <p>Developer:</p>
                        </div>
                        <div className="text-xs tracking-wide">
                            <p className="mb-2">{game.genre}</p>
                            <p className="mb-2"> {dateFormatter(game.release_date)}</p>
                            <p className="mb-2">{game.platform}</p>
                            <p className="mb-2">{game.publisher}</p>
                            <p>{game.developer}</p>
                        </div>
                       
                    </div>
                    <div className="mt-10">
                            <button type="button" className="cursor-pointer justify-end bg-gray-700 hover:bg-gray-800 py-2 px-3 rounded-md  text-gray-200" 
                            onClick={() => redirectToProduct(game.game_url)}>
                                Visit Product Page</button>
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
                            <p className="mb-2">OS:</p>
                            <p className="mb-2">Processor:</p>
                            <p className="mb-2">Memory:</p>
                            <p className="mb-2">Graphics:</p>
                            <p className="mb-2">Storage:</p>
                        </div>
                        <div className="tracking-wide">
                            <p className="mb-2">{game.minimum_system_requirements?.os}</p>
                            <p className="mb-2"> {game.minimum_system_requirements?.processor}</p>
                            <p className="mb-2">{game.minimum_system_requirements?.memory}</p>
                            <p className="mb-2">{game.minimum_system_requirements?.graphics}</p>
                            <p className="mb-2">{game.minimum_system_requirements?.storage}</p>
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