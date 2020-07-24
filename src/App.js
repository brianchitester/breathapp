import React, { useRef, useState } from "react";
import FullIn from "./fully in letting go 2.mp3";

function App() {
    const audioRef = useRef(null);
    const [count, setCount] = useState(0);
    const [speed, setSpeed] = useState(1);

    const start = () => {
        if (audioRef?.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setCount(count + 1);
        }
    };

    const stop = () => {
        if (audioRef?.current) {
            audioRef.current.pause();
        }
    };

    const updateSpeed = (speed) => {
        setSpeed(speed);
        if (audioRef?.current) {
            audioRef.current.playbackRate = speed;
        }
    };
    return (
        <div className="App">
            <audio ref={audioRef} src={FullIn} />
            <button className={"start"} onClick={start}>
                BREATH
            </button>
            <button className={"stop"} onClick={stop}>
                stop
            </button>
            <input
                class="playback-rate-control"
                type="range"
                min="0.5"
                max="1.5"
                step="0.02"
                value={speed}
                onChange={(event) => updateSpeed(event.target.value)}
            />
            <div class="playback-rate-value">Speed {speed}</div>
            <div>Round {count}</div>
        </div>
    );
}

export default App;
