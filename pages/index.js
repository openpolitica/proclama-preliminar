import Home from 'components/Home';
import { getSignatureCount } from 'pages/api/signatures';

export async function getServerSideProps() {
  const signatures = await getSignatureCount();
  return {
    props: { signatures },
  };
}

export default Home;
