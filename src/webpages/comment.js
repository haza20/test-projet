import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const { data } = await Axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );

      setComments(data);
    };
    getComments();
  }, [id]);
  return (
    <div>
      {comments.map((comment) => (
        <div>
          <hr />
          {comment.name}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Comments;
