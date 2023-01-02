import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import Logo from '../images/logo.png';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <header className='absolute sticky left-0 top-0 z-50 bg-white/90 w-full backdrop-blur'>
      <div className='container h-[90px] px-8 md:px-6'>
        <div className='relative flex h-full items-center justify-between border-b border-slate-500/10'>

          {/*logo */}
          <div className='w-[15rem]'>
            <a href='#'>
              <img src={Logo} alt='logo' className='w-full' />
            </a>
          </div>

          {/* menu */}
          <div className='flex w-full items-center justify-between'>
            <nav
              className={`${
                navbarOpen ? 'block' : 'hidden'
              } absolute right-0 top-[90px] w-full max-w-[350px] rounded-lg border border-blue-200 bg-white py-5 px-6 shadow-lg shadow-blue-400/5 transition-all lg:static lg:block lg:max-w-full lg:border-none lg:shadow-none lg:bg-transparent lg:px-0 lg:py-0`}
            >
              <ul class='flex flex-col justify-center gap-8 lg:flex-row'>
                <li>
                  <a
                    href='#'
                    class='text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base'
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base'
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='text-lg font-medium text-slate-700 duration-200 hover:text-blue-600 lg:text-base'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class='flex'>
            <a href='#' className='btn mr-10 hidden sm:block lg:mr-0'>
              Register
            </a>

            {/* menu btn */}
            <button
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
              className='block lg:hidden'
            >
              <IonIcon
                icon={menuOutline}
                className='text-4xl text-black hover:text-blue-500 duration-200'
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
