import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const Navbar = () => {
    return (
        <div className="navbar bg-[#15803D] text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        <li><a>About</a></li>
                        <li><a>Gallery</a></li>
                        <li><a>Plant a Tree</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Green Earth</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>Plant a Tree</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ButtonPrimary buttonName='Plant a Tree'></ButtonPrimary>
            </div>
        </div>
    );
};

export default Navbar;