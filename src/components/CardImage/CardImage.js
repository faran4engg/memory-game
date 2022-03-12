import React from "react";

const CardImage = ({ id, imageSrc }) => (
  <img
    key={id}
    src={imageSrc}
    alt="some random text"
    width={100}
    height={100}
  />
);

export default CardImage;
