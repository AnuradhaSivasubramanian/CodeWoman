import React from "react";
import "./scss/Compare.scss";

const HeroList = ({ onClick, obj }) => {
  const SelectedOb = () => {
    onClick(obj);
  };

  return <img src={obj.image.url} onClick={SelectedOb} alt="avatar" />;
};

export default HeroList;
