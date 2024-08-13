import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        token: null,
    });

    useEffect(() => {
        // Retrieve and set the authState from localStorage when the provider mounts
        const savedAuthState = localStorage.getItem('authState');
        if (savedAuthState) {
            setAuthState(JSON.parse(savedAuthState));
        }
    }, []);

    const login = (user, token) => {
        const newAuthState = {
            isAuthenticated: true,
            user: user,
            token: token,
        };
        
        setAuthState(newAuthState);
        
        // Save newAuthState in localStorage
        localStorage.setItem('authState', JSON.stringify(newAuthState));
    };

    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            user: null,
            token: null,
        });
        
        // Remove authState from localStorage
        localStorage.removeItem('authState');
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
