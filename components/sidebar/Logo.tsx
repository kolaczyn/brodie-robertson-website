import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <header className='p-sidebar-btn-x mb-12'>
      <Link href='/'>
        <a className='text-5xl font-bold'>John Tho</a>
      </Link>
      <p className='dim'>lorem ipsum dolor</p>
    </header>
  );
}
