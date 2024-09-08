import { createContext, useRef } from "react";
import VideoScreen from "./VideoScreen";
import { VideoController } from "./VideoController";


export const VideoContext = createContext(null);

export function VideoPlayer(props){
  const videoRef = useRef();
  return(
    <VideoContext.Provider value={videoRef}>
      <VideoScreen />
      <VideoController />
    </VideoContext.Provider>
  )
}
