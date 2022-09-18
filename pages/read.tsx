import Layout from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const Read: NextPageWithLayout = () => {
  return (
    <section>
      <div className="m-5 mx-auto text-center flex flex-col">
        <h1 className="text-3xl">Blog Posts Here</h1>
      </div>
    </section>
  );
};

export default Read;

Read.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
