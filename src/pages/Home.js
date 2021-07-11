import React from "react";
import MasterFooter from "../components/footer/Masterfooter";
import Banner from "../components/banner/banner";
import CardSlider from "../components/Cards/CardSlider";

import { gql, useQuery } from "@apollo/client";
import Loader from "../components/Loader";
import TopRated from "../components/TopRated";
import Error from "../components/Error";
import CategoryWise from "../components/CategoryWise";

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
      <TopRated title="Top Rated" />
      <CardSlider title="Action" data={data.movies} />
      <CategoryWise id="60c052d1c863d03bd0afae9a" title="Drama" />
      <CategoryWise id="60c052aec863d03bd0afae98" title="Science Fiction " />
      <CategoryWise id="60c052fcc863d03bd0afae9e" title="Comedy" />
    </div>
  );
};

export default Home;
