import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import baharilogo from '../../assets/logo/baharilogo.png';
import CONFIG from '../../../config';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Login() {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { login } = useAuth();    

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ credential, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const role = data.role;
                const token = data.access_token;
                login(role, token); // Set the role and token in context
                navigate('/menu'); // Redirect to the /menu page
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to login');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Bahari Bites Logo"
                    src={baharilogo}
                    className="mx-auto h-60 w-auto"
                />
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                    Sign In To Your Account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="credential" className="block text-sm font-medium leading-6">
                            Email address or Phone number
                        </label>
                        <div className="mt-2">
                            <input
                                id="credential"
                                name="credential"
                                type="text"
                                required
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                                autoComplete="credential"
                                className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-orange-500 hover:text-orange-600">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    {error && <div className="text-red-500 text-sm">{error}</div>}

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-orange-500 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/register" className="font-semibold leading-6 text-orange-500 hover:text-orange-600">
                        Register Here
                    </Link>
                </p>
            </div>
        </div>
    );
}
