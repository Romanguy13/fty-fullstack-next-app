/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
import { sanityClient, urlFor } from '../sanity';
import type { Artist } from '../typings';
import type { NextPageWithLayout } from './_app';

interface Props {
  artists?: [Artist];
}

const Artists: NextPageWithLayout = ({ artists }: Props) => {
  console.log(artists);
  artists?.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <section>
      <div className="mx-auto text-center flex flex-col md:flex-row md:justify-center md:flex-wrap">
        {artists &&
          artists.map((artist) => (
            <Link key={artist._id} href={`/artist/${artist.slug.current}`}>
              <div className="md:w-5/12 lg:w-3/12 bg-black self-center md:m-2 lg:m-4 group shadow-sm cursor-pointer h-full">
                <div className="bg-black relative pb-0 overflow-hidden">
                  <Image
                    width="1600"
                    height="1000"
                    className="scale-125 group-hover:scale-110 duration-100 ease-in-out absolute w-full object-cover"
                    src={urlFor(artist.mainImage).url()!}
                    alt="artist photo"
                  />
                </div>
                <div className="flex justify-around bg-black p-2 items-center">
                  <h3 className="text-left font-bold text-2xl text-white">
                    {artist.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Artists;

Artists.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
    *[_type == "artist"] {
      _id,
      title,
      city,
      mainImage,
      slug,
      body,
    }
  `;
  const artists = await sanityClient.fetch(query);
  return {
    props: {
      artists,
    },
  };
};
