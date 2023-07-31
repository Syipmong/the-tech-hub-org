import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

const ReadArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch the article data from Firestore
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

  const { title, content } = article;

  return (
    <div>
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
  );
};

export default ReadArticle;
