import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import './App.css';
import './index.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="app-root">
      {showSignUp ? (
        <SignUp onBackToLogin={() => setShowSignUp(false)} />
      ) : (
        <Login onSignUpClick={() => setShowSignUp(true)} />
      )}
    </div>
  );
}

export default App;
