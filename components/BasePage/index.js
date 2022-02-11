import { Fragment } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function BasePage(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}
