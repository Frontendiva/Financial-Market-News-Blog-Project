// BlogCard.js
import React from 'react';
import mockData from './mockData';
import './blogCard.css';
import BlogPost from './BlogPost';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogCard = () => {
  return (
    <div className="container">
      <div className="row">
        {mockData.slice(0, 10).map((data) => (
          <div key={data.id} className="col-4">
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

