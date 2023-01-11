/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
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
      {artist && (
        <div className="max-w-4xl mx-auto">
          <div className="pb-2/3 relative overflow-hidden">
            <img
              className="absolute top-0 w-full object-cover"
              src={urlFor(artist.mainImage).url()!}
              alt="artist photo"
            />
          </div>
          <article className="p-4">
            <h1 className="text-2xl text-left my-4 font-bold">
              {artist.title}
            </h1>
            <p className="text-lg text-left">{artist.city.title}</p>
            <div className="mb-20">
              <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={artist.body}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-2xl font-bold my-5" {...props} />
                  ),
                }}
              />
            </div>
          </article>
        </div>
      )}
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
