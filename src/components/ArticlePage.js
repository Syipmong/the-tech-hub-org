// ArticlePage.js
import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import Article from './Article';

const ArticlePage = ({ id }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Fetch the article with the specified 'id' from Firestore
        const articleRef = firestore.collection('articles').doc(id);
        const doc = await articleRef.get();
        if (doc.exists) {
          setArticle(doc.data());
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Article article={article} />
    </div>
  );
};

export default ArticlePage;
