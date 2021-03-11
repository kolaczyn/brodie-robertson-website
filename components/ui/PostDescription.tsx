import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

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
          <h2 className='hover:text-gray-300 transition duration-300'>
            {title}
          </h2>
        </a>
      </Link>
      <section className='dim'>
        <ul className='flex text-xl italic gap-3'>
          <li className='img-label'>
          <span className="material-icons">
          calendar_today
          </span>
          <span>
            {date}
          </span>
          </li>
          <li className='img-label'>
          <span className="material-icons">
label
</span>
          <span>
            {category}
          </span>
          </li>
        </ul>
      </section>
      <p className='text-2xl'>{children}</p>
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
