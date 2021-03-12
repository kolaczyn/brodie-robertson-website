import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function SidebarBtn({ href, icon, children }) {
  const router = useRouter();
  // we treat '/blog/*' routes differently
  const isActive: boolean = router.pathname.startsWith('/blog')
    ? href.startsWith('/blog')
    : router.pathname === href;

  return (
    <Link href={href}>
      <a className='font-bold text-3xl group'>
        <span
          className={classnames(
            'group-hover:bg-gray-900 inline-flex items-center gap-3 px-5 py-3 rounded-full group-hover:shadow-lg transition duration-300 ease-in',
            { 'bg-gray-900': isActive }
          )}
        >
          <span className='material-icons'>{icon}</span>
          <p>{children}</p>
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
