import GameGrid from "../components/GameGrid.js/GameGrid";

import { cards } from "../data";
import { shuffleArr } from "../utils/shuffleArr";

const MemoryGame = () => {
  const shuffledImages = shuffleArr(cards);

  return <GameGrid gridItems={shuffledImages} />;
};

/*
{Array(row)
        .fill("row")
        .map((row, rowI) =>
          Array(col)
            .fill("col")
            .map((col, colI) => <img src="" alt />)
        )}

*/

export default MemoryGame;
