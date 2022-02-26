import React from "react";
import video from "../data/video.js";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <Video embedUrl={video.embedUrl} title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} comments={video.comments}></Video>
    </div>
  );
}

export default App;
