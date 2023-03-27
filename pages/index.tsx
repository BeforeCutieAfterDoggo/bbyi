import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

type Trinket = {
  name: string;
  author: string;
  imageUrl: string;
  price: string;
};

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [trinkets, setTrinkets] = useState<Trinket[]>([
    {
      name: 'Opensea Keychains',
      author: "Jmill",
      imageUrl: '/logo.png',
      price: "??",
    },
    {
      name: 'Concrete Memes',
      author: "Will",
      imageUrl: '/logo.png',
      price: "??",
    },
    {
      name: 'Bricked Phones',
      imageUrl: '/logo.png',
      author: "Will",
      price: "??",
    },
    {
      name: 'AI Postcards',
      imageUrl: '/logo.png',
      author: "Josh",
      price: "??",
    },
    {
      name: 'Facebook Registration',
      imageUrl: '/logo.png',
      author: "Josh",
      price: "??",
    },
    {
      name: 'Instagram Food Mats',
      imageUrl: '/logo.png',
      author: "Lucy",
      price: "??",
    },
    {
      name: 'MarsSpace Domain Squatting',
      imageUrl: '/logo.png',
      author: "Jmill",
      price: "??",
    },
    {
      name: 'Sold by Dick pics',
      imageUrl: '/logo.png',
      author: "Jmill",
      price: "??",
    },
    {
      name: 'Obsidian Plugins',
      imageUrl: '/logo.png',
      author: "Lucy",
      price: "??",
    },
    {
      name: 'EitherRocks',
      imageUrl: '/logo.png',
      author: "Lucy",
      price: "??",
    },
    {
      name: 'Wooden Tarot Decks',
      imageUrl: '/logo.png',
      author: "Ivan",
      price: "??",
    },
    {
      name: 'Thrift Store',
      imageUrl: '/logo.png',
      author: "Kirby",
      price: "??",
    },
    {
      name: 'Trip Book Presale',
      imageUrl: '/logo.png',
      author: "Lucy",
      price: "??",
    },
    {
      name: 'Coke Diffusion Colas',
      imageUrl: '/logo.png',
      author: "Jmill",
      price: "??",
    },
    {
      name: 'Anti-Virus Fulu',
      imageUrl: '/logo.png',
      author: "Lucy",
      price: "??",
    },
    {
      name: 'Printer Pages Book',
      imageUrl: '/logo.png',
      author: "Jmill",
      price: "??",
    },
    {
      name: 'Unfinished Project Shrine',
      imageUrl: '/logo.png',
      author: "Jmill",
      price: "??",
    },
    {
      name: 'Daw Coins',
      imageUrl: '/logo.png',
      author: "Czar + Delic",
      price: "??",
    },
    {
      name: 'Faux Holograms Display',
      imageUrl: '/logo.png',
      author: "Czar + Delic",
      price: "??",
    },
    {
      name: 'SS Astrolabia Bookmarks',
      imageUrl: '/logo.png',
      author: "Czar + Delic",
      price: "??",
    },
  ]);



  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Bombay Beachy Yami Ichi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto py-12">
        <div className='flex'>
          <img className='h-10' src="/logo.png" />
          <h1 className="text-4xl text-black mb-8 ml-4 font-mono">Bombay Beachy Yami Ichi</h1>
        </div>
        <h1 className="text-xl text-black mb-2 ml-4 font-mono">When: April 1st from 2-4PM (tenatively)</h1>
        <h1 className="text-xl text-black mb-8 ml-4 font-mono">Where: Saturn courtyard (2171 2nd St, Niland, CA)</h1>
        <div className="columns-3">
          {trinkets.map((trinket, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md mb-6"
            >
              <div className="relative h-64">
                <Image
                  src={trinket.imageUrl}
                  alt={trinket.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold font-mono text-lg mb-2 text-black">{trinket.name}</div>
                <div className="font-mono text-gray-400 text-base">by {trinket.author}</div>
                <div className="font-mono text-gray-400 text-base">${trinket.price}</div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default HomePage;
