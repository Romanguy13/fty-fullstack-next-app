import Link from 'next/link';
import { useState } from 'react';
import Menu from '../svg/Menu';

export interface INavbar {}

const Navbar: React.FC<INavbar> = () => {
  let Links = [
    { name: 'READ', link: '/read' },
    { name: 'ARTISTS', link: '/artists' },
    { name: 'WATCH', link: '/watch' },
    { name: 'CONTACT', link: '/contact' },
    { name: 'ABOUT', link: '/about' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="lg:flex items-center justify-around bg-black p-8">
        <div className="bg-black font-bold cursor-pointer flex items-center">
          <Link href="/">
            <span
              onClick={() => setOpen(!open ? open : !open)}
              className="hover:underline duration-50 sm:text-4xl text-3xl text-white mr-5"
            >
              FREE THE YOUTH
            </span>
            {/* <div>
              <Image alt="logo" src="/fin.png" height={125} width={200} />
            </div> */}
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-4xl font-bold absolute m-4 right-4 top-4 cursor-pointer lg:hidden text-white"
        >
          <Menu />
        </div>

        <ul
          className={`bg-black w-full lg:flex lg:w-auto lg:pl-0 transition-all divide-y lg:divide-black ${
            open ? 'visible' : 'hidden'
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="bg-black text-right text-white lg:ml-8 sm:text-2xl py-4 lg:py-0"
            >
              <Link href={link.link}>
                <div
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer hover:underline duration-50 text-2xl"
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
