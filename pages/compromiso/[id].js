import Agreement from 'components/AgreementPage';
import { getAgreementByID } from 'pages/api/agreements';

export async function getServerSideProps({ params }) {
  const agreementInfo = await getAgreementByID(params.id);
  return {
    props: {
      agreementInfo: JSON.parse(JSON.stringify(agreementInfo)),
      indicatorsCount: agreementInfo?.indicators.length,
    },
  };
}

export default Agreement;
