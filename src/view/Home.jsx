import React, { Component } from "react";
import { book, diploma, market, student } from "../resource/logos/index";
import {
  bgdPencil,
  bgdGirl,
  kidsCoding1,
  kidsCoding2,
  kidsCoding3
} from "../resource/pictures/index";
import {
  ContentWithButton,
  ContentWithCarousel,
  ContentWithItemCard
} from "../components/index";
const content =
  "dsafdasffffffffffffffffffffffffffffffffffffffffffffffasgvcxvcxcvcxvx";
const btnName = "ENROLL NOW";
const carouselArr = [kidsCoding1, kidsCoding2, kidsCoding3];
const cardArr = [
  {
    img: book,
    title: "dadfsf",
    content: "dsafdsaffdafassssssssssssssssssssssssssssssssss"
  },
  {
    img: diploma,
    title: "dadfsf",
    content: "dsafdsaffsvvhhhhhhhhhhbbbbbbbbbbbbbbbbbbbbbbb"
  },
  {
    img: market,
    title: "dadfsf",
    content: "dsafdsaffgfdsgetyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
  }
];
const title = "KEEP LEARNING WITH ALICE ACADEMY";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ContentWithButton
          backgroundImage={bgdPencil}
          content={content}
          btnName={btnName}
          urlTransfer="enroll"
        />
        <ContentWithItemCard title={title} cardArr={cardArr} />
        <ContentWithCarousel carouselArr={carouselArr} />
      </div>
    );
  }
}

export default Home;
