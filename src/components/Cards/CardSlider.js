import React from "react";
import Slider from "react-slick";
import CardSingle from "./CardSingle";
import { Slider7 as settings } from "../../service/script";

const CardSlider = (props) => {
  return (
    <div className="my-5 mx-2">
      <h1 className="card__categoryHeading"> {props.title}</h1>
      <Slider {...settings} className="card__slider">
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
        <CardSingle />
      </Slider>
    </div>
  );
};

export default CardSlider;
