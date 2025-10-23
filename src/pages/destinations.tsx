import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const destinations = [
  {
    name: 'Europe',
    slug: 'europe',
    image: 'https://via.placeholder.com/400x400',
  },
  {
    name: 'Asia',
    slug: 'asia',
    image: 'https://via.placeholder.com/400x400',
  },
  {
    name: 'North America',
    slug: 'north-america',
    image: 'https://via.placeholder.com/400x400',
  },
  {
    name: 'South America',
    slug: 'south-america',
    image: 'https://via.placeholder.com/400x400',
  },
  {
    name: 'Africa',
    slug: 'africa',
    image: 'https://via.placeholder.com/400x400',
  },
  {
    name: 'Australia',
    slug: 'australia',
    image: 'https://via.placeholder.com/400x400',
  },
];

const DestinationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <Head>
        <title>Destinations - Travel Made Epic</title>
        <meta name="description" content="Explore our travel guides to destinations around the world." />
      </Head>

      <h1 className="text-4xl font-bold text-center mb-12">Destinations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <Link key={destination.slug} href={`/destinations/${destination.slug}`} className="block group">
            <div className="relative overflow-hidden rounded-lg">
              <Image src={destination.image} alt={destination.name} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300" width={400} height={400} />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">{destination.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;