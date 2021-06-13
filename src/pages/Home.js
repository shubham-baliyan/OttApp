import React from "react";
import MasterFooter from "../components/footer/Masterfooter";
import Banner from "../components/banner/banner";
import CardSlider from "../components/Cards/CardSlider";
import CardSlider2 from "../components/Cards/CardSlider2";
import Header from "../components/header/Header";
import { gql, useQuery } from "@apollo/client";
import loader from "../assets/images/loader.gif";

const ACTION_MOVIES = gql`
  query {
    movies(limit: 10) {
      title
      tagline
      poster
      runtime
      genres {
        name
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(ACTION_MOVIES);
  console.log(data);
  if (loading) return <img src={loader} alt="loader" />;
  if (error) return <p>Error :(</p>;

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Header topClass="top-header" />
      <Banner />
      <CardSlider title="Action" data={data.movies} />
      {/* <CardSlider2 title="drama" data={data.movies} /> */}
      <MasterFooter />
    </div>
  );
};

export default Home;
