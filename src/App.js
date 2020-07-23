import React, {useRef} from 'react';
import FullIn from "./fully in letting go 2.mp3"

function App() {
  const audioRef = useRef(null);

  const start = () => {
    if (audioRef?.current){
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  const stop = () => {
    if (audioRef?.current){
      audioRef.current.pause();
    }
  }
  return (
    <div className="App">
      <audio
        ref={audioRef}
        src={FullIn} />
      <button className={"start"} onClick={start}>BREATH</button>
      <button className={"stop"} onClick={stop}>stop</button>
    </div>
  );
}

export default App;
