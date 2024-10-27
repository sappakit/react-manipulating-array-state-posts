import { useState } from "react";
import PostList from "./PostList"; // Ensure this path is correct

function Posts() {
  const [countLikes, setCountLikes] = useState(
    PostList.map((post) => post.likes)
  );

  const incrementLikes = (index) => {
    setCountLikes((prevLikes) =>
      prevLikes.map((like, i) => (i === index ? like + 1 : like))
    );
  };

  const decrementLikes = (index) => {
    setCountLikes((prevLikes) =>
      prevLikes.map((like, i) => (i === index && like > 0 ? like - 1 : like))
    );
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {PostList.map((post, index) => (
          <div className="post-item" key={post.id}>
            <div className="post-header">
              <h2>
                {post.title} # {post.id}
              </h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{countLikes[index]}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button
                className="like-button"
                onClick={() => incrementLikes(index)}
              >
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => decrementLikes(index)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
