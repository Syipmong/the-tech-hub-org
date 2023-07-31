import React, { useState, useRef } from 'react';
import { firestore, storage } from '../firebase';
import './Create.css';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleCreateArticle = async (e) => {
    e.preventDefault();

    try {
      if (images.length > 0) {
        const storageRef = storage.ref();
        const uploadPromises = images.map((image) => {
          const fileRef = storageRef.child(image.name);
          return fileRef.put(image);
        });

        const uploadedFiles = await Promise.all(uploadPromises);
        const downloadUrls = await Promise.all(
          uploadedFiles.map((file) => file.ref.getDownloadURL())
        );
        setImageUrls(downloadUrls);
      }

      await firestore.collection('articles').add({
        title: title,
        content: content,
        author: author,
        timestamp: new Date(),
        imageUrls: imageUrls,
      });


      setTitle('');
      setContent('');
      setAuthor('');
      setImages([]);
      setImageUrls([]);


      console.log('Article created successfully!');
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

 
  const fileInputRef = useRef(null);

  
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="create-article-container">
      <h2>Create New Article</h2>
      <form onSubmit={handleCreateArticle}>
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
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
         
          <input
            type="file"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            ref={fileInputRef} 
          />
          <label htmlFor="images" className="upload-button" onClick={handleFileInputClick}>
            Select Images
          </label>
        </div>
        {images.length > 0 && (
          <div className="image-preview-container">
            {images.map((image, index) => (
              <img
                key={index}
                className="image-preview"
                src={URL.createObjectURL(image)}
                alt={`pixx ${index + 1}`}
              />
            ))}
          </div>
        )}
        <button type="submit">Create Article</button>
      </form>
    </div>
  );
};

export default CreateArticle;
