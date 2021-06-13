import React, { Fragment } from "react";
import Slider from "react-slick";
// import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./Masterbanner";

const Data = [
  {
    img: "home6",
    title: "Harry Potter",
    desc: "",
    // link: "/left-sidebar/collection ",
  },
  {
    img: "home5",
    title: "Avengers Endgame",
    desc: "",
    // link: "/left-sidebar/collection ",
  },
  {
    img: "home1",
    title: "Dark",
    desc: "",
    // link: "/left-sidebar/collection ",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                // link={data.link}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
