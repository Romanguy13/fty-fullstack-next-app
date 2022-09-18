import Layout from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const Watch: NextPageWithLayout = () => {
  return (
    <section>
      <div className="m-5 mx-auto text-center flex flex-col">
        <h1 className="text-3xl">Embed Videos Here</h1>
      </div>
    </section>
  );
};

export default Watch;

Watch.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
