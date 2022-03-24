import React from 'react';
import Comments from './comment';

const Post = ({ post }) => {
  return (
    <div>
      <div  className='posts' >
        <div>
        <div class="comment-voting">
      <button type="button">Vote up</button>
      <button type="button">Vote down</button>
    </div>
          <h5 className='comments'>{post.title}</h5>
          <p >{post.body}</p>
        </div>
        <div >
          <Comments id={post.id} />
        </div>
      </div>
    </div>
  );
};

export default Post;
