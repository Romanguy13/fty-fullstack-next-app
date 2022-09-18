import Head from 'next/head';
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
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
