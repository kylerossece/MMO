import { useEffect, useState, useRef } from "react";
import Stack from "@mui/material/Stack";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import Information from "./Information";

const listedNews = 10;

const NewsStack = () => {
  const news = useSelector((state: RootState) => state.news.news);
  const [visibleCount, setVisibleCount] = useState(listedNews);
  const loadRef = useRef<HTMLDivElement | null>(null);

  const visibleNews = news?.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + listedNews, news?.length));
        }
      },
      {
        root: null,
        rootMargin: "1px",
        threshold: 1.0,
      }
    );

    const current = loadRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [news?.length]);

  return (
    <Stack spacing={0}>
      {visibleNews?.map((item) => (
        <Information news={item} key={item.id} />
      ))}
      {visibleCount < news?.length && (
        <div ref={loadRef} style={{ height: "50px" }}></div>
      )}
    </Stack>
  );
};

export default NewsStack;
