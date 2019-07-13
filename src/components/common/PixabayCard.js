import React from "react";

const PixabayCard = props => {
  const handleChooseImg = e => {
    console.log(e.target.src);
    const imgSrc = e.target.src;
    props.handleImgSrc(imgSrc);
  };

  return (
    <div className="col-md-3 my-1">
      <img
        onClick={handleChooseImg}
        className="img-thumbnail d-block"
        src={props.image}
        alt="sample to choose"
        style={{ height: "115px", overflow: "hidden", cursor: "pointer" }}
      />
    </div>
  );
};

export default PixabayCard;
