/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import Image from 'next/image';
import PortableText from 'react-portable-text';
import Layout from '../../components/layouts/Layout';
import { sanityClient, urlFor } from '../../sanity';
import { Artist } from '../../typings';
import { NextPageWithLayout } from '../_app';

interface Props {
  artist?: Artist;
}

const ArtistPage: NextPageWithLayout = ({ artist }: Props) => {
  return (
    <main>
      <div className="flex flex-col">
        {artist && (
          <div className="xl:border-2 xl:border-black xl:bg-black xl:text-white max-w-4xl xl:max-w-6xl mx-auto lg:mt-4 xl:my-10 flex flex-col xl:flex-row xl:mt-20">
            <div className="flex flex-col relative xl:mx-4 xl:w-full">
              <div className="xl:visible h-0 xl:h-full invisible">
                <h1 className="text-3xl text-left my-2 font-bold px-4 md:p-0">
                  {artist.title.toUpperCase()}
                </h1>
              </div>
              <div className="flex xl:border-white xl:border-2">
                <Image
                  width="1600"
                  height="1000"
                  className="w-full object-cover h-fit"
                  src={urlFor(artist.mainImage).url()!}
                  alt="artist photo"
                />
              </div>
              <div className="xl:visible h-0 xl:h-full invisible">
                <p className="text-lg text-left px-4 md:py-2 xl:italic">
                  {artist.city.title}
                </p>
              </div>
            </div>
            <article className="p-4 lg:px-0 xl:w-full xl:m-4 xl:flex xl:flex-col xl:justify-between xl:h-full">
              <div className="xl:invisible xl:h-0 h-full">
                <h1 className="text-2xl text-left mb-4 font-bold">
                  {artist.title}
                </h1>
                <p className="text-lg text-left mb-2">{artist.city.title}</p>
              </div>
              <div className="flex my-6">
                {artist.ig && (
                  <a
                    href={artist.ig}
                    className="xl:bg-blue-600 xl:border-blue-600 mr-2 w-12 h-12 border rounded-full text-center bg-white border-white hover:bg-white hover:border-white"
                  >
                    <img className="" src="/ig.png" alt="instagram logo" />
                  </a>
                )}
                {artist.spotify && (
                  <a
                    href={artist.spotify}
                    className="mr-2 bg-white bg-blue-600 border-blue-600 xl:bg-blue-600 w-12 h-12 rounded-full text-center hover:bg-white hover:border-white"
                  >
                    <img
                      className="scale-110"
                      src="/spotify.png"
                      alt="spotify logo"
                    />
                  </a>
                )}
              </div>
              <div className="flex">
                <PortableText
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  content={artist.body}
                  serializers={{
                    h1: (props: any) => (
                      <h1 className="text-2xl font-bold my-5" {...props} />
                    ),
                    h4: (props: any) => (
                      <h1 className="text-xl font-bold my-5" {...props} />
                    ),
                  }}
                />
              </div>
            </article>
          </div>
        )}
      </div>
    </main>
  );
};

export default ArtistPage;

ArtistPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths = async () => {
  const query = `
    *[_type == "artist"]{
      _id,
      slug {
        current,
      }
    }
  `;

  const artists = await sanityClient.fetch(query);

  const paths = artists.map((artist: { slug: { current: any } }) => ({
    params: {
      slug: artist.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "artist" && slug.current == $slug][0]{
    _id,
    title,
    city-> {
      title
    },
    mainImage,
    slug,
    body,
    spotify,
    ig,
  }`;

  const artist = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!artist) {
    return {
      notFound: true,
    };
  }

  console.log(artist);
  return {
    props: {
      artist,
    },
    revalidate: 60,
  };
};
