import { createContext, useContext } from "react";
import { signInWithPopup , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children, auth }) => {
  const register = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password);
  };

  const login = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    return await auth.signOut();
  };

  const value = {
    register,
    login,
    logout,
    user: auth.currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;