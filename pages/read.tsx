/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';
import type { NextPageWithLayout } from './_app';

export interface Props {
  posts?: [Post];
}

const Read: NextPageWithLayout = ({ posts }: Props) => {
  return (
    <section>
      <div className="mx-auto text-center flex flex-col">
        {posts &&
          posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="md:w-8/12 xl:w-6/12 self-center md:m-4 group shadow-sm cursor-pointer w-full">
                <div className="bg-black relative pb-0 overflow-hidden">
                  <Image
                    width="1600"
                    height="1000"
                    className="scale-125 group-hover:scale-110 duration-100 ease-in-out absolute w-full object-cover"
                    src={urlFor(post.mainImage).url()!}
                    alt="post photo"
                  />
                </div>
                <div className="flex justify-between bg-black p-2 py-4 items-center">
                  <h3 className="text-left font-bold text-lg text-white">
                    {post.title}
                  </h3>
                  <div className="flex items-center">
                    <p className="mr-2 text-bold text-white">
                      {post.author.name}
                    </p>
                    <img
                      src={urlFor(post.author.image).url()!}
                      alt="author logo"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Read;

Read.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
    *[_type == 'post'] {
      _id,
      author -> {
        name,
        image,
      },
      slug,
      categories[0]->{
        title,
        description,
      },
      mainImage,
      publishedAt,
      title,
      body,
    }
  `;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
