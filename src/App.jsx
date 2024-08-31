// src/App.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [updateNotice, setUpdateNotice] = useState(false);

  useEffect(() => {
    if (import.meta.hot) {
      import.meta.hot.accept(() => {
        setUpdateNotice(true);
        setTimeout(() => setUpdateNotice(false), 3000);
      });
    }
  }, []);

  return (
    <div>
      {updateNotice && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center p-2">
          The page has been updated!
        </div>
      )}
      <Navbar />
      <ArticleList />
      <About />
      <Footer />
    </div>
  );
}

export default App;



