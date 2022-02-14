import Agreement from 'components/AgreementPage';
import { getAgreementByID, getAgreementsCount } from 'pages/api/agreements';

export async function getServerSideProps({ params }) {
  const agreementsCount = await getAgreementsCount();
  if (!isNaN(params.id) && params.id > 0 && params.id <= agreementsCount) {
    const agreementInfo = await getAgreementByID(params.id);
    console.log(agreementInfo);
    return {
      props: {
        page: params.id,
        agreementsCount: agreementsCount,
        agreementInfo: JSON.parse(JSON.stringify(agreementInfo)),
        indicatorsCount: agreementInfo?.indicators.length,
      },
    };
  }
  return {
    props: {
      page: null,
    },
  };
}

export default Agreement;
