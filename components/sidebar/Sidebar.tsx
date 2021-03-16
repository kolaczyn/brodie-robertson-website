import React from 'react';
import classnames from 'classnames';

import Home from '@material-ui/icons/Home';
import SubjectIcon from '@material-ui/icons/Subject';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ChatIcon from '@material-ui/icons/Chat';

import SidebarBtn from './SidebarBtn';
import Logo from './Logo';
import Footer from './Footer';

const sidebarData: Array<{ href: string; icon: any; label: string }> = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/blog', icon: SubjectIcon, label: 'Blog' },
  { href: '/videos', icon: OndemandVideoIcon, label: 'Videos' },
  { href: '/podcast', icon: EmojiFoodBeverageIcon, label: 'Podcast' },
  { href: '/donate', icon: MonetizationOnIcon, label: 'Donate' },
  { href: '/contact', icon: ChatIcon, label: 'Contact' },
];

export default function Sidebar({ width }) {
  return (
    <div className={classnames(width, 'bg-sidebar min-h-screen')}>
      <div
        className={classnames(
          'sticky top-0 min-h-screen px-4 p-main-y flex flex-col'
        )}
      >
        <Logo />
        <nav className='flex flex-grow gap-3 flex-col'>
          {sidebarData.map(({ href, icon, label }) => (
            <SidebarBtn key={href} href={href} icon={icon}>
              {label}
            </SidebarBtn>
          ))}
        </nav>
        <Footer />
      </div>
    </div>
  );
}
