import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const SoloTravelHub = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <Head>
        <title>Solo Travel Hub - Travel Made Epic</title>
        <meta name="description" content="Your ultimate resource for solo travel, with a focus on safety, empowerment, and practical advice." />
      </Head>

      <h1 className="text-4xl font-bold text-center mb-12">Solo Travel Hub</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Resources */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Resources for Solo Travelers</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/blog/solo-female-travel-safety-tips" className="text-xl font-semibold text-gray-800 hover:text-yellow-500">
                Safety Tips for Solo Female Travelers
              </Link>
            </li>
            <li>
              <Link href="/blog/solo-travel-packing-guide" className="text-xl font-semibold text-gray-800 hover:text-yellow-500">
                The Ultimate Solo Travel Packing Guide
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-enjoy-nightlife-alone" className="text-xl font-semibold text-gray-800 hover:text-yellow-500">
                How to Enjoy Nightlife as a Solo Traveler
              </Link>
            </li>
            <li>
              <Link href="/blog/taking-photos-alone" className="text-xl font-semibold text-gray-800 hover:text-yellow-500">
                How to Take Amazing Photos of Yourself
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column: Inspirational Stories */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Inspirational Stories</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="https://via.placeholder.com/600x400" alt="Inspirational story" className="w-full h-64 object-cover" width={600} height={400} />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Why I Quit My Corporate Job to Travel the World</h3>
                <p className="text-gray-700 mb-4">A personal story of how I left the 9-to-5 behind to pursue a life of adventure.</p>
                <Link href="/blog/why-i-quit-my-job-to-travel" className="text-yellow-500 hover:underline">
                  Read My Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloTravelHub;