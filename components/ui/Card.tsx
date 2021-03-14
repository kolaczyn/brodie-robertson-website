import React, { ReactNode } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import ShadedImage from './ShadedImage';

interface CardProps {
  title: string;
  subtitle: string;
  imgSrc: string;
  children: ReactNode;
}

const paddingClass = 'p-3';

export default function Card({ title, subtitle, imgSrc, children }: CardProps) {
  return (
    <Link href='/blog'>
      <a>
        <section className='bg-gray-800 shadow hover:shadow-xl transition duration-300 cursor-pointer rounded-md'>
          <ShadedImage src={imgSrc}>
            <h3>{title}</h3>
          </ShadedImage>
          <section className={paddingClass}>
            <p className='dim text-base'>{subtitle}</p>
            <section>{children}</section>
          </section>
        </section>
      </a>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  title: '',
};
