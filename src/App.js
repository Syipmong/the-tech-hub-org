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
// import Article from './components/Article';
import WaitList from './components/WaitList';
import BottomNavigation from './components/BottomNavigation';
import ArticlePage from './components/ArticlePage';
import ArticlesList from './components/ArticleList';
import ArticleCRUD from './components/ArticleCRUD';

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
        <Route path="/articles" element={<ArticlesList />} />
        {/* New route for the ArticlePage component */}
        <Route path="/articles/:id" element={<ArticlePage />} />
        {/* <Route path="/articlespage/:id" element={<ArticlePage />} /> */}
        <Route path="/blogs/*" element={<ArticleCRUD />} />
        {/* <Route path="/create-article" element={<CreateArticle />} /> */}
        {/* <Route path="/update-article-article" element={<UpdateArticle />} /> */}
        {/* <Route path="/read" element={<ReadArticle />} /> */}
      </Routes>
      {/* <Footer /> */}
      <BottomNavigation/>
    </Router>
  );
};

export default App;
