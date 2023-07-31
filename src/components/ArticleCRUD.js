import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './ArticleCrud.css';
import CreateArticle from './CreateArticle';

import UpdateArticle from './UpdateArticle';
import DeleteArticle from './DeleteArticle';

import ArticlesList from './ArticleList';

const ArticleCRUD = () => {
  return (
    <div className="crud-container">
      <nav className="crud-nav">
        <ul>
          <li>
            <Link to="/blogs/create-article">Create Article</Link>
          </li>
          <li>
            <Link to="/blogs/articles">Article Lists</Link>
          </li>
          <li>
            <Link to="/blogs/update-artcle">Update Article</Link>
          </li>
          
        </ul>
      </nav>
      <div className="crud-content">
        <Routes>
        <Route path="/" element={<ArticlesList />} />
          <Route path="/create-article" element={<CreateArticle />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/update-article" element={<UpdateArticle />} />
          <Route path="/delete" element={<DeleteArticle />} />
        </Routes>
      </div>
    </div>
  );
};

export default ArticleCRUD;
