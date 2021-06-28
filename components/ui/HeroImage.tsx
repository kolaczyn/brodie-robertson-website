import React, {ReactNode} from 'react';
import PropTypes from 'prop-types';

import ShadedImage from './ShadedImage';

interface HeroImageProps {
  imgSrc: string;
  children: ReactNode;
}

export default function HeroImage({ imgSrc, children }: HeroImageProps) {
  return (
    <header className='w-full h-80 relative'>
      <ShadedImage src={imgSrc} gradientColor='from-main'>
        <div className='px-14 py-2'>
          <h1>{children}</h1>
        </div>
      </ShadedImage>
    </header>
  );
}

HeroImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
