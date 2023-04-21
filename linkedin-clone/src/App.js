import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout, login } from './features/userSlice';
import { auth } from './firebase.js'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }));
      }
      else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          {/* Widget */}
        </div>
      )}

    </div>
  );
}

export default App;
