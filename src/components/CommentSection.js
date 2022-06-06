import React from "react";

function CommentSection({ video, hideComments }) {
  function displayCommentSection() {
    return hideComments ? "none" : null;
  }

  const commentedUsers = video.comments.map((comment) => {
    return (
      <div key={comment.user} style={{ display: displayCommentSection() }}>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
      </div>
    );
  });
  return (
    <div>
      <section id="Comments">
        <h2>2 Comments</h2>
        {commentedUsers}
      </section>
    </div>
  );
}

export default CommentSection;
