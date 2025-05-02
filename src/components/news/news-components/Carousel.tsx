
import { getGames } from "../../../api/games"
import { useEffect} from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper} from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { setNews } from '../../../store/modules/news'
import { useGameContext } from "../../../helpers/gameContext";
import type {News} from "../../../types/gameTypes";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../../store/store";

const NewsCarousel = () => {

  const dispatch = useDispatch()
  const news = useSelector((state: RootState) => state.news.news)

    const {setNewsId} = useGameContext();

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };

      const handleGameClick = (newsId: number | undefined) => {
        setNewsId(newsId)
        window.open("/news/" + newsId, "_blank")
      }
    useEffect(() => {
        getGames(null, true).then((data) => {
    
          dispatch(setNews(data))
          console.log("data",news)
        })
    }, [dispatch])
    return(
        <Carousel
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        >
           {news && news.map((game : News) => (
        <Paper key={game.id} elevation={3} style={{ padding: 0, margin: 8, height: 280 }} className="bg-gray-900">
        <div className="flex gap-3 overflow-hidden"  onClick={() => handleGameClick(game.id)}>
          <LazyLoadImage
                className="w-full h-[280px] cursor-pointer relative"
                alt={game.title}
                src={game.main_image|| ''} 
             />
             <div className="absolute bg-gray-900/50 text-gray-100  w-full px-5">
             {game.title}
             </div>
          </div>
        </Paper>
      ))}
        </Carousel>
    )
}

export default NewsCarousel