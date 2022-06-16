import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Home from '@material-ui/icons/Home';
import SubjectIcon from '@material-ui/icons/Subject';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ChatIcon from '@material-ui/icons/Chat';

import { SvgIconProps } from '@material-ui/core/SvgIcon';

import SidebarBtn from './SidebarBtn';
import Logo from './Logo';
import Footer from './Footer';

const sidebarData: Array<{
  href: string;
  Icon: React.FC<SvgIconProps>;
  label: string;
}> = [
  { href: '/', Icon: Home, label: 'Home' },
  { href: '/blog', Icon: SubjectIcon, label: 'Blog' },
  { href: '/videos', Icon: OndemandVideoIcon, label: 'Videos' },
  { href: '/podcast', Icon: EmojiFoodBeverageIcon, label: 'Podcast' },
  { href: '/donate', Icon: MonetizationOnIcon, label: 'Donate' },
  { href: '/contact', Icon: ChatIcon, label: 'Contact' },
];

export default function Sidebar({ className }: { className: string }) {
  return (
    <div className={classnames(className, 'bg-sidebar min-h-screen')}>
      <div className={'sticky top-0 min-h-screen px-4 p-main-y flex flex-col'}>
        <Logo />
        <nav className='flex-grow'>
          <ul className='flex flex-col'>
            {sidebarData.map(({ href, Icon, label }) => (
              <li key={href}>
                <SidebarBtn href={href} Icon={Icon}>
                  {label}
                </SidebarBtn>
              </li>
            ))}
          </ul>
        </nav>
        <Footer />
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  width: PropTypes.string.isRequired,
};
