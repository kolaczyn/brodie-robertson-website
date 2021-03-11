import Link from 'next/link';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <div className='container mx-auto'>
        <header>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <br />
          <Link href='/blog'>
            <a>Blog Posts</a>
          </Link>
        </header>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
