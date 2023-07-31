// ArticlePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Article from './Article';

const ArticlePage = () => {
  // Use react-router-dom's useParams hook to get the 'id' from the route parameters
  const { id } = useParams();

  return (
    <div>
      <h1>Article Page</h1>
      {/* Render the Article component with the 'id' prop */}
      <Article id={id} />
    </div>
  );
};

export default ArticlePage;
