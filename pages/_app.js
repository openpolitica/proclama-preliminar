import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import theme from 'global-styles/theme';
import GlobalStyle from 'global-styles/global';
import Head from 'next/head';
import useHotjar from 'react-use-hotjar';
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

const logger = value =>
  console.info(`%c${value}`, 'background: #222; color: #bada55');

const withHotjar = Component => props => {
  const { initHotjar } = useHotjar();

  useEffect(() => {
    initHotjar(
      process.env.hotjar.id,
      process.env.hotjar.version,
      false,
      logger,
    );
  }, [initHotjar]);

  return <Component {...props} />;
};

export default process.env.NEXT_PUBLIC_ENVIRONMENT === 'local'
  ? MyOPApp
  : withHotjar(MyOPApp);
