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
          <div>
          <img class="rounded-circle" src={user.photoURL} alt={user.displayName} />
          <span> {user.displayName}</span>{/* Add your dashboard content here */}
          </div>
        </>
      ) : (
        <h1>You need to be logged in to see this page.</h1>
      )}
    </div>
  );
};

export default Dashboard;
