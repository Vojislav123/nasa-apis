'use client';


import React from 'react';
import { Puff } from 'react-loader-spinner';

export default function SpinnerLoading() {
  return (
    <div>
      <Puff
        color="#7E22CE"
        height={100}
        width={100}
        //@ts-ignore
        timeout={4000}
        className='flex justify-center'
      />
    </div>
  );
}