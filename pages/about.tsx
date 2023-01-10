import Layout from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <div className="m-5 mx-auto text-center flex flex-col">
        <h1 className="text-3xl">Read about us!</h1>
      </div>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
