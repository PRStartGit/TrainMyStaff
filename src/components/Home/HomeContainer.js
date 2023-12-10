import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase/firebase';
import { auth } from '../../firebase/firebase'; // Import 'auth' from your Firebase config
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const HomeContainer = () => {
    const navigate = useNavigate();
  
    const handleGoogleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // Handle successful sign-in here
          console.log('Successfully signed in with Google');
          navigate('/dashboard'); // Navigate to the dashboard route upon successful login
        })
        .catch((error) => {
          // Handle sign-in error here
          console.error('Error signing in with Google:', error.message);
        });
    };
  

  // Rest of your component code

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login/Register</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
          <div className="mt-3">
            <button onClick={handleGoogleSignIn} className="btn btn-danger">
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
