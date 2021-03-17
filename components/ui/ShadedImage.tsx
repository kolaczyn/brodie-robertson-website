import React, { ReactNode } from 'react';
import Proptypes from 'prop-types';
import Image from 'next/image';

interface PropsType {
  children: ReactNode;
  src: string;
  gradientColor: string;
}

export default function ShadedImage({
  children,
  src,
  gradientColor,
}: PropsType) {
  return (
    <div className='w-full h-64 relative'>
      <Image src={src} layout='fill' objectFit='cover' />
      <div
        className={`${children ? `bg-gradient-to-t ${gradientColor}` : ''}
      w-full h-full absolute`}
      >
        <div className='absolute bottom-0'>{children}</div>
      </div>
    </div>
  );
}

ShadedImage.propTypes = {
  children: Proptypes.node.isRequired,
  src: Proptypes.string.isRequired,
  gradientColor: Proptypes.string.isRequired,
};
