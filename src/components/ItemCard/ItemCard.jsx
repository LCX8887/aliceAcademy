import React, { Component } from "react";

const ItemCard = ({ img, title, content }) => {
  return (
    <div>
      <img src={img} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ItemCard;
