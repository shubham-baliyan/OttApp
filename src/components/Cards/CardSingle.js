import React from "react";
import pic from "../../assets/images/pic.webp";

const CardSingle = ({ item }) => {
  return (
    <div className="card__container">
      <div>
        <img className="card__img" src={item.poster} alt="big bull" />
      </div>
      <div className="card__details">
        <h1 className="card__h1">{item.title}</h1>
        <h2 className="card__h2">
          {item.runtime}, <br />
        </h2>
        <p className="card__p">{item.tagline}</p>
        <button className="card__button">
          <i className="fa fa-play"></i>
          <a className="card__button--link" href="#">
            {" "}
            Watch now{" "}
          </a>
        </button>
        <button className="card__button">
          <i className="fa fa-plus"></i>
          <a className="card__button--link" href="#">
            {" "}
            Add to WatchList{" "}
          </a>
        </button>
      </div>
    </div>
  );
};
export default CardSingle;
