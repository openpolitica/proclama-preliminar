import Home from 'components/Home';
import { getAgreements } from 'pages/api/agreements';
import { getLastEvents } from 'pages/api/events';

export async function getServerSideProps() {
  const agreements = await getAgreements();
  const events = await getLastEvents(3);
  console.log(events);
  return {
    props: {
      agreements: JSON.parse(JSON.stringify(agreements)),
      events: JSON.parse(JSON.stringify(events)),
    },
  };
}

export default Home;
