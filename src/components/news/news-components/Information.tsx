import type {News} from "../../../types/gameTypes"
import { useGameContext } from "../../../helpers/gameContext";
import { LazyLoadImage } from 'react-lazy-load-image-component';

type NewsProps = {
    news: News;
}

const Information = ({news} : NewsProps) => {

    const {setNewsId} = useGameContext();

    const handleGameClick = (newsId: number | undefined) => {
        setNewsId(newsId)
        window.open("/news/" + newsId, "_blank")
      }
    return(
        <div className="flex gap-4  hover:scale-105  bg-gray-800 hover:rounded-sm shadow-2xl mt-0.5 ">
                <LazyLoadImage
                className="w-auto rounded-md h-40 ml-1 cursor-pointer"
                alt={news.title}
                src={news.thumbnail || ''} 
                onClick={() => handleGameClick(news.id)}
             />
             <div>
             <h4 className="hover:underline cursor-pointer text-gray-200 text-lg mt-4 " onClick={() => {handleGameClick(news.id)}}>{news.title}</h4>
             </div>

        </div>
    )
}


export default Information;