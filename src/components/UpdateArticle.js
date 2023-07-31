import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

const UpdateArticle = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch the article data from Firestore
    const fetchArticle = async () => {
      try {
        const docRef = firestore.collection('articles').doc(id);
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
          // Set the article data in the component state
          const articleData = docSnapshot.data();
          setTitle(articleData.title);
          setContent(articleData.content);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleUpdateArticle = async (e) => {
    e.preventDefault();

    try {
      // Update the article data in Firestore
      await firestore.collection('articles').doc(id).update({
        title: title,
        content: content,
        // Add other fields as needed (e.g., author, date, imageUrl, etc.)
      });

      // Optionally, you can show a success message to the user
      console.log('Article updated successfully!');
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  if (!title || !content) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h2>Edit Article</h2>
      <form onSubmit={handleUpdateArticle}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Article</button>
      </form>
    </div>
  );
};

export default UpdateArticle;
