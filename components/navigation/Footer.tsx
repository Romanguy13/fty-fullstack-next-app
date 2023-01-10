import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  const linkText = '</>';
  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-0">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 mb-6 sm:mb-0 xl:text-left sm:text-center">
            <h5 className="text-xl font-bold mb-4">Get Involved</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-black"
                >
                  Work with us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-black"
                >
                  Send us a message
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 sm:text-center xl:text-left">
            <h5 className="text-xl font-bold mb-4">Resources</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Upcoming Events
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <Link
                  href="/develop"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  {linkText}
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 text-left">
            <h5 className="text-xl font-bold mb-6 mt-10 sm:mt-0">
              Stay connected
            </h5>
            <div className="flex">
              <a
                href="https://www.instagram.com/freetheyouth.xyz"
                className="mr-2 w-10 h-10 border border-2 border-gray-400 rounded-full text-center hover:bg-blue-600 hover:border-blue-600"
              >
                <img className="" src="/ig.png" alt="instagram logo" />
              </a>
              <a
                href=""
                className="mr-2 w-10 h-10 border border-2 border-gray-400 rounded-full text-center hover:bg-blue-600 hover:border-blue-600"
              >
                <img className="" src="/youtube.png" alt="youtube logo" />
              </a>
              <a
                href="https://open.spotify.com/playlist/0C0lAkSWHW6f6joaHWdjbR?si=19c0100537bd465b"
                className="w-10 h-10 border border-2 border-gray-400 rounded-full text-center hover:bg-blue-600 hover:border-blue-600"
              >
                <img className="" src="/spotify.png" alt="spotify logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
