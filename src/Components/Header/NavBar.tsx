import React from 'react';
import './navbar.scss'
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';

function NavBar() {
    return (

        <div className='nav-bar'>
            <ul className='nav'>
                <li><a href='' className='nav'>blog</a></li>
                <li><a href='' className='nav'>best offers</a></li>
                <li><a href='' className='nav'>contact us</a></li>
            </ul>
        </div>
    );
}

export default NavBar
