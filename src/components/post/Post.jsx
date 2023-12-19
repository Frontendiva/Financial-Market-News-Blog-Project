import React, { useEffect, useState } from 'react';
import './post.css';
import BlogCard from '../blogCard/BlogCard';

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Ваш код для получения данных
        const response = await fetch('/api/posts');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error.message);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <BlogCard posts={posts} />
      </div>
    </div>
  );
};

export default Post;
