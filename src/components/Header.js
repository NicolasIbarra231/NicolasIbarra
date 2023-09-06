import React from 'react';

import Logo from '../assets/monitor.png'
import Documento from '../assets/Hoja de Vida - Nicolás Ibarra Siabato.pdf'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            {/* logo */}
              <img src={Logo} alt='' style={{ width: '70px', height: 'auto' }} />
            <a href={Documento} target='_blank'rel='noopener noreferrer'>
              <button className='btn btn-sm'>My CV</button>
            </a>
          </div>
        </div>
    </header>
  );
};

export default Header;
