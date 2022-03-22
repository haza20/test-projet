import React from 'react';
import Comments from './comment';
const Post = ({ post }) => {
  return (
    <div>
      <div>
        <div>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
        <div>
          <Comments id={post.id} />
        </div>
      </div>
    </div>
  );
};

export default Post;
