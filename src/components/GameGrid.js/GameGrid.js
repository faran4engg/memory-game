import React from "react";
import Card from "../Card/Card";

import Grid from "../Grid/Grid";

const GameGrid = ({ gridItems }) => {
  // 2 click ?
  // 2 click ? match ?
  // 2 click ? unmatch?
  return (
    <Grid>
      {gridItems.map(({ logo, id }) => {
        return <Card key={id} id={id} src={logo} />;
      })}
    </Grid>
  );
};

export default GameGrid;
