import Home from 'components/Home';
import { getAgreements } from 'pages/api/agreements';
import { getEvents } from 'pages/api/events';

export async function getServerSideProps() {
  const agreements = await getAgreements();
  const events = await getEvents();
  return {
    props: {
      agreements: JSON.parse(JSON.stringify(agreements)),
      events: JSON.parse(JSON.stringify(events.reverse())),
    },
  };
}

export default Home;
