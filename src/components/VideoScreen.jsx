import { useContext } from "react";
import { VideoContext } from "./VideoPlayer";



export default function VideoScreen(props){
  const videoRef = useContext(VideoContext);
  return(
    <div className="d-flex w-100 py-3 justify-content-center bg-secondary">
      <video ref={videoRef} src="video.mp4" width={700}></video>
    </div>
  );
}