// BlogCard.jsx
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
        {firstTenPosts.map((data, id) => (
          <div key={id} className="col-4">
            <BlogPost
              title={data.title}
              imageUrl={data.imageUrl}
              expertComment={data.expertComment}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
