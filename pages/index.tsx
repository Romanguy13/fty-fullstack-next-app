import Layout from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <div className="m-5 mx-auto px-5 text-center flex flex-col">
        <h1 className="text-3xl">Sample Heading</h1>
        <h1 className="text-xl">Writing random text as filler</h1>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
