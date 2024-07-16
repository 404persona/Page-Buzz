import React, { useEffect, useRef, useState } from 'react';
import { FaCirclePause, FaCirclePlay, FaPause, FaPlay } from "react-icons/fa6";

const VideoPlayer = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    videoRef1.current.play();
    videoRef2.current.play();
    videoRef3.current.play();
  }, []);

  const togglePlayButton = async () => {
    if (isPlaying) {
      videoRef1.current.pause();
      videoRef2.current.pause();
      videoRef3.current.pause();
    } else {
      videoRef1.current.play();
      videoRef2.current.play();
      videoRef3.current.play();
    }
    setIsPlaying(!isPlaying)
  }




  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <div>
          <video ref={videoRef1} loop mute className="flex space-x-8 object-cover rounded-full w-[330px] h-[130px]">
            <source src="https://videos.pexels.com/video-files/10004092/10004092-sd_960_506_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=''>
          <video ref={videoRef2} loop mute className="flex rounded-full w-[330px] h-[130px] object-cover relative right-[80px]" >
            <source src="https://videos.pexels.com/video-files/853878/853878-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video ref={videoRef3} loop mute className="flex space-x-8 rounded-full w-[330px] h-[130px] object-cover">
            <source src="/HeroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
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
