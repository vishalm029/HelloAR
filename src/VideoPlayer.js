import React, { useState, useRef } from 'react';

const VideoPlayer = ({ src, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleTogglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={src}
        controls
        width="100%"
        onEnded={() => setIsPlaying(false)}
      ></video>
      <h2>{title}</h2>
      <div>
        <button onClick={handleTogglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={handleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
