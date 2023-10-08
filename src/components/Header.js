import React from 'react';
//images

import Logo from '../assets/torii-gate.png';

const Header = () => {
  return <header  className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
      {/*logo*/}
      <img src={Logo} alt='' />
      <h2 className='madewith cursive-text' style={{ fontFamily: 'cursive', textAlign: 'right' }}>Made with React and Tailwind</h2>

      
      </div>
    </div>
    </header>
};

export default Header;
