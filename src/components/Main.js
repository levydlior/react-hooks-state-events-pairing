import React, { useState } from "react";
import CommentSection from "./CommentSection";
import DetailsSection from "./DetailsSection";

function Main({ video, hideComments, onButtonChange }) {
  const [votes, setVotes] = useState({
    upvotes: video.upvotes,
    downvotes: video.downvotes,
  });

 

  function handleVoteChange(newVoteCount) {
    setVotes({
      ...votes,
      newVote: newVoteCount,
    });
  }

  return (
    <main>
      <DetailsSection
        video={video}
        votes={votes}
        onVoteChange={handleVoteChange}
        hideComments={hideComments}
        onButtonChange={onButtonChange}
      />
      <CommentSection video={video} 
       hideComments={hideComments} 
       />
    </main>
  );
}

export default Main;
