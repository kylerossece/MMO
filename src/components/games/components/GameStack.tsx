

import { useGameContext } from "../../../helpers/gameContext";
import GameInformation from "./GameInformation";
import type { gameType } from "../../../types/gameTypes";
import Stack from '@mui/material/Stack';




const GamesList = () => {


    const { gameList, filteredList }   = useGameContext();
    const games = (filteredList && filteredList.length > 0 ? filteredList : gameList)?.map((game : gameType) => {

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