import Link from 'next/link';

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white font-body">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-heading text-terracotta mb-4">Travel Made Epic</h3>
            <p className="text-gray-400">Explore Smarter, Live Bolder.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-terracotta mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-mustard-yellow">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-mustard-yellow">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-mustard-yellow">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-mustard-yellow">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-terracotta mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mustard-yellow">
                Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mustard-yellow">
                X
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mustard-yellow">
                Pinterest
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          <p>&copy; {new Date().getFullYear()} Travel Made Epic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;