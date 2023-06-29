import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const WaitList = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const firestore = firebase.firestore();
      const waitlistRef = firestore.collection('waitlist');
      const querySnapshot = await waitlistRef.where('email', '==', email).get();

      if (querySnapshot.empty) {
        await waitlistRef.add({ name, email });
        setSuccessMessage('Thank you for joining the waitlist!');
        setName('');
        setEmail('');
      } else {
        setErrorMessage('Email already exists in the waitlist.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="waitlist-container">
      <h2>Be the First to Know</h2>
      <p>Sign up to receive updates when we roll out.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Join Now'}
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default WaitList;
