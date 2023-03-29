import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

type Trinket = {
  name: string;
  author: string;
  imageUrl: string;
  price: string;
  description: string;
  website: string;
};

const HomePage = () => {
  const [trinkets, setTrinkets] = useState<Trinket[]>([
    {
      name: 'AI Postcards',
      imageUrl: 'https://cdn.discordapp.com/attachments/1088671653040492572/1089978372580450314/aipostcards.jpeg',
      author: "Josh",
      price: "One blank postcard free to anyone who promises to send it to someone in the mail (25 available - while supplies last.)\r\n$2 or trade: Blank postcard with no commitment to mail it to anyone. (50 available - while supplies last.)\n $3 or trade: Postcard with customized hand-written message to your friend from ChatGPT.",
      description: "Beautiful classic postcards created using AI artwork with optional custom message from ChatGPT.",
      website: "https://joshjet.net/"
    },
    {
      name: 'Facebook Registration - FREE!',
      imageUrl: 'https://cdn.discordapp.com/attachments/1088671653040492572/1089978372861464596/facebook_registration.png',
      author: "Josh",
      price: "Free",
      description: "Come and register for the coolest new thing on the Internet. Facebook is an incredible new service that allows you to connect with your friends and family. There are absolutely no drawbacks and all you get is more love and more friends. You might even find the love of your life (or at least have the opportunity to stalk them!) Signing up is easy. Just come by the Facebook both and fill out the simple registration form.",
      website: "https://joshjet.net/"
    },
    {
      name: 'Keygen Keychains',
      author: "Jmill",
      imageUrl: '/logo.png',
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'Concrete Memes',
      author: "Will",
      imageUrl: '/logo.png',
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'Bricked Phones',
      imageUrl: '/logo.png',
      author: "Will",
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'Ritual Tarot of The Boundless Heart',
      imageUrl: 'https://static.wixstatic.com/media/3a6acf_a92488cffe2549778097d75b0b32c98b~mv2.jpg/v1/fill/w_960,h_1400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fireritualtall.jpg',
      author: "Ivan",
      price: "$44 for wood back, $88 for painted back",
      description: "The Ritual Tarot of The Boundless Heart is a set of 22 burnable wooden cards based on the major arcana of traditional tarot. Using original symbols composed mainly of negative space, the cards evoke a technology of consciousness and primal form.",
      website: "https://www.instagram.com/ritual.tarot.tbh/"
    },
    {
      name: 'MarsSpace Domain Squatting',
      imageUrl: '/logo.png',
      author: "Jmill",
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'Sold by Dick pics',
      imageUrl: '/logo.png',
      author: "Jmill",
      price: "??",
      description: "",
      website: ""
    },

    {
      name: 'Obsidian Plugins',
      imageUrl: '/logo.png',
      author: "Lucy",
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'EitherRocks',
      imageUrl: 'https://cdn.discordapp.com/attachments/997240104160591872/1090145704380465202/Screen_Shot_2023-03-27_at_10.29.28_PM.png',
      author: "Lucy",
      price: "$3 each, you will have to pick between two rocks",
      description: "Inspired by EtherRocks, an early NFT project, we present you, EitherRocks. We have rigorously picked 32 rocks from a set of over 50+ rocks and carefully judged their characters using 5 dimesions from sims1: Neat, Outgoing, Active, Playful, and Nice. You will have to pick one from a pair of rocks we present you, and thus Either Rocks. Side story: Each rock is a gypsum stone that almost cost two lives to get from the Salton Sea. ",
      website: "https://www.instagram.com/seisai98/"
    },

    {
      name: 'Thrift Store',
      imageUrl: '/logo.png',
      author: "Kirby",
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'Trip Book Presale',
      imageUrl: 'https://cdn.discordapp.com/attachments/997240104160591872/1090147780879716372/Group_123_1.png',
      author: "Lucy",
      price: "$15, Presale, Physical copies still in production. Please leave your email if interested. Digital version available on Gumroad for $4.10",
      description: "Cutie's first mushroom trip through the eyes of AI. A highly personal, fun, sentimental, and profound experience. Actual physical copy will be 10x10 inches",
      website: "https://www.bcad.one/project/1"
    },

    {
      name: 'Coke Diffusion Colas',
      imageUrl: '/logo.png',
      author: "Jmill",
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'Instagram Food Mats',
      imageUrl: 'https://cdn.discordapp.com/attachments/1083196421353779260/1090039890860851211/IMG_5940.jpg',
      author: "Lucy",
      price: "$20",
      description: "",
      website: "https://www.bcad.one/"
    },
    {
      name: 'Anti-Virus Fulu Sticker: Begone, Computer Bugs!',
      imageUrl: 'https://cdn.discordapp.com/attachments/997240104160591872/1090143912095666246/Screen_Shot_2023-03-27_at_10.20.44_PM.png',
      author: "Lucy",
      price: "$2",
      description: "Inspired by Dennou Coil, I made a Chinese Talisman version of computer debugger. I wrote the Talisman in traditional Chinese with the message of 'Command: Begone. Computer Bugs!'",
      website: "https://www.instagram.com/seisai98/"
    },
    {
      name: 'FOMO/FOJI/JOMO/JOJI Sticker',
      imageUrl: 'https://cdn.discordapp.com/attachments/997240104160591872/1090155266080788500/Screen_Shot_2023-03-27_at_11.07.25_PM.png',
      author: "Acro Sam",
      price: "$1",
      description: "The spectrum of FOMO/FOJI/JOMO/JOJI",
      website: "https://www.instagram.com/kitt_10/"
    },

    {
      name: 'Printer Pages Book',
      imageUrl: '/logo.png',
      author: "Jmill",
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'Unfinished Project Shrine',
      imageUrl: '/logo.png',
      author: "Jmill",
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'Daw Coins',
      imageUrl: '/logo.png',
      author: "Czar + Delic",
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'Faux Holograms Display',
      imageUrl: '/logo.png',
      author: "Czar + Delic",
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'SS Astrolabia Bookmarks',
      imageUrl: '/logo.png',
      author: "Czar + Delic",
      price: "??",
      description: "",
      website: ""
    },
    {
      name: 'Yami-Ichi Stickers',
      imageUrl: 'https://cdn.discordapp.com/attachments/997240104160591872/1090702254715174932/logo-yami_ichi-01_1_1.png',
      author: "Kirby",
      price: "$1",
      description: "Logo for Bombay Beachy Yami-Ichi",
      website: "https://www.instagram.com/kirbliscious/"
    },
    {
      name: 'Mars Offline Activities Booklet',
      imageUrl: 'https://cdn.discordapp.com/attachments/997240104160591872/1090151807830990988/Screen_Shot_2023-03-27_at_10.53.25_PM.png',
      author: "Lucy",
      price: "$15",
      description: "Ever wonder what Martians are doing when they're off computers? I carefully selected 28 offline Martian activities for your curiosity. Inspired by the booklet Offline Activities.",
      website: "https://mars.college/"
    },
  ]);



  return (

    <div className="bg-white min-h-screen ">
      <Head>
        <title>Bombay Beachy Yami Ichi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-0 left-0 z-50  min-w-screen marquee-mom">
        <img src="/logo.png" className="marquee h-20" />
        <img src="/logo.png" className="marquee-2 h-40" />
        <img src="/logo.png" className="marquee-3 h-10" />
        <img src="/logo.png" className="marquee-4 h-60" />
      </div>

      <main className="max-w-5xl mx-auto py-12">
        <div className='flex ml-4'>
          <img className='h-10' src="/logo.png" />
          <h1 className="text-2xl lg:text-4xl text-black mb-8 ml-4 font-mono">Bombay Beachy Yami Ichi</h1>
        </div>

        <img className='mb-4' src="/poster.png" />
        <div className="flex justify-center items-center ">
          <video autoPlay loop muted className=" h-96 w-full max-w-3xl mb-10 ">
            <source src="/loop.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="columns-1 lg:columns-3">
          {trinkets.map((trinket, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md mb-6"
            >
              <div className="relative ">
                <img
                  src={trinket.imageUrl}
                  alt={trinket.name}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold font-mono text-lg mb-2 text-black">{trinket.name}</div>

                <div className="font-mono  text-base"><b> by<i> {trinket.author}</i></b></div>
                <div className="font-mono italic text-base">{trinket.description}</div>
                <div className="font-mono  text-base mt-2"><b>Price: </b>{trinket.price}</div>
                <a href={trinket.website} style={{ cursor: "pointer" }}>
                  <div className="font-mono  text-base mt-2"><b>Social Media: </b>{trinket.website}</div>
                </a>


              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default HomePage;
