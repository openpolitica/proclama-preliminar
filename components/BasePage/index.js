import { Fragment } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { useState } from 'react';
import useViewport from 'hooks/useViewport';

export default function BasePage(props) {
  const { width } = useViewport();
  const breakpoint = 600;
  const isMobile = width < breakpoint;
  const [isOpenedMobile, setOpenMobile] = useState(false);
  const toggleButton = () => setOpenMobile(value => !value);
  return (
    <Fragment>
      <Header
        isMobile={isMobile}
        isOpenedMobile={isOpenedMobile}
        toggleButton={toggleButton}
      />
      {isMobile && isOpenedMobile ? null : props.children}
      <Footer />
    </Fragment>
  );
}
