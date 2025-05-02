import { useEffect, useState, useRef } from "react";
import { useGameContext } from "../../../helpers/gameContext";
import Information from "./Information";
import type { gameType } from "../../../types/gameTypes";
import Stack from "@mui/material/Stack";

const listedGames = 15;

const GamesList = () => {
  const { gameList, filteredList } = useGameContext();
  const allGames = filteredList && filteredList.length > 0 ? filteredList : gameList;

  const [visibleCount, setVisibleCount] = useState(listedGames);
  const loadRef = useRef<HTMLDivElement | null>(null);

  const visibleGames = allGames?.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + listedGames, allGames?.length));
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
  }, [allGames?.length]);

  return (
    <Stack spacing={0}>
      {visibleGames?.map((game: gameType) => (
        <Information game={game} key={game.id} />
      ))}
      {visibleCount < allGames?.length && (
        <div ref={loadRef} style={{ height: "50px" }}></div>
      )}
    </Stack>
  );
};

export default GamesList;
