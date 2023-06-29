import React, { useState, useEffect } from 'react';


import ImagePopup from '@/service/imagePopup';
import SpinnerLoading from '@/service/spinner';

interface NasaImage {
  data: {
    nasa_id: string;
    title: string;
  }[];
  links: {
    href: string;
  }[];
}

const NasaImageCard: React.FC<{ image: NasaImage }> = ({ image }) => {

  useEffect(() => {
    simulateLoading(image).then(() => {
    });
  }, [image]);

  const simulateLoading = (image: NasaImage): Promise<NasaImage> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(image);
      }, 2000);
    });
  };

  return <ImagePopup image={image} />;
};

export default NasaImageCard;
