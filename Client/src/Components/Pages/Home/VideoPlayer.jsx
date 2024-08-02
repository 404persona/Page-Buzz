import React, { useEffect, useRef, useState } from 'react';
import { FaCirclePause, FaCirclePlay, FaPause, FaPlay } from "react-icons/fa6";

const VideoPlayer = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const playVideos = () => {
      if (!videoRef1.current || !videoRef2.current || !videoRef3.current) {
        return; // Prevent errors if video elements are not yet available
      }

      videoRef1.current.play();
      videoRef2.current.play();
      videoRef3.current.play();
    };

    const pauseVideos = () => {
      if (!videoRef1.current || !videoRef2.current || !videoRef3.current) {
        return; // Prevent errors if video elements are not yet available
      }

      videoRef1.current.pause();
      videoRef2.current.pause();
      videoRef3.current.pause();
    };

    if (isPlaying) {
      playVideos();
    } else {
      pauseVideos();
    }

    // Cleanup function to ensure videos are paused on unmount
    return () => pauseVideos();
  }, [isPlaying]); // Only update when isPlaying changes

  const togglePlayButton = async () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <div>
          <video ref={videoRef1} loop mute preload="auto" className="flex space-x-8 object-cover rounded-full w-[330px] h-[130px]">
            <source src="/Video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=''>
          <video ref={videoRef2} loop mute preload="auto" className="flex rounded-full w-[330px] h-[130px] object-cover relative right-[80px]" >
            <source src="/Video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <video ref={videoRef3} loop mute preload="auto" className="flex space-x-8 rounded-full w-[330px] h-[130px] object-cover">
            <source src="/HeroVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className='flex items-start justify-start relative right-[50px]'>
        <button onClick={togglePlayButton} className="absolute bg-green-500 rounded-full w-16 h-16 flex items-center justify-center">
          {isPlaying ? (
            <FaPause className="text-white w-8 h-8 " />
          ) : (
            <FaPlay className="text-white w-8 h-8" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
