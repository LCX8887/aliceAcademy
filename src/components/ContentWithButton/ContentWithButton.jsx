import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./index.css";

const ContentWithButton = ({
  backgroundImage,
  content,
  btnName,
  urlTransfer
}) => {
  const componentStyle = {
    backgroundImage: `url(${backgroundImage})`
  };
  return (
    <div className="ContentWithButton" style={componentStyle}>
      <p>{content}</p>
      <Link to={`/${urlTransfer}`}>
        <button>{btnName}</button>
      </Link>
    </div>
  );
};

export default ContentWithButton;
