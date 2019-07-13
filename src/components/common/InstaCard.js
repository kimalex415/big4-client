import React from "react";

const InstaCard = props => {
  return (
    <React.Fragment>
      <div className="col-md-4 my-1">
        <img
          className="img-fluid d-block"
          src={props.pic}
          alt="sample to choose"
          style={{
            height: "200px",
            width: "200%",
            overflow: "hidden",
            borderRadius: "5px"
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default InstaCard;
