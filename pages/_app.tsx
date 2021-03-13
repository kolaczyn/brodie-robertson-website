import Sidebar from '../components/sidebar/Sidebar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <div className='container mx-auto flex'>
        <Sidebar width='w-1/4' />
        <main className='w-3/4'>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
