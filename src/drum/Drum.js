import React, { useEffect, useState } from "react";
import sound1 from "./audio/audio1.mp3";
import sound2 from "./audio/audio4.wav";
import "./Drum.css";


function Drum() {
  const audio1 = new Audio(sound1);
  const audio2 = new Audio(sound2);
  const [isPlaying, setisPlaying] = useState(false);
  const [isclass, setIsClass] = useState("not-play");
  useEffect(() => {
    audio1.load();
    window.addEventListener("keypress", selectSound);
  }, []);
  function selectSound(e) {
    console.log(e);
    if (e.key === "a") {
      findPlay1();
      PlaySound1();
    } else if (e.key === "d") {
      findPlay2();
      PlaySound2();
    }
  }

  function findPlay1() {
    console.log("link");
    setisPlaying(!isPlaying);
    
    PlaySound1();
  }
  function findPlay2() {
    console.log("link");
    setisPlaying(!isPlaying);
    
    PlaySound2();
  }
  function PlaySound1() {
    audio1.currentTime = 0;
    audio1.play();
    StopSound2();
    console.log(audio1.duration);
    setIsClass("play");
    setTimeout(() => {
      setIsClass("not-play");
    }, audio1.duration * 1000 );
  }
  function StopSound1() {
    audio1.pause();
  }
  function PlaySound2() {
    audio2.currentTime = 0;
    StopSound1()
    audio2.play();
    setIsClass("play");
    console.log(audio2.duration);
    setTimeout(() => {
      setIsClass("not-play");
    }, audio2.duration * 1000);
  }
  function StopSound2() {
    audio2.pause();
  }

  return (
    <>
    <div className="container">
    <div className={isclass} onClick={findPlay1}><div></div></div>
    <div className={isclass} onClick={findPlay2}><div></div></div>
    </div>
      

      <div className="footer">
        FOR MOBILE DEVICES TAP ON CLOUDS || FOR KEYPAD DEVICES EITHER TAP OR USE *A* & *D* KEYS
      </div>

      <div className="container_bottom">

      </div>
    </>
  );
}
export default Drum;
