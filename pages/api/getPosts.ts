import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Post } from '../../typings';

const q = groq`*[_type == "post"] {
    title,
    body,
    slug,
  }`;

type Data = {
  posts: Post[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const posts: Post[] = await sanityClient.fetch(q);
  res.status(200).json({ posts });
}
