import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const userData = { email, id: Date.now().toString() };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return Promise.resolve();
  };

  const register = (email, password) => {
    const userData = { email, id: Date.now().toString() };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return Promise.resolve();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};