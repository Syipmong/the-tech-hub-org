// ArticlesList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import './ArticleList.css';

const calculateTimeDifference = (timestamp) => {
  const currentTime = new Date();
  const postTime = new Date(timestamp);
  const diffInMinutes = Math.floor((currentTime - postTime) / (1000 * 60));
  return diffInMinutes;
};

const calculateMinutesRead = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(' ').length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await firestore.collection('articles').get();
        const articlesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesData);
      } catch (error) {
        console.log('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  if (articles.length === 0) {
    return <div>No articles found.</div>;
  }

  return (
    <div className="articles-list-container">
      <h2>Articles List</h2>
      <ul>
        {articles.map((article) => {
          const minutesRead = calculateMinutesRead(article.content);
          const timePosted = calculateTimeDifference(article.timestamp);
          return (
            <li key={article.id}>
              <div className="article-item">
                {article.imageUrl && (
                  <img
                    className="image-preview"
                    src={article.imageUrl}
                    alt={`Images for ${article.title}`}
                  />
                )}
                <div className="article-details">
                  <h3>{article.title}</h3>
                  <p>By {article.author}</p>
                  <p>{minutesRead} min read</p>
                  <p>Posted {timePosted} minutes ago</p>
                  <Link to={`/articles/${article.id}`}>Read More</Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
