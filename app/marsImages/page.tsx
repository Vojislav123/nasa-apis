'use client'

import React, { useEffect, useState } from 'react';
import { apiKey } from '@/service/apikey';
import SpinnerLoading from '@/service/spinner';
import ImageModal from './imageModal';
import Image from 'next/image';

interface RoverPhoto {
  id: number;
  img_src: string;
  earth_date: string;
  camera: {
    full_name: string;
  };
  rover: {
    name: string;
  };
  links: {
    href: string;
  };
}

interface RoverMaxSols {
  [rover: string]: number;
}

const MarsRoverPhotos = () => {
  const [roverPhotos, setRoverPhotos] = useState<RoverPhoto[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<RoverPhoto | null>(null);
  const [loading, setLoading] = useState(true);


  const roverMaxSols: RoverMaxSols = {
    curiosity: 2866,
    opportunity: 4111,
    spirit: 1208,
    perseverance: 832,
  };



  const fetchRoverPhotos = async () => {
    const rovers = ['curiosity', 'opportunity', 'spirit', 'perseverance'];

    try {
      const requests = rovers.map(async (rover) => {
        const maxSol = roverMaxSols[rover];
        const randomSol = Math.floor(Math.random() * maxSol) + 1;
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${randomSol}&api_key=${process.env.API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.photos[0];
      });

      const roverPhotos = await Promise.all(requests);
      const filteredRoverPhotos = roverPhotos.filter((photo) => photo !== undefined);
      setRoverPhotos(filteredRoverPhotos);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching Mars rover photos:', error);
    }
  };

  useEffect(() => {
    fetchRoverPhotos();
  }, []);

  const handleLoadMore = () => {
    setLoading(true);
    fetchRoverPhotos();
  };

  const openImagePopup = (photo: RoverPhoto) => {
    setSelectedPhoto(photo);
  };

  const closeImagePopup = () => {
    setSelectedPhoto(null);
  };


  const returnSpinner = () => {
    return (
      <div className="flex w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto">
        <SpinnerLoading />
      </div>
    )
  }

  return (
    <div className="max-w-auto mx-auto rounded-lg shadow-md p-10">
      <h2 className="text-5xl font-bold mb-4 text-center">Mars Rover Photos</h2>
      <p className="text-gray-400 m-4 text-center">Here you can see a photo from each rover randomly generated</p>
      <div className="flex flex-wrap">
        {loading? returnSpinner() :  roverPhotos.map((roverPhoto) => (
          <div key={roverPhoto.id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto">
            <h3 className="text-lg font-bold mb-2 text-center">{roverPhoto.rover.name}</h3>
            <p className="text-gray-400 m-2">{roverPhoto.camera.full_name}</p>
            <Image
              src={roverPhoto.img_src}
              width={200} height={200}
              alt={`Mars Rover - ${roverPhoto.rover.name}`}
              className="w-full rounded-lg cursor-pointer"
              onClick={() => openImagePopup(roverPhoto)}
            />
            <p className="text-gray-400">Earth Date: {roverPhoto.earth_date}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-purple-700 hover:bg-purple-900 text-white font-bold mt-20 py-4 px-6 rounded"
          onClick={handleLoadMore}
        >
          Reload
        </button>
      </div>
      {selectedPhoto && <ImageModal photo={selectedPhoto} onClose={closeImagePopup} />}
    </div>
  );
};

export default MarsRoverPhotos;


