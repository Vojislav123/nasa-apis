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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    simulateLoading(image).then(() => {
      setLoading(false);
    });
  }, [image]);

  const simulateLoading = (image: NasaImage): Promise<NasaImage> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(image);
      }, 2000);
    });
  };

  if (loading) {
    return (
      <div className="flex sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto justify-center">
        <SpinnerLoading />
      </div>
    )
  }

  return <ImagePopup image={image} />;
};

export default NasaImageCard;
