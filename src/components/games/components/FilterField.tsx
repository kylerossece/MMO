import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import { useEffect, useMemo } from 'react';
import { useGameContext } from "../../../helpers/gameContext";
import type { gameType } from '../../../types/gameTypes';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const FilterField = () => {
    const { gameList, setPlatform, setGenre, genre,platform,  setFilteredList }   = useGameContext();

    const sortArr = (items: gameType[], type: keyof gameType) => {
        return items?.map((game) => typeof game[type] === 'string' ? game[type].trim() : game[type]) 
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort(function (a : any, b : any) {
            if (a < b) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
            return 0;
        }
        ); 
      };
      
    const genres = sortArr(gameList, "genre")
    const platforms = sortArr(gameList, "platform")
 

    const handleGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      const checked = event.target.checked
      if (checked) {

        setGenre((genres : string[]) => [...genres, value]);
      } else {
        setGenre((genres : string[]) => genres.filter((item) => item !== value));
      }
    
    }
    
    const handlePlatform = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      const checked = event.target.checked
      if (checked) {
        setPlatform((platform : string[]) => [...platform, value]);
      } else {
        setPlatform((platform : string[]) => platform.filter((item) => item !== value));
      }
    
    }

    const genreRadio = genres?.map((item: string | number | null | undefined, index: number) => {
      return (
          <FormControlLabel  key={index} value={item} control={<Checkbox onChange={handleGenre} size="small" 
          sx={{
            
            color: "gray",
            '&.Mui-checked': {
            color: "white",
             },
           }}   
            />} label={item}
            
              /> 
      )
  })
  const platformRadio = platforms?.map((item: string | number | null | undefined, index: number) => {
      return (
          <FormControlLabel key={index} value={item} control={<Checkbox onChange={handlePlatform} size="small" 
          sx={{
            
            color: "gray",
            '&.Mui-checked': {
            color: "white",
             },
           }}  
           />} label={item} /> 
      )
  })

      const filteredGames = useMemo(() => {
        return gameList?.filter((game: gameType) => {
            const genreMatch = genre.length ? genre.includes(game.genre) : true;
            const platformMatch = platform.length ? platform.includes(game.platform) : true;
            return genreMatch && platformMatch;
        });
    }, [genre, platform]);

        useEffect(() => {
          setFilteredList(filteredGames);
      }, [filteredGames, setFilteredList]);

    
      // useEffect(() => {
      //     if (filteredGames.length) {
      //         setGameList(filteredGames); 
      //     }
      // }, [filteredGames, setGameList]);



    
    return (
      <div >
       <Accordion defaultExpanded className="bg-gray-800 border border-gray-700 rounded-md">
      <AccordionSummary
          sx={{
            backgroundColor: '#323e4c',
            color: 'white', 
            borderRadius: 0, 
          
          }}
      >
        <Typography component="span" className="font-semibold my-0">
          Narrow by Genre
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="bg-gray-900 px-4 py-2 max-h-[45vh] overflow-y-auto" 
      sx={{
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#444', 
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#101828',
        }
      }}>
        <FormControl className="text-gray-200 text-xs font-extralight">
          {genreRadio}
        </FormControl>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded className="bg-gray-800 border border-gray-700 rounded-md">
      <AccordionSummary
          sx={{
            backgroundColor: '#323e4c',
            color: 'white', 
            borderRadius: 0, 
          
          }}
      >
        <Typography component="span" className="font-semibold my-0">
          Narrow by Platform
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="bg-gray-900 px-4 py-2 ">
      <FormControl className='text-gray-200'>
        {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
         {platformRadio}

      </FormControl>
      </AccordionDetails>
      </Accordion>
      </div>
    )
}

export default FilterField;