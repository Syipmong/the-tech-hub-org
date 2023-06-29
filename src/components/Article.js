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
    return null; // Render nothing if the article data is not available yet
  }

  const { title, author, date, image } = article;

  return (
    <div className="article">
      <img src={image} alt={title} />
      <div className="article-details">
        <h3>{title}</h3>
        <p>By {author} | {date}</p>
        <Link to={`/articles/${id}`} className="read-more">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Article;
