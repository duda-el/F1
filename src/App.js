// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
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
    <div>
      {isLoading ? ( // If loading, render the loader
        <F1TireLoader />
      ) : (
        <HomePage /> // Otherwise, render the home page
      )}
    </div>
  );
}

export default App;
