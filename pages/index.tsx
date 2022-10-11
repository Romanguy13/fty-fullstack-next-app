import { GetServerSideProps } from 'next';
import Layout from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <div className="m-5 mx-auto px-5 text-center flex flex-col">
        <h1 className="text-3xl">Post Title:</h1>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};
