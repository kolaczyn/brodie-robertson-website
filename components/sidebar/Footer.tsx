import React from 'react';
import RssFeedIcon from '@material-ui/icons/RssFeed';

export default function Footer() {
  return (
    <footer className='p-sidebar-btn-x'>
      &copy; 2009 copyright LOLOLOL
      <a className='flex items-center' href='/api/rss' target='_blank'>
        <RssFeedIcon />
        Rss Feed
      </a>
    </footer>
  );
}
