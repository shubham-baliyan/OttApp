import React from "react";
import MasterFooter from "../components/footer/Masterfooter";
import Banner from "../components/banner/banner";
import CardSlider from "../components/Cards/CardSlider";

import { gql, useQuery } from "@apollo/client";
import Loader from "../components/Loader";
import TopRated from "../components/TopRated";
import Error from "../components/Error";

const ACTION_MOVIES = gql`
  query {
    movies(limit: 20) {
      id
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
  let { loading, error, data } = useQuery(ACTION_MOVIES);
  console.log(data);

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div>
      <Banner />
      <CardSlider title="Action" data={data.movies} />
      <TopRated />
    </div>
  );
};

export default Home;
