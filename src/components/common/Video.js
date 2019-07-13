import React from "react";

const Video = props => {
  return (
    <div className="col-md-5 embed-responsive embed-responsive-21by9">
      <iframe
        src={props.video}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
};

export default Video;
