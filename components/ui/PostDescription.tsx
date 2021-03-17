import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import CategoryIcon from '@material-ui/icons/Category';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const iconsSize = { fontSize: '18px' };
export default function PostDescription({
  title,
  date,
  category,
  slug,
  children,
}) {
  return (
    <section>
      <Link href={`/blog/${slug}`}>
        <a>
          <h3 className='hover:text-gray-300 transition duration-300'>
            {title}
          </h3>
        </a>
      </Link>
      <section className='dim text-5xl'>
        <ul className='flex text-base italic gap-3'>
          <li className='img-label gap-1'>
            <CalendarTodayIcon style={iconsSize} />
            <span>{date}</span>
          </li>
          <li className='img-label gap-1'>
            <CategoryIcon style={iconsSize} />
            <span>{category}</span>
          </li>
        </ul>
      </section>
      <section>{children}</section>
    </section>
  );
}

PostDescription.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  slug: PropTypes.string,
  children: PropTypes.node,
};
