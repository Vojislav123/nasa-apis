'use client';


import React from 'react';
import { Puff } from 'react-loader-spinner';

export default function SpinnerLoading() {
  return (
    <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto'>
      <Puff
        color="#7E22CE"
        height={100}
        width={100}
        //@ts-ignore
        timeout={4000}
      />
    </div>
  );
}