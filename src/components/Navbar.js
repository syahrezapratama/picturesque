import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/' style={{ textDecoration: 'none', color: '#000000' }}>
                <h1>picturesque</h1>
            </Link> 
        </nav>
    );
}