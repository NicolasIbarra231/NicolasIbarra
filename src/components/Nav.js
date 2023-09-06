import React from 'react';
//Importar íconos
import { BiHomeAlt, BiUser, BiBookBookmark} from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';
//Link
import { Link} from 'react-scroll';


const Nav = () => {
  return(
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[90px] backdrop-blur-2x1
      rounded-full max-w-[450px] mx-auto px-5 flex justify-between items-center text 2x1
      text-white/50'>
        <Link 
        to='home'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='text-cyan-300 cursor-pointer w-[60px] h-[60px] flex items-center
        justify-content'>
          <BiHomeAlt/>
        </Link>

        <Link 
        to='about' 
        activeClass='active'
        smooth={true}
        spy={true}
        className='text-cyan-300 cursor-pointer w-[60px] h-[60px] flex items-center
        justify-content'>
          <BiUser/>
        </Link>

        <Link 
        to='studies' 
        activeClass='active'
        smooth={true}
        spy={true}
        className='text-cyan-300 cursor-pointer w-[60px] h-[60px] flex items-center
        justify-content'>
          <BiBookBookmark/>
        </Link>

        <Link 
        to='services'
        activeClass='active'
        smooth={true}
        spy={true} 
        className='text-cyan-300 cursor-pointer w-[60px] h-[60px] flex items-center
        justify-content'>
          <BsClipboardData/>
        </Link>

        <Link 
        to='work' 
        activeClass='active'
        smooth={true}
        spy={true}
        className='text-cyan-300 cursor-pointer w-[60px] h-[60px] flex items-center
        justify-content'>
          <BsBriefcase/>
        </Link>
        
        <Link 
        to='contact' 
        activeClass='active'
        smooth={true}
        spy={true}
        className='text-cyan-300 cursor-pointer w-[60px] h-[60px] flex items-center
        justify-content'>
          <BsChatSquare/>
        </Link>

        
      </div>
    </div>
  </nav>
  );
};

export default Nav;
