import React from 'react';
// images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="py-8">
      <title>Marie Vianca</title>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
