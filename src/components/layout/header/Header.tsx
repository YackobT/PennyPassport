import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-heading text-gray-800">
          Travel Made Epic
        </Link>
        <nav>
          <ul className="flex space-x-6 font-body">
            <li>
              <Link href="/" className="text-gray-600 hover:text-mustard-yellow">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-mustard-yellow">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="text-gray-600 hover:text-mustard-yellow">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/budget-travel" className="text-gray-600 hover:text-mustard-yellow">
                Budget Travel
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-mustard-yellow">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-mustard-yellow">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;