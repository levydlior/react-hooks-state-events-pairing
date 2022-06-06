import React from "react";

function DetailsSection({ video, votes, onVoteChange, hideComments, onButtonChange}) {
  function handleClick(e) {
    const name = e.target.name;

    const newVoteCount = votes[name]++;
    onVoteChange(newVoteCount);
  }

  return (
    <div>
      <div id="details-section">
        <h1>{video.title}</h1>
        <div id="Stats">
          <p>
            {video.views} Views | Updated {video.createdAt}
          </p>
          <section id="Votes">
            <button name="upvotes" onClick={handleClick}>
              {votes.upvotes}👍
            </button>
            <button name="downvotes" onClick={handleClick}>
              {votes.downvotes}👎
            </button>
          </section>
          <button onClick={(e)=> onButtonChange(e)}>{!hideComments? 'Hide Comments' : 'Show Comments'}</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsSection;
