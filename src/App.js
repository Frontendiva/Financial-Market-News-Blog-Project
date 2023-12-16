// App.js
import React from 'react';
import './App.css';
import TopBar from './components/topbar/TopBar';
import BlogCard from './components/blogCard/BlogCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <TopBar />
      <BlogCard />
      <p></p>
    </>
  );
}

export default App;
