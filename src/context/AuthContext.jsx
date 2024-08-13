// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
  };

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        token: null,
    });

    const login = (user, token) => {
        setAuthState({
            isAuthenticated: true,
            user: user,
            token: token,
        });
        
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            user: null,
            token: null,
        });
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
