import Image from 'next/image';
import Layout from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const Contact: NextPageWithLayout = () => {
  return (
    <section className="px-8">
      <div className="max-w-screen-lg mt-8 px-8 grid grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 py-10 mx-auto bg-gray-100 text-gray-800 rounded-sm shadow-md">
        <div className="flex flex-col">
          <div className="text-center">
            <h2 className="text-3xl font-bold pb-5">CONTACT US</h2>
            <div className="hidden md:flex md:visible">
              <Image
                src="/fty.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-black hover:bg-zinc-500 duration-300 text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

Contact.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
