import Head from 'next/head';

const ResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <Head>
        <title>Resources - Travel Made Epic</title>
        <meta name="description" content="A curated list of our favorite travel tools, apps, and resources." />
      </Head>

      <h1 className="text-4xl font-bold text-center mb-12">Travel Resources</h1>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Booking Platforms</h2>
        <ul className="list-disc list-inside space-y-4 mb-12">
          <li>
            <a href="#" className="text-xl text-gray-800 hover:text-yellow-500">Booking.com</a> - For hotels and accommodations.
          </li>
          <li>
            <a href="#" className="text-xl text-gray-800 hover:text-yellow-500">Skyscanner</a> - For finding the cheapest flights.
          </li>
          <li>
            <a href="#" className="text-xl text-gray-800 hover:text-yellow-500">Hostelworld</a> - For budget-friendly hostels.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mb-8">Travel Gear</h2>
        <ul className="list-disc list-inside space-y-4 mb-12">
          <li>
            <a href="#" className="text-xl text-gray-800 hover:text-yellow-500">Osprey Backpacks</a> - Durable and comfortable travel backpacks.
          </li>
          <li>
            <a href="#" className="text-xl text-gray-800 hover:text-yellow-500">Anker Power Bank</a> - To keep your devices charged on the go.
          </li>
          <li>
            <a href="#" className="text-xl text-gray-800 hover:text-yellow-500">Sony Alpha a7 III</a> - The best camera for travel photography.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mb-8">Travel Insurance</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <a href="#" className="text-xl text-gray-800 hover:text-yellow-500">World Nomads</a> - Comprehensive travel insurance for adventurous travelers.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesPage;