import React from "react";
import MasterFooter from "../components/footer/Masterfooter";
import Banner from "../components/banner/banner";
import Cards from "../components/Cards/card";
import CardSlider from "../components/Cards/CardSlider";
import CardSlider2 from "../components/Cards/CardSlider2";
import Header from "../components/header/Header";



const Home = () => {
  return (
    <div>
      <Header topClass="top-header" />

      {/* <h1 className="text-center"></h1> */}
      <Banner />
      {/* <Cards title="Action" /> */}
      <CardSlider title="Action" />
      <CardSlider2 title="drama" />
      <MasterFooter />

    </div>
  );
};

export default Home;
