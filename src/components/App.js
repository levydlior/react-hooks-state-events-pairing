import video from "../data/video.js";
import React, { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";

function App() {
  // console.log("Here's your data:", video);

  const [videoDetails, setVideoDetails] = useState(video);
  const [hideComments,setHideComments] = useState(false)
  
  function handleButtonClick(e){
    setHideComments(!hideComments)
    console.log(hideComments)
  }
  
  return (
    <div className="App">
      <Header video={video} />
      <Main video={video} hideComments={hideComments} onButtonChange={handleButtonClick} />
    </div>
  );
}

export default App;
