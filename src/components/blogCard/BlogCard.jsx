// BlogCard.js
import React from 'react';
import mockData from './mockData'; // обновите путь к mockData
import './blogCard.css';
import BlogPost from './BlogPost';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogCard = () => {
  const firstTenPosts = mockData.slice(0, 10);

  return (
    <div className="container">
      <div className="row">
        {firstTenPosts.map((data, index) => (
  <div key={index} className="col-4">
    <BlogPost
      id={data.id}
      title={data.title}
      imageUrl={data.imageUrl}
      
    />
  </div>
))}
      </div>
    </div>
  );
};

export default BlogCard;
