import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

const destinations = {
  europe: {
    name: 'Europe',
    content: 'Explore the rich history, diverse cultures, and stunning landscapes of Europe.',
  },
  asia: {
    name: 'Asia',
    content: 'From bustling cities to serene temples, Asia offers a vibrant tapestry of experiences.',
  },
  'north-america': {
    name: 'North America',
    content: 'Discover the vast and varied landscapes of North America, from sprawling national parks to iconic cities.',
  },
  'south-america': {
    name: 'South America',
    content: 'Journey through the dramatic landscapes and vibrant cultures of South America.',
  },
  africa: {
    name: 'Africa',
    content: 'Experience the breathtaking wildlife and diverse cultures of the African continent.',
  },
  australia: {
    name: 'Australia',
    content: 'From the Outback to the Great Barrier Reef, Australia is a land of incredible natural beauty.',
  },
};

interface Destination {
  name: string;
  content: string;
}

const DestinationPage = ({ destination }: { destination: Destination }) => {
  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <Head>
        <title>{`${destination.name} - Travel Made Epic`}</title>
      </Head>

      <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
      <div className="prose lg:prose-xl">
        <p>{destination.content}</p>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(destinations).map((region) => ({
    params: { region },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const destination = destinations[params?.region as keyof typeof destinations];
  return { props: { destination } };
};

export default DestinationPage;