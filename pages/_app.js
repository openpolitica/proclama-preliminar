import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import theme from 'global-styles/theme';
import GlobalStyle from 'global-styles/global';
import Head from 'next/head';
import * as gtag from 'lib/gtag';

function MyOPApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="favicon/favicon.svg"
        />
        <link
          href="https://api.fontshare.com/css?f[]=neco@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <title>Plataforma vigilantes</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyOPApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyOPApp;
