// CommentSection.js
import React, { useState } from 'react';

const CommentSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    // Добавление нового комментария в список
    setComments(prevComments => [...prevComments, newComment]);
    // Сброс поля ввода после добавления комментария
    setNewComment('');
  };

  return (
    <div>
      <h3>Комментарии</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Оставьте свой комментарий..."
      />
      <button onClick={handleAddComment}>Добавить комментарий</button>
    </div>
  );
};

export default CommentSection;
