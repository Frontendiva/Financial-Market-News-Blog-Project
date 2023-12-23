// ArticleDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../articles/articleDetalis.css';

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchArticle() {
      try {
        const response = await fetch(`http://localhost:3004/posts/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setArticle(data);
        }
      } catch (error) {
        console.error('Ошибка при получении данных статьи:', error.message);
      }
    }

    fetchArticle();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <div>
      {article ? (
        <div>
          <h2 className='article-title'>{article.title}</h2>
          <img className='article-img' src={article.imageUrl} alt={article.title} />
          <p className='article-description'>{article.description}</p>
          <div className='expert-comment'>
            <h3>Expert Comment</h3>
            <p>{article.expertComment}</p>
          </div>
          
                    
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ArticleDetails;
