import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirebaseTest from './firebase/FirebaseTest';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Routes>
        {/* Add your other routes here */}
        
        {/* Route for testing Firebase */}
        <Route path="/firebasetest" element={<FirebaseTest />} />
        <Route path='/' element={<Home />} />
        
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
