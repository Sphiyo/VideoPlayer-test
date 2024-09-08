import { useContext, useEffect, useState } from "react";
import { VideoContext } from "./VideoPlayer";



export function VideoController(props){
  const videoRef = useContext(VideoContext);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(()=>{
    if(isPlaying){
      videoRef?.current?.play();
    }
    else{
      videoRef?.current?.pause();
    }
  }, [isPlaying])
  return (<button className="btn btn-primary" onClick={(e)=>setIsPlaying(!isPlaying)}>Toggle</button>);
}