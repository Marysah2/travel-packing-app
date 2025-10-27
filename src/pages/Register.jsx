import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    setLoading(true);
    try {
      await register(email, password);
      navigate("/");
    } catch (err) {
      alert('Registration failed');
    }
    setLoading(false);
  };



  return (
    <div className="form-container card">
      <h2 className="text-center">Create Account</h2>
      
      <form onSubmit={registerUser}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
            required
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="btn-success"
          style={{width: '100%'}}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>


    </div>
  );
};

export default Register;
