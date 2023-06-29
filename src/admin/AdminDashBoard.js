import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';

const AdminDashboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const snapshot = await firestore
          .collection('articles')
          .orderBy('createdAt', 'desc')
          .get();

        const articleData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setArticles(articleData);
      } catch (error) {
        console.log('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await firestore.collection('articles').doc(id).delete();

      setArticles((prevArticles) =>
        prevArticles.filter((article) => article.id !== id)
      );
    } catch (error) {
      console.log('Error deleting article:', error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Link to="/admin/create">Create Article</Link>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
            <p>Published: {article.published ? 'Yes' : 'No'}</p>
            <button onClick={() => handleDelete(article.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
