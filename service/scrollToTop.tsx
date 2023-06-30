'use client';
import React, {useState, useEffect }from 'react';
import Image from 'next/image';

import scrollImage from './scrollUp.svg';

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      window.scrollTo(0, 0);
      handleScroll();
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = 80;
  
      if (scrollY > headerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
        <>
          {showButton && (
            <button className='topButton' onClick={scrollToTop}>
              <Image src={scrollImage} alt='scroll up' height={10} width={10} />
            </button>
          )}
        </>
      );
  };
  
  export default ScrollToTop;
  
  
  