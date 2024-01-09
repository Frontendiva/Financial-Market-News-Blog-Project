import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogCard from './components/blogCard/BlogCard';
import ArticleDetails from './components/articles/ArticleDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <Router>
      <div>
      <TopBar />
        <Routes>
          <Route path="/" element={<BlogCard />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
