import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './pages/index';
import Results from './pages/Results';
import Admin from './pages/Admin'
import F1TireLoader from './components/Loader'; // Import the loader component

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Set loading to true whenever route changes
    setIsLoading(true);

    // Simulate a delay to showcase the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger useEffect whenever location changes

  return (
    <div>
      {isLoading ? ( // If loading, render the loader
        <F1TireLoader />
      ) : (
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/result' element={<Results/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      )}
    </div>
  );
}

export default App;
