export interface Post {
  _id: string;
  slug: {
    current: string;
  };
  author: {
    name: string;
    image: string;
  };
  categories: {
    title: string;
    description: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  title: string;
  body: [object];
}

export interface Artist {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
  city: {
    title: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  body: [object];
  ig: string;
  spotify: string;
}
