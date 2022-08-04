import AboutUsPage from 'components/AboutUsPage';
import orgList from '_data/reports';

export async function getServerSideProps() {
  return {
    props: { orgs: orgList },
  };
}

export default AboutUsPage;
