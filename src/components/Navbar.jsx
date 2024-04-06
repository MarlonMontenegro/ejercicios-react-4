// En un componente
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/About">About</Link>
                </li>
                <li>
                    <Link className="link" to="/user/1">User</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
