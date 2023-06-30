'use client'

import React, { useState, useEffect } from 'react';
import NasaImageGrid from './NasaImageGrid';
import { ReturnSpinner } from '@/service/returnSpinner';

interface NasaImage {
  data: {
    nasa_id: string;
    title: string;
  }[];
  links: {
    href: string;
  }[];
}

const NasaImages: React.FC = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState<NasaImage[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`
      );
      const data = await response.json();
      setImages(data.collection.items);
      setLoading(false);
    } catch (error) {
      console.error('Error searching images:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setLoading(true);
    handleSearch();
  };

  useEffect(() => {
    handleSearch();
  }, []);


  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-10 mt-40 text-center">Nasa Image Gallery</h1>
      <p className="text-l mb-10">Try me?</p>
      <input
        type="text"
        value={query}
        className="px-4 py-2 border border-gray-300 mb-10 focus:outline-none focus:ring focus:border-blue-300 text-black rounded-xl"
        onChange={handleInputChange}
        placeholder="Search images..."
      />

{loading ? (
        <ReturnSpinner />
      ) : images.length === 0 ? (
        <div className="flex-column items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">No Images</h2>
      </div>
      ) : (
        <NasaImageGrid images={images} />
      )}
    </div>
  );
};

export default NasaImages;

