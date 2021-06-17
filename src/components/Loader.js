import React from "react";
import loader from "../assets/images/loader.gif";

const Loader = () => {
  return (
    <div
      style={{
        width: "100v1",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={loader} alt="loading Icon" />
    </div>
  );
};

export default Loader;
