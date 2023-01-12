import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Disney+ Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
    </div>
  );
};

export default Home;
