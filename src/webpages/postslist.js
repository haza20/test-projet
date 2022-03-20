import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './posts';



const PostsList = ({id}) => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await Axios.get(
          `https://jsonplaceholder.typicode.com/posts?userid=${id}`
        );
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [id]);
  return (
    
     
      <div>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
   
  );
};

export default PostsList;
