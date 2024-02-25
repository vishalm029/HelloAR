import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const App = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    {
      src: 'https://pixabay.com/videos/abstract-lights-particles-2127/',
      title: 'Video 1',
    },
    {
      src: 'https://pixabay.com/videos/abstract-lights-particles-2127/',
      title: 'Video 2',
    },
    // Add more videos as needed
  ];

  const handleNavigate = (direction) => {
    if (direction === 'next') {
      setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    } else if (direction === 'prev') {
      setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    }
  };

  return (
    <div>
      <button onClick={() => handleNavigate('prev')}>Previous</button>
      <button onClick={() => handleNavigate('next')}>Next</button>
      <VideoPlayer src={videos[currentVideoIndex].src} title={videos[currentVideoIndex].title} />
    </div>
  );
};

export default App;
