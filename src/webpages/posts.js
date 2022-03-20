import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <div>
        <div>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
