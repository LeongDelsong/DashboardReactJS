import React from 'react';
import '../Components/header.css'
import Logo from '../Components/Logo'
import SearchBar from './SearchBar';
import Nav from '../Components/Nav'
function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
     {/* {logo} */}
     <Logo />
       {/* {search bar} */}
       <SearchBar />
         {/* {nav} */}
         <Nav />
    </header>
  );
};

export default Header;