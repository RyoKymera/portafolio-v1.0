'use client';

import React from 'react';
import clsx from 'clsx';

export default function Section({
  children,
  image = null,
  imagePosition = 'left', // 'left' | 'right'
  background = 'bg-white',
  imageOverlay = false,
  imageAlt = '',
}) {
  const imageSideFirst = image && imagePosition === 'left';

  return (
    <section className={clsx(background, 'w-full pt-20 pb-6')}>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-5 px-6 md:px-20">
        
        {imageSideFirst && image && (
          <div className="w-full flex justify-center sm:order-2 sm:mb-6 md:mb-0">
            <div className="w-[70%] md:w-[90%] h-64 md:h-full rounded-xl overflow-hidden flex justify-center">
              <img
                src={image}
                alt={imageAlt || 'Section image'}
                className={clsx('object-cover transition duration-300', {
                  'opacity-80': imageOverlay,
                })}
              />
              {imageOverlay && <div />}
            </div>
          </div>
        )}

        <div className={clsx('w-full text-center md:text-left', {
          'sm:order-1': imageSideFirst,
        })}>
          {children}
        </div>

        {!imageSideFirst && image && (
          <div className="w-full flex justify-center sm:mb-6 md:mb-0">
            <div className="w-[70%] md:w-[90%] h-64 md:h-full rounded-xl overflow-hidden flex justify-center">
              <img
                src={image}
                alt={imageAlt || 'Section image'}
                className={clsx('object-cover transition duration-300', {
                  'opacity-80': imageOverlay,
                })}
              />
              {imageOverlay && <div />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
