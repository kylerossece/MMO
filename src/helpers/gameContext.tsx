import { useContext,createContext } from "react";

export const GameContext = createContext<any | null>(null);

export const useGameContext = () => {
    const context = useContext(GameContext);
    return context
}