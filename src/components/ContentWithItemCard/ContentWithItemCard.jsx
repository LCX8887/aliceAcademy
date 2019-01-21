import React, { Component } from "react";
import { ItemCard } from "../index";
import { Row, Col } from "antd";
import "./index.css";

const ContentWithItemCard = ({ cardArr, title }) => {
  return (
    <div className="ContentWithItemCard">
      <h1>{title}</h1>
      <hr />
      <Row>
        {cardArr.map(item => (
          <Col span={8}>
            <ItemCard
              img={item.img}
              title={item.title}
              content={item.content}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContentWithItemCard;
