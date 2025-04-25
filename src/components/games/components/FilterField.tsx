import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import { useGameContext } from "../../../helpers/gameContext";
import type { gameType } from '../../../types/gameTypes';

const FilterField = () => {
    const { gameList }   = useGameContext();

    const sortArr = (items: gameType[], type: keyof gameType) => {
        return items
          .map((game) => typeof game[type] === 'string' ? game[type].trim() : game[type]) 
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
    console.log("genres", genres)
    console.log("genres", platforms)
 

    const genreRadio = genres?.map((item: string | number | null | undefined, index: number) => {
        return (
            <FormControlLabel key={index} value={item} control={<Radio />} label={item} /> 
        )
    })
    const platformRadio = platforms?.map((item: string | number | null | undefined, index: number) => {
        return (
            <FormControlLabel key={index} value={item} control={<Radio />} label={item} /> 
        )
    })


    
    return (
        <FormControl className='text-white'>
        {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
        >
         {genreRadio}
        </RadioGroup>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
        >
         {platformRadio}
        </RadioGroup>
      </FormControl>
    )
}

export default FilterField;