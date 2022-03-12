import React from "react";
import Card from "../Card/Card";

import Grid from "../Grid/Grid";

const GameGrid = ({ gridItems }) => {
  // 2 click ?
  // 2 click ? match ?
  // 2 click ? unmatch?
  return (
    <Grid>
      {gridItems.map((gridItem) => {
        return <Card key={gridItem.id} {...gridItem} />;
      })}
    </Grid>
  );
};

export default GameGrid;
