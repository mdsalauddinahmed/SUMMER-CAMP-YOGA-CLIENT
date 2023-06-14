import React from 'react';
import errorPage from '../../assets/error.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <p className='bg-cyan-900 text-white w-40 py-4 px-4 rounded font-bold'><Link to="/">Go to Home</Link> </p>
            <img src={errorPage} alt="" />
        </div>
    );
};

export default ErrorPage;