import React, { ReactNode } from 'react';
import Image, { ImageProps } from 'next/image';

interface PropsType {
  children: ReactNode;
  src: string;
}

export default function ShadedImage({ children, src }: PropsType) {
  return (
    <div className='w-full h-64 relative'>
      <Image src={src} layout='fill' objectFit='cover' />
      <div
        className='bg-gradient-to-t from-gray-900
      w-full h-full absolute'
      >
      <div className='absolute bottom-0 px-14 py-2'>
          {children}
        </div>
      </div>
    </div>
  );
}
