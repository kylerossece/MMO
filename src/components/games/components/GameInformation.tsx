import type { gameType } from "../../../types/gameTypes";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {dateFormatter } from "../../../helpers/dateFormatter";
import { FaWindows } from "react-icons/fa6";
import { GoBrowser } from "react-icons/go";
import Tooltip from '@mui/material/Tooltip';
import { useGameContext } from "../../../helpers/gameContext";

type GameInformationProps = {
    game: gameType;
  };

const GameInformation = ({ game }: GameInformationProps) => {
  const {setGameId } = useGameContext();

    const handleGameClick = (gameId: number | undefined) => {
      setGameId(gameId)
      window.open("/game/" + gameId, "_blank")
    }
    return (
        <div className="flex gap-4 items-center hover:scale-105  bg-gray-800 hover:rounded-sm shadow-2xl mt-0.5 ">
              <LazyLoadImage
                className="w-auto rounded-md h-20 ml-1 cursor-pointer"
                alt={game.title}
                src={game.thumbnail || ''} 
                onClick={() => handleGameClick(game.id)}
             />
             <div className="my-2 tracking-tighter flex flex-col gap-1 text-xs">
      
                <h4 className="hover:underline cursor-pointer text-amber-50 text-sm " onClick={() => {handleGameClick(game.id)}}>{game.title}</h4>
                <p className=" bg-gray-700 inline-block px-1.5 py-0.5 rounded-md  text-white max-w-fit">{game.genre?.trim()}</p>
                <p className=" tracking-wide uppercase text-gray-400 ml-0.5 flex items-center gap-1">
                <Tooltip title={game.platform == "PC (Windows)" ? 'PC (Windows)' : 'Browser'}>
                  <span>{game.platform === "PC (Windows)" ? <FaWindows/> : 
                          game.platform === "Web Browser" ? <GoBrowser/> : <div className="flex gap-1"><FaWindows /> <GoBrowser/></div> }</span>
                  </Tooltip>
                  {dateFormatter(game.release_date)}  </p>
             </div>
        </div>
    )
}

export default GameInformation;