// ArticleDetails.jsx
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../services/firebase'; // ← убедитесь, что путь правильный
import '../articles/articleDetalis.css';

const ArticleDetails = () => {
  const { id: articleId } = useParams();
  const [article, setArticle] = useState(null);

  const fetchArticle = useCallback(async () => {
    try {
      console.log('Получение статьи с ID:', articleId);
      const articleData = await getArticleById(articleId);
      console.log('Данные статьи:', articleData);
      setArticle(articleData);
    } catch (error) {
      console.error('Ошибка при получении данных статьи:', error);
    }
  }, [articleId]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  return (
    <div>
      {article ? (
        <div>
          <h2 className='article-title'>{article.title}</h2>
          <img className='article-img' src={article.imageUrl} alt={article.title} />
          <p className='article-description'>{article.description}</p>
          <div className='expert-comment'>
            <h3>Экспертный комментарий</h3>
            <p>{article.expertComment}</p>
          </div>
        </div>
      ) : (
        <div>Загрузка...</div>
      )}
    </div>
  );
};

export default ArticleDetails;
