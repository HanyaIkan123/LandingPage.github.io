import React from 'react';

const ArticleItem = ({ article }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
      <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
      <p className="text-gray-700 mb-4">{article.description}</p>
      <p className="text-sm text-gray-500">{article.date}</p>
    </article>
  );
};

export default ArticleItem;
