import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function SidebarBtn({ href, icon, children }) {
  const router = useRouter();
  const path = router.asPath;
  // we treat '/blog/*' routes differently
  const isActive: boolean = path.startsWith('/blog') ? href.startsWith('/blog') : path === href

  return (
    <Link href={href}>
      <a className='font-bold text-3xl group'>
        <span
          className={classnames(
            'group-hover:bg-main inline-flex items-center gap-3 p-sidebar-btn-x py-3 rounded-full group-hover:shadow-lg transition duration-300 ease-in',
            { 'bg-main': isActive }
          )}
        >
          <span className='material-icons'>{icon}</span>
          <span>{children}</span>
        </span>
      </a>
    </Link>
  );
}

SidebarBtn.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.string,
};

SidebarBtn.defaultProps = {
  isActive: false,
};
