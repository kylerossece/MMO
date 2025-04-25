

import { useGameContext } from "../../../helpers/gameContext";
import GameInformation from "./GameInformation";
import type { gameType } from "../../../types/gameTypes";
import Stack from '@mui/material/Stack';




const GamesList = () => {


    const { gameList }   = useGameContext();
    const genre = gameList?.map((game : any) => game.genre).filter((value : any, index : any, self : any) => self.indexOf(value) === index)
    const platform = gameList?.map((game : any) => game.platform).filter((value: any, index: any, self: any) => self.indexOf(value) === index);

    console.log("genre", genre);
    console.log("platform", platform)
    const games = gameList?.map((game : gameType) => {

        return   (  
            <GameInformation game={game} key={game.id}></GameInformation>
        )
    })

    return (
        <Stack spacing={0}>
            {games}
        </Stack>
    
    )
}

export default GamesList;