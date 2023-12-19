// VideoPlayer.js
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl, width, height, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="video-player-container">
      <div className="close-button" onClick={handleClose}>
       <span>&times; </span>
      </div>
      <ReactPlayer
        url={videoUrl}
        controls
        className="magnific-video"
        width={width}
        height={height}
        playing={true}
      />
    </div>
  );
};

export default VideoPlayer;
