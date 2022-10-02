import * as React from 'react';
import gustosa from '../assets/gustosa.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = ({updateLocalForAll}) => {
  useEffect(() => {
    updateLocalForAll()
    
  }, [])
  return (
    <nav className="d-flex navbar justify-content-center my-3 ">
      <div className="d-flex flex-column  align-items-center">
        <Link to='/'>
          <img src={gustosa} alt="" width="50" height="50" className="d-inline-block align-text-top ms-4 mx-auto scale" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
