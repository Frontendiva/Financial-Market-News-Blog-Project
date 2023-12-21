// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import BlogCard from './components/blogCard/BlogCard';
import ArticleDetails from './components/articles/ArticleDetails'; 
import 'bootstrap/dist/css/bootstrap.min.css';

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
