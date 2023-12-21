// ArticleDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchArticle() {
      try {
        const response = await fetch(`/api/posts/${id}`);

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
          <h2>{article.title}</h2>
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.expertComment}</p>
          <CommentSection articleId={id} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ArticleDetails;
