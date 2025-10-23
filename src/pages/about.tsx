import Head from 'next/head';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <Head>
        <title>About - Travel Made Epic</title>
        <meta name="description" content="Learn more about the story and mission of Travel Made Epic." />
      </Head>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">About Travel Made Epic</h1>
        <Image src="https://via.placeholder.com/200x200" alt="Creator photo" className="mx-auto rounded-full mb-8" width={200} height={200} />
        <p className="text-xl text-gray-700 mb-8">
          I started with no experience and no trust fund, just a dream to see the world. After years of working a corporate job that left me feeling unfulfilled, I decided to take a leap of faith. I quit my job, bought a one-way ticket, and embarked on a journey that would change my life forever.
        </p>
        <p className="text-xl text-gray-700 mb-8">
          Travel Made Epic was born from a desire to empower everyone to travel smarter, regardless of their background or budget. Our mission is to provide practical advice, in-depth guides, and personal stories to help you explore the world with confidence.
        </p>
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl text-gray-700">
          To inspire and equip people from all walks of life to travel better, smarter, and more affordably.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;