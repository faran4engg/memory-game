import React, { useState } from "react";
import CardImage from "../CardImage/CardImage";
import InitialImage from "../InitialImage/InitialImage";

const Card = ({ id, src }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <div onClick={handleClick}>
      {!isClicked ? <InitialImage /> : <CardImage id={id} imageSrc={src} />}
    </div>
  );
};

export default Card;
