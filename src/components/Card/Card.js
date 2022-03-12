import React, { useState } from "react";
import CardImage from "../CardImage/CardImage";
import InitialImage from "../InitialImage/InitialImage";

const Card = (cardData) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <div onClick={handleClick}>
      {!isClicked ? (
        <InitialImage />
      ) : (
        <CardImage id={cardData.id} imageSrc={cardData.logo} />
      )}
    </div>
  );
};

export default Card;
