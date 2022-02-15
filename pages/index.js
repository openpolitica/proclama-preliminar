import Home from 'components/Home';
import { getAgreements, getStatusCounters } from 'pages/api/agreements';
import { getLastEvents } from 'pages/api/events';

export async function getServerSideProps() {
  const agreements = await getAgreements();
  const events = await getLastEvents(3);
  const counters = await getStatusCounters();
  console.log(counters);
  return {
    props: {
      agreements: JSON.parse(JSON.stringify(agreements)),
      events: JSON.parse(JSON.stringify(events)),
      counters: JSON.parse(JSON.stringify(counters)),
    },
  };
}

export default Home;
