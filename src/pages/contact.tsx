import Head from 'next/head';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <Head>
        <title>Contact - Travel Made Epic</title>
        <meta name="description" content="Get in touch with Travel Made Epic." />
      </Head>

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Have a question, a collaboration idea, or just want to say hello? Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full p-3 border rounded-lg"></textarea>
          </div>
          <button type="submit" className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600">
            Send Message
          </button>
        </form>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-yellow-500">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-yellow-500">X</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-yellow-500">Pinterest</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;