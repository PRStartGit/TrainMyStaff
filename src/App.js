import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirebaseTest from './firebase/FirebaseTest';

function App() {
  return (
    <Router>
      <Routes>
        {/* Add your other routes here */}
        
        {/* Route for testing Firebase */}
        <Route path="/firebasetest" element={<FirebaseTest />} />
        
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
