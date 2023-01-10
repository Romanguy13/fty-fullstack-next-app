import Landing from '../components/content/Landing';
import Layout from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <section className="mx-auto max-w-5xl p-4 pt-0">
      <Landing />
      <div className="flex flex-col mt-10">
        {/* <Link href="/read">
          <button className="max-w-xl w-1/2 bg-transparent hover:bg-black text-black hover:text-white py-4 border border-black hover:border-transparent rounded">
            Read
          </button>
        </Link> */}
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
