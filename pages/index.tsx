import type { NextPage } from 'next';
import Head from 'next/head';
import Brands from '../components/Brands';
import Header from '../components/Header';
import Slider from '../components/Slider';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Disney+ Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider />
        <Brands />
      </main>
    </div>
  );
};

export default Home;
