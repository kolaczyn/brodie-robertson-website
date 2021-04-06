import Sidebar from '@/components/sidebar/Sidebar';
import Hamburger from '@/components/ui/Hamburger';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-body text-white min-h-screen'>
      <div className='container mx-auto flex'>
        <Sidebar width='w-1/4' />
        <main className='w-3/4 bg-main shadow-lg relative'>
          <Hamburger className="fixed z-50 bottom-8 right-16" />
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
