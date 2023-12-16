// BlogPost.js
import React from 'react';

const BlogPost = ({ title, imageUrl, expertComment }) => {
    
  return (
    <div className='blogCard-body'>
          <img className='blogCard-img' src={imageUrl} alt={title}  />
          <h2 className='blogCard-title'>{title}</h2>
      <p className='blogCard-text'>{expertComment}</p>
    </div>
  );
};

export default BlogPost;
