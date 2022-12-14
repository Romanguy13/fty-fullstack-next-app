/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import Image from 'next/image';
import PortableText from 'react-portable-text';
import Layout from '../../components/layouts/Layout';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../typings';
import { NextPageWithLayout } from '../_app';

interface Props {
  post?: Post;
}

const PostPage: NextPageWithLayout = ({ post }: Props) => {
  return (
    <main>
      {post && (
        <div className="max-w-4xl mx-auto lg:mt-4">
          <Image
            width="1600"
            height="1000"
            className="w-full"
            src={urlFor(post.mainImage).url()!}
            alt="post photo"
          />
          <article className="p-4 xl:p-0">
            <h1 className="text-2xl text-left my-4 font-bold">{post.title}</h1>
            <p>
              Published on {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <div className="flex items-center space-x-2 my-4">
              <div className="relative h-10 w-10">
                <Image
                  width="1600"
                  height="1000"
                  layout="fill"
                  className="rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt="author photo"
                />
              </div>
              <p>{post.author.name}</p>
            </div>
            <div className="mb-20">
              <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={post.body}
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

export default PostPage;

PostPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths = async () => {
  const query = `
    *[_type == "post"]{
      _id,
      slug {
        current,
      }
    }
  `;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: { slug: { current: any } }) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    author-> {
      name,
      image,
    },
    mainImage,
    publishedAt,
    body,
  }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  console.log(post);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
