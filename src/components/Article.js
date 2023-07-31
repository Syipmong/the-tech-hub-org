// Article.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Article.css';
import { firestore } from '../firebase';

const Article = ({ id }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch the article data from Firebase Firestore
    const fetchArticle = async () => {
      try {
        const docRef = firestore.collection('articles').doc(id);
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
          // Set the article data in the component state
          setArticle(docSnapshot.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>; // Render a loading message while fetching the article data
  }

  const { title, author, date, content } = article;

  return (
    <div className="article">
      <h2>{title}</h2>
      <p>By {author} | {date}</p>
      <div className="article-content">
        {/* Render the article content (you may use dangerouslySetInnerHTML if the content is HTML) */}
        {content}
      </div>
      <Link to={`/articles/${id}`} className="read-more">
        Read More
      </Link>
    </div>
  );
};

export default Article;
