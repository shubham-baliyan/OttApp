import React from "react";
import pic from "../../assets/images/pic.webp";

const CardSingle = () => {
  return (
    <div className="card__container">
      <div>
        <img className="card__img" src={pic} alt="big bull" />
      </div>
      <div className="card__details">
        <h1 className="card__h1">Big Bull</h1>
        <h2 className="card__h2">
          1 hr 41 min,Romance Drama, <br />
          Hindi 2019
        </h2>
        <p className="card__p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit...
        </p>
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
