import { useQuery, gql } from "@apollo/client";
import React from "react";
import { Container } from "reactstrap";
const GET_SINLGE = gql`
  query ($id: ID!) {
    movie(id: $id) {
      id
      title
      poster
      heroImg
      overview
      tagline
    }
  }
`;
function Single(props) {
  const { id } = props.match.params;
  const { data, error, loading } = useQuery(GET_SINLGE, {
    variables: { id },
  });
  console.log(data);

  return (
    <div>
      <Container>
        {data && data.movie ? (
          <div className="__container">
            <div className="img">
              <img src={data.movie?.heroImg} alt="poster" />
            </div>
            <div className="__details">
              <h4>{data.movie.title}</h4>
              <h5>1 hr 41 min ● 2021 ● Crime ● 12+ ● Hindi </h5>
              <p>
                {data.movie.tagline}
                <br />
                off the beggest hustle that shock indian's financial fabric.
                Inspired by ture events.
              </p>
              <div className="__buttons">
                <button>
                  <i className="fa fa-play"></i> WATCH NOW
                </button>
                <button>
                  <i className="fa fa-plus"></i>WATCHLIST
                </button>
                <button>
                  <i className="fa fa-share-icon"></i>SHARE
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <div className="slidercss"></div>
      </Container>
    </div>
  );
}

export default Single;
