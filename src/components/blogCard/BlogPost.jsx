// BlogPost.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './blogPost.css'; // 
const BlogPost = ({ id, title, imageUrl, expertComment }) => {
  return (
    <div className='blogCard-body'>
      <NavLink to={`/article/${id}`}>
        <img className='blogCard-img' src={imageUrl} alt={title} />
        <h2 className='blogCard-title'>{title}</h2>
      </NavLink>
      <p className='blogCard-text'>{expertComment}</p>
    </div>
  );
};

export default BlogPost;
