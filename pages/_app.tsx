import 'preact/debug';
import Sidebar from '@/components/sidebar/Sidebar';
import Hamburger from '@/components/ui/Hamburger';
import classnames from 'classnames';
import { useEffect, useState } from 'react';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isSidebarOn, setIsSidebarOn] = useState(false);
  useEffect(() => {
    const listener = () => {
      document.documentElement.clientWidth > 1024
        ? setIsSidebarOn(false)
        : null;
      console.log('run listener');
    };
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);
  return (
    <div className='bg-body text-white min-h-screen'>
      <div className='container mx-auto flex'>
        <Sidebar
          className={classnames(
            'lg:w-1/4 w-0',
            isSidebarOn ? 'w-2/3 sm:w-1/2 z-10 fixed left-0 top-0 bottom-0' : ''
          )}
        />
        <main
          onClick={() => {
            isSidebarOn ? setIsSidebarOn(false) : null;
          }}
          className='lg:w-3/4 w-full lg:mx-auto bg-main shadow-lg relative'
        >
          <Hamburger
            isSidebarOn={isSidebarOn}
            setIsSidebarOn={setIsSidebarOn}
            className='fixed lg:hidden z-50 bottom-8 right-16'
          />
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
