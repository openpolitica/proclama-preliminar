import ReportsPage from 'components/ReportsPage';

export async function getServerSideProps() {
  const reports = [
    {
      id: 1,
      title: 'Diciembre 2021',
      url: 'https://drive.google.com/uc?export=download&id=11o1y3Eed0q5QjWLVb0M6eaHO0e058EEJ',
    },
    {
      id: 2,
      title: 'Mayo 2021',
      url: 'https://drive.google.com/uc?export=download&id=1ETkt9UjBL6IDLpZc1aT2W4FsxrQ_TEsH',
    },
    {
      id: 3,
      title: 'Julio 2021',
      url: '',
    },
  ];

  return {
    props: { reports: reports.reverse() },
  };
}

export default ReportsPage;
