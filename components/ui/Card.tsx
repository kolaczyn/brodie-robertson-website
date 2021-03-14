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
            {/* don't add title if there is no title. That's because <Card> doesn't add black gradient to the image if there is no title */}
            {title && (
              <div className='p-3'>
                <h3>{title}</h3>
              </div>
            )}
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
