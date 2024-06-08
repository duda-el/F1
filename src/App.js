// App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/index';
import Results from './pages/Results';
import F1TireLoader from './components/Loader'; // Import the loader component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    // <div>
    //   {isLoading ? ( // If loading, render the loader
    //     <F1TireLoader />
    //   ) : (
    //     <HomePage /> // Otherwise, render the home page
    //   )}
    // </div>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/result' element={<Results/>}/>
    </Routes>
  );
}

export default App;
