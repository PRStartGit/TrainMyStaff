import React, { useEffect } from 'react';
import { auth } from './firebase'; // Update the import path


const FirebaseTest = () => {
  useEffect(() => {
    const testFirebaseConnection = async () => {
      try {
        // Check if a user is authenticated
        const user = auth.currentUser;
        if (user) {
          console.log('User is signed in:', user.email);
        } else {
          console.log('No user signed in.');
        }
      } catch (error) {
        console.error('Error testing Firebase connection:', error);
      }
    };

    testFirebaseConnection();
  }, []);

  return <div>Testing Firebase Connection...</div>;
};

export default FirebaseTest;
