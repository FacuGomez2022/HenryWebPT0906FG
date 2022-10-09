import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div class='nav-header'>
      <img src={Logo} alt ='Logo Henry'/>
      <h3>Henry Weather App</h3>
      <SearchBar onSearch={OnSearch}/>
    </div>
  );
};

export default Nav;
