import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function SidebarBtn({ href, icon: Icon, children }) {
  const router = useRouter();
  const path = router.asPath;
  // we treat '/blog/*' routes differently
  const isActive: boolean = path.startsWith('/blog') ? href.startsWith('/blog') : path === href

  return (
    <Link href={href}>
      <a className='font-bold text-3xl group w-full inline-block py-1'>
        <span
          className={classnames(
            'inline-flex items-center gap-3 p-sidebar-btn-x py-3 rounded-full group-hover:shadow-lg transition duration-300 ease-in',
            // if it's active, it's always darker (black). Otherwise just change bg-color on hover
             isActive ? 'bg-black' : 'group-hover:bg-main'
          )}
        >
          <Icon />
          <span>{children}</span>
        </span>
      </a>
    </Link>
  );
}

SidebarBtn.propTypes = {
  icon: PropTypes.object,
  children: PropTypes.node,
  link: PropTypes.string,
};

SidebarBtn.defaultProps = {
  isActive: false,
};
