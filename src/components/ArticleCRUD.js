import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './ArticleCrud.css';
import CreateArticle from './CreateArticle';
import ReadArticle from './ReadArticle';
import UpdateArticle from './UpdateArticle';
import DeleteArticle from './DeleteArticle';

const ArticleCRUD = () => {
  return (
    <div className="crud-container">
      <nav className="crud-nav">
        <ul>
          <li>
            <Link to="/create-article">Create Article</Link>
          </li>
          <li>
            <Link to="/read">Read Article</Link>
          </li>
          <li>
            <Link to="/update-artcle">Update Article</Link>
          </li>
          
        </ul>
      </nav>
      <div className="crud-content">
        <Routes>
          <Route path="/create" element={<CreateArticle />} />
          <Route path="/read" element={<ReadArticle />} />
          <Route path="/update" element={<UpdateArticle />} />
          <Route path="/delete" element={<DeleteArticle />} />
        </Routes>
      </div>
    </div>
  );
};

export default ArticleCRUD;
