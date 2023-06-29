import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { firestore, auth } from '../firebase';

const AdminCreateArticle = () => {
  const { isAdmin } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation for title and content
    if (!title || !content) {
      alert('Please enter a title and content for the article.');
      return;
    }

    try {
      // Get the currently logged-in user
      const user = auth.currentUser;

      // Create the article in Firestore
      const articleRef = await firestore.collection('articles').add({
        title,
        content,
        author: user.displayName,
        createdAt: new Date(),
      });

      alert('Article created successfully!');
      // Redirect to the newly created article page
      return <Navigate to={`/articles/${articleRef.id}`} />;
    } catch (error) {
      console.error('Error creating article:', error);
      alert('An error occurred while creating the article.');
    }
  };

  if (!isAdmin) {
    // Redirect to AdminForm component
    return <Navigate to="/admin/login" />;
  }

  return (
    <div>
      <h2>Create Article</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AdminCreateArticle;
