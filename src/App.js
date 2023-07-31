import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Article from './components/Article';
import WaitList from './components/WaitList';
import BottomNavigation from './components/BottomNavigation';
import ArticlePage from './components/ArticlePage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/waitlist' element={<WaitList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/articlespage/:id" element={<ArticlePage />} />

      </Routes>
      {/* <Footer /> */}
      <BottomNavigation/>
    </Router>
  );
};

export default App;
