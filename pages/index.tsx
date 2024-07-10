import Head from 'next/head';
import Home from '@/pages/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>CartZilla</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
