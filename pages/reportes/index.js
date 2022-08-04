import ReportsPage from 'components/ReportsPage';
import reportList from '_data/reports';

export async function getServerSideProps() {
  return {
    props: { reports: reportList.reverse() },
  };
}

export default ReportsPage;
