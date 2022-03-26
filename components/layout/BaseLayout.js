import Header from 'components/shared/Header';
import Head from 'next/head';

const BaseLayout = ({ children, head }) => {
  return (
    <>
      <Head>
        <title>{head}</title>
        <link rel="shortcut icon" href="/super-mario.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default BaseLayout;
