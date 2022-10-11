import Link from 'next/link';
import { useState } from 'react';
import Menu from '../svg/Menu';

export interface INavbar {}

const Navbar: React.FC<INavbar> = () => {
  let Links = [
    { name: 'READ', link: '/read' },
    { name: 'ZINE', link: '/' },
    { name: 'WATCH', link: '/watch' },
    { name: 'CONTACT', link: '/contact' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="sm:flex items-center justify-between bg-black py-4 px-4">
        <div className="bg-black font-bold cursor-pointer flex items-center">
          <Link href="/">
            <span
              onClick={() => setOpen(!open ? open : !open)}
              className="hover:text-gray-500 duration-50 text-xl text-white mr-5"
            >
              FREE THE YOUTH
            </span>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-xl font-bold absolute right-4 top-4 cursor-pointer sm:hidden text-white"
        >
          <Menu />
        </div>

        <ul
          className={`bg-black w-full sm:flex sm:w-auto sm:pl-0 transition-all divide-y sm:divide-black ${
            open ? 'visible' : 'hidden'
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="bg-black text-right text-white sm:ml-8 text-xl py-4 sm:py-0"
            >
              <Link href={link.link}>
                <div
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer hover:text-gray-500 duration-50"
                >
                  {link.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
