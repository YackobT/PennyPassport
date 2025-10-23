import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Travel Made Epic - Explore Smarter, Live Bolder</title>
        <meta name="description" content="Your ultimate guide to traveling better and smarter, on any budget." />
        <link rel="icon" href="/PennyPassport/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/PennyPassport/images/banner.jpg')", // <-- LOCAL HERO/BANNER IMAGE
        }}
      >
        <div className="flex items-center justify-center h-full w-full bg-black bg-opacity-50">
          <div className="text-center text-white w-full">
            <h1 className="text-5xl font-bold font-heading mb-4">Start Your Journey Today</h1>
            <p className="text-xl font-body mb-8">Discover Your Next Adventure</p>
            <Link href="/destinations" className="bg-mustard-yellow text-white font-bold py-3 px-6 rounded hover:bg-yellow-600">
              Discover Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/PennyPassport/images/Thumbnailtips.jpg" alt="Post thumbnail tips" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Top 10 Budget Travel Hacks</h3>
                <p className="font-body text-gray-700 mb-4">Travel more for less with these proven tips.</p>
                <Link href="/blog/top-10-budget-travel-hacks" className="text-mustard-yellow hover:underline">
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/PennyPassport/images/Thumbnailrail.jpg" alt="Post thumbnail rail" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Why Solo Travel Changed My Life</h3>
                <p className="font-body text-gray-700 mb-4">A personal story of discovery and empowerment.</p>
                <Link href="/blog/why-solo-travel-changed-my-life" className="text-mustard-yellow hover:underline">
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/PennyPassport/images/Thumbnailsky.jpg" alt="Post thumbnail sky" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">A Guide to Sustainable Travel</h3>
                <p className="font-body text-gray-700 mb-4">How to be a responsible tourist.</p>
                <Link href="/blog/a-guide-to-sustainable-travel" className="text-mustard-yellow hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">Join Our Community</h2>
          <p className="text-lg font-body text-gray-700 mb-8">Get our free solo travel checklist and weekly travel tips!</p>
          <form className="max-w-md mx-auto">
            <div className="flex items-center">
              <input type="email" className="w-full p-3 rounded-l-lg font-body" placeholder="Enter your email" />
              <button type="submit" className="bg-mustard-yellow text-white font-bold py-3 px-6 rounded-r-lg hover:bg-yellow-600">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <Link href="/budget-travel" className="text-xl font-bold font-heading text-gray-800 hover:text-terracotta">Budget Travel</Link>
            <Link href="/solo-travel" className="text-xl font-bold font-heading text-gray-800 hover:text-terracotta">Solo Travel</Link>
            <Link href="/culture-history" className="text-xl font-bold font-heading text-gray-800 hover:text-terracotta">Culture & History</Link>
            <Link href="/hiking-outdoors" className="text-xl font-bold font-heading text-gray-800 hover:text-terracotta">Hiking & Outdoors</Link>
            <Link href="/usa-travel" className="text-xl font-bold font-heading text-gray-800 hover:text-terr
