import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const BudgetTravelHub = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <Head>
        <title>Budget Travel Hub - Travel Made Epic</title>
        <meta name="description" content="Your guide to traveling the world on a budget, with tips, tricks, and resources." />
      </Head>

      <h1 className="text-4xl font-bold text-center mb-12">Budget Travel Hub</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Budgeting Resources */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Budgeting Resources</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/resources/budgeting-templates" className="text-xl font-semibold text-gray-800 hover:text-yellow-500">
                Free Travel Budget Templates
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-find-cheap-flights" className="text-xl font-semibold text-gray-800 hover:text-yellow-500">
                How to Find Insanely Cheap Flights
              </Link>
            </li>
            <li>
              <Link href="/blog/using-referral-codes" className="text-xl font-semibold text-gray-800 hover:text-yellow-500">
                The Ultimate Guide to Using Referral Codes
              </Link>
            </li>
            <li>
              <Link href="/blog/choosing-budget-accommodation" className="text-xl font-semibold text-gray-800 hover:text-yellow-500">
                How to Choose the Best Budget Accommodation
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column: Cost Breakdowns */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Sample Itinerary Cost Breakdowns</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="https://via.placeholder.com/600x400" alt="Cost breakdown" className="w-full h-64 object-cover" width={600} height={400} />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">7 Days in Costa Rica: The Cost Breakdown</h3>
                <p className="text-gray-700 mb-4">A detailed breakdown of what it really costs to spend a week in Costa Rica.</p>
                <Link href="/blog/costa-rica-cost-breakdown" className="text-yellow-500 hover:underline">
                  See the Breakdown
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTravelHub;