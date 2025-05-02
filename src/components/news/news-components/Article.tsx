import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { News } from "../../../types/gameTypes";
import { getGames } from "../../../api/games"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { setNews } from '../../../store/modules/news'
import {useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Article = () => {

    const { newsId } = useParams();

    const dispatch = useDispatch()
    const [article, setArticle] = useState<News | undefined>(undefined);
    const news = useSelector((state: RootState) => state.news.news);

    useEffect(() => {
        if (news.length && newsId) {
          const foundArticle = news.find((item: News) => item.id === Number(newsId));
      
          setArticle(foundArticle);
        } else {
              getGames(null, true).then((data) => {
                    dispatch(setNews(data))
          
                  })
        }
      }, [news, newsId])


    return (
        <section className="h-full w-full min-h-screen bg-gray-900 relative overflow-hidden">
               <CssBaseline />
               <Container maxWidth="md">
        <h1 className="text-white text-2xl my-2">{article?.title}</h1>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: article?.article_content || '' }}>
        </div>
        </Container>
        </section>
    );
};

export default Article;
