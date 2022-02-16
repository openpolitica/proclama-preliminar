import Home from 'components/Home';
import { getAgreements, getStatusCounters } from 'pages/api/agreements';
import { getLastEvents } from 'pages/api/events';

export async function getServerSideProps() {
  const agreements = await getAgreements();
  const events = await getLastEvents(3);
  const counters = await getStatusCounters();

  const status = [
    {
      id: 'null',
      order: 0,
    },
    {
      id: 'moderate',
      order: 1,
    },
    {
      id: 'high',
      order: 2,
    },
    {
      id: 'extreme',
      order: 3,
    },
  ];

  const agreementsCounters = agreements.map(
    ({ id, title, description, _id }) => {
      const agreementCounters = counters.find(item => item._id === id);
      agreementCounters.statuses = agreementCounters.statuses.sort((a, b) => {
        const aStatus = status.find(item => item.id === a.status);
        const bStatus = status.find(item => item.id === b.status);

        if (aStatus?.order > bStatus?.order) {
          return 1;
        }
        if (aStatus?.order < bStatus?.order) {
          return -1;
        }
        return 0;
      });

      return {
        _id,
        id,
        title,
        description,
        statuses: agreementCounters.statuses,
        indicators_count: agreementCounters.indicators_count,
      };
    },
  );
  console.log(agreementsCounters);
  console.log(events);
  return {
    props: {
      agreements: JSON.parse(JSON.stringify(agreementsCounters)),
      events: JSON.parse(JSON.stringify(events)),
    },
  };
}

export default Home;
