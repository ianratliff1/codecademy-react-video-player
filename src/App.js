import React, { useState } from 'react';
import Video from './Video';
import Menu from './Menu';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

function App() {
	const [src, setSrc] = useState(VIDEOS.fast);

  const handleMenuChange = (selection) => {
    // alert(selection);
    setSrc(VIDEOS[selection]);
  }

	return (
      <div>
        <h1>Video Player</h1>
        <Menu selSrc={handleMenuChange} />
        <Video src={src} />
      </div>
    );
};

export default App;