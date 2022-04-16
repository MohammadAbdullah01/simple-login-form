import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ height: "50px", backgroundColor: "gray" }}>
            <Link to='/'>Home</Link>
            <Link to='/secret'>Secret</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;