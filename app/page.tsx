import Image from 'next/image';


import galaxyImg from '../service/galaxy.png';


const homePage = () => {
  return (
    <div>

    <main className="flex h-96 items-center justify-center m-auto h-1/2 text-center overflow-hidden">
      <h1 className="flex align-center text-6xl font-bold">
        Welcome to my first project in Next.js
      </h1>


    </main>
      <Image className='w-auto m-auto' src={galaxyImg.src} width={400} height={400} alt='galaxy'/>

    </div>
  );
};

export default homePage;
