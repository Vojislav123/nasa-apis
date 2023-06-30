import Image from "next/image";
import galaxyImg from "../service/galaxy.png";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <main className="flex h-96 items-center justify-center m-auto h-1/2 text-center overflow-hidden">
        <h1 className="flex align-center text-6xl font-bold">
          Welcome to my first project in Next.js
        </h1>
      </main>
      <div className="w-full flex justify-center">
        <Image
          className="w-auto m-auto"
          src={galaxyImg.src}
          width={400}
          height={400}
          alt="galaxy"
        />
      </div>
      <div className="text-center">
        <Link
          href="/imageGallery"
          className="inline-block bg-purple-700 hover:bg-purple-900 text-white font-bold py-4 px-6 mt-4 rounded md:hidden"
        >
          Image Gallery
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
