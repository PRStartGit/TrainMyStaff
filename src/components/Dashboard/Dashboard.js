import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'; // Import useAuthState to check user authentication state
import { auth } from '../../firebase/firebase';

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      {user ? ( // Check if user is authenticated
        <>
          <h1>Dashboard!</h1>
          <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="card">
              <img
                src={user.photoURL || '/default-avatar.png'} // Use a default avatar image if photoURL is not available
                className="card-img-top"
                alt={user.displayName}
              />
              <div className="card-body">
                <h5 className="card-title">{user.displayName}</h5>
                <p className="card-text">Email: {user.email}</p>
                {/* Add more user information here */}
                <p className="card-text">Date of Birth: {user.dateOfBirth}</p>
                <p className="card-text">Address: {user.address}</p>
              </div>
              <div className="card-footer">
                
              </div>
             </div> 
             </div> 
             </div> 
             </div> 
        </>
      ) : (
        <h1>You need to be logged in to see this page.</h1>
      )}
    </div>
  );
};

export default Dashboard;
