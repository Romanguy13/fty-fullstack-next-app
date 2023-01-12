import Head from 'next/head';
import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';

export interface ILayout {
  children: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>FTY APP</title>
      </Head>
      <div className="flex flex-col justify-between">
        <Navbar />
        <main className="mb-10">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
