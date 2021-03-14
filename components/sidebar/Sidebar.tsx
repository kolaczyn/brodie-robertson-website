import React from 'react';
import classnames from 'classnames';
import SidebarBtn from './SidebarBtn';
import Logo from './Logo';
import Footer from './Footer';

export default function Sidebar({width}) {
  return (
    <div className={classnames(width, 'bg-sidebar min-h-screen')}>
    <div className={classnames('sticky top-0 min-h-screen px-4 py-8 flex flex-col')}>
        <Logo/>
        <nav className='flex flex-grow gap-3 flex-col'>
          <SidebarBtn href='/' icon='home'>Home</SidebarBtn>
          <SidebarBtn href='/blog' icon='article'>Blog</SidebarBtn>
          <SidebarBtn href='/videos' icon='ondemand_video'>Videos</SidebarBtn>
          <SidebarBtn href='/podcast' icon='podcasts'>Podcast</SidebarBtn>
          <SidebarBtn href='/donate' icon='monetization_on'>Donate</SidebarBtn>
          <SidebarBtn href='/contact' icon='message'>Contact</SidebarBtn>
        </nav>
        <Footer />
      </div>
    </div>
  ); 
}
