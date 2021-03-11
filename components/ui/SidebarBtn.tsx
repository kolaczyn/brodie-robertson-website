import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function SidebarBtn({ link, icon, children, isActive }) {
  return (
    <Link href={link}>
      <a className='font-bold text-3xl img-label'>
        {/* <img src={} alt=""/> */}
        <p>{children}</p>
      </a>
    </Link>
  );
}

SidebarBtn.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
  isActive: PropTypes.bool,
  link: PropTypes.string,
};

SidebarBtn.defaultProps = {
  isActive: false,
};
