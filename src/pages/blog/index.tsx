import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    slug: 'top-10-budget-travel-hacks',
    title: 'Top 10 Budget Travel Hacks',
    excerpt: 'Travel more for less with these proven tips.',
    category: 'Budget Travel',
  },
  {
    slug: 'why-solo-travel-changed-my-life',
    title: 'Why Solo Travel Changed My Life',
    excerpt: 'A personal story of discovery and empowerment.',
    category: 'Solo Travel',
  },
  {
    slug: 'a-guide-to-sustainable-travel',
    title: 'A Guide to Sustainable Travel',
    excerpt: 'How to be a responsible tourist.',
    category: 'Culture & History',
  },
  {
    slug: 'hiking-the-picos-de-europa',
    title: 'Hiking the Picos de Europa: A Step-by-Step Guide',
    excerpt: 'A complete guide to one of Spain\'s most stunning national parks.',
    category: 'Hiking & Outdoors',
  },
];

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <Head>
        <title>Blog - Travel Made Epic</title>
        <meta name="description" content="Explore our collection of travel stories, guides, and tips." />
      </Head>

      <h1 className="text-4xl font-bold text-center mb-12">The Blog</h1>

      {/* Search and Filter */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/3">
          <select className="w-full p-3 border rounded-lg">
            <option value="">All Categories</option>
            <option value="Budget Travel">Budget Travel</option>
            <option value="Solo Travel">Solo Travel</option>
            <option value="Culture & History">Culture & History</option>
            <option value="Hiking & Outdoors">Hiking & Outdoors</option>
            <option value="USA Travel">USA Travel</option>
          </select>
        </div>
      </div>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="https://via.placeholder.com/400x250" alt="Post thumbnail" className="w-full h-48 object-cover" width={400} height={250} />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.category}</p>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-yellow-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;