import React from "react";

const Youtube = props => {
  const handleOnChange = e => {
    props.inputOnChange(e.target.value);
  };

  return (
    <div className="container">
      <h1 class="giga bree-serif regular double-header-line text-center">
        Search YouTube
      </h1>{" "}
      <div className="row ">
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Search Youtube"
            type="text"
            value={props.inputValue}
            onChange={handleOnChange}
          />
          <div className="input-group-append">
            <span
              className="input-group-text text-danger"
              style={{ cursor: "pointer" }}
              onClick={props.searchOnclick}
            >
              Search
            </span>
          </div>
        </div>
      </div>
      <div className="row justify-content-between my-3">
        {props.searchResult}
      </div>
    </div>
  );
};

export default Youtube;
