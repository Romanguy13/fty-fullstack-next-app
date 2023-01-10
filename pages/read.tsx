/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
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
              <div className="md:w-8/12 xl:w-6/12 bg-white self-center md:m-4 group border-2 border-gray-200 shadow-sm cursor-pointer w-full">
                <div className="border-b-2 border-gray-200 bg-white relative pb-2/3 overflow-hidden">
                  <img
                    className="group-hover:scale-105 duration-100 ease-in-out absolute w-full object-cover"
                    src={urlFor(post.mainImage).url()!}
                    alt="post photo"
                  />
                </div>
                <div className="flex justify-between bg-white m-4 items-center">
                  <h3 className="text-left font-bold text-lg">{post.title}</h3>
                  <div className="flex items-center">
                    <p className="mr-2 text-bold">{post.author.name}</p>
                    <img
                      src={urlFor(post.author.image).url()!}
                      alt="author logo"
                      className="h-10 w-10 rounded-full border-gray border-2"
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
