import { useEffect, useState } from "react";
import { useGameContext } from "../../../helpers/gameContext";
import { useParams } from "react-router-dom";
import type { News } from "../../../types/gameTypes";
import { getGames } from "../../../api/games";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const GameArticle = () => {
    const { setNews } = useGameContext();
    const { newsId } = useParams();
    const [article, setArticle] = useState<News | undefined>(undefined);

    useEffect(() => {
  
            getGames(null, true).then((data) => {
                setNews(data);
                const article = data.find(
                    (item: News) => item.id === Number(newsId)
                );
                setArticle(article);
        } )
    }, []);

    if (!article) {
        return <div>Loading...</div>; 
    }

    return (
        <section className="h-full w-full min-h-screen bg-gray-900 relative overflow-hidden">
               <CssBaseline />
               <Container maxWidth="md">
        <h1 className="text-white text-2xl my-2">{article.title}</h1>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: article.article_content || '' }}>
        </div>
        </Container>
        </section>
    );
};

export default GameArticle;
