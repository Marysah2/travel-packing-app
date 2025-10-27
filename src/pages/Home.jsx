import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import PackingList from "../components/PackingList";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="text-center mb-1" style={{marginBottom: '2rem'}}>
        <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
           Travel Packing & Checklist
        </h1>
        <p style={{fontSize: '1.1rem', color: '#666'}}>
          Smart packing management with real-time weather integration
        </p>
      </div>

      {!user ? (
        <div className="card text-center" style={{padding: '2rem'}}>
          <h2 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem'}}>Welcome to Your Travel Companion!</h2>
          <p style={{color: '#666', marginBottom: '1.5rem'}}>
            Create personalized packing lists, check destination weather, and never forget essentials again.
          </p>
          <div style={{marginBottom: '2rem'}}>
            <Link 
              to="/register" 
              style={{display: 'inline-block', marginRight: '1rem', textDecoration: 'none'}}
            >
              <button>Get Started</button>
            </Link>
            <Link 
              to="/login" 
              style={{display: 'inline-block', textDecoration: 'none'}}
            >
              <button className="btn-secondary">Login</button>
            </Link>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', textAlign: 'left'}}>
            <div style={{backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '8px'}}>
              <h3 style={{fontWeight: 'bold', color: '#1976d2', marginBottom: '0.5rem'}}>Smart Lists</h3>
              <p style={{fontSize: '0.9rem', color: '#1565c0'}}>Create and manage personalized packing lists for every trip</p>
            </div>
            <div style={{backgroundColor: '#e8f5e8', padding: '1rem', borderRadius: '8px'}}>
              <h3 style={{fontWeight: 'bold', color: '#388e3c', marginBottom: '0.5rem'}}> Live Weather</h3>
              <p style={{fontSize: '0.9rem', color: '#2e7d32'}}>Get real-time weather updates for your destination</p>
            </div>
            <div style={{backgroundColor: '#f3e5f5', padding: '1rem', borderRadius: '8px'}}>
              <h3 style={{fontWeight: 'bold', color: '#7b1fa2', marginBottom: '0.5rem'}}>Secure Sync</h3>
              <p style={{fontSize: '0.9rem', color: '#6a1b9a'}}>Access your lists anywhere with secure cloud storage</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="card text-center">
            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
              Welcome back, {user.displayName || user.email}! 
            </h2>
            <p style={{color: '#666'}}>Ready to plan your next adventure?</p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem'}}>
            <WeatherCard />
            <PackingList />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
