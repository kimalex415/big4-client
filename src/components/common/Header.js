import React from "react";

const Header = () => {
  return (
    <div
      className="card card-image"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_1280.jpg)",
        height: "500px"
      }}
    >
      <div className="text-white text-center rgba-stylish-strong py-5 px-4">
        <div className="py-5">
          {/* <h2 className="card-title h2 my-4 py-2 hero-title">
            "Leg Day All Day"
          </h2> */}
          <h1 className="mega montserrat bold">
            Everyday is <span className="color-emphasis-1">legday.</span><br />
            Not tommorrow but <span className="color-emphasis-1">today.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
