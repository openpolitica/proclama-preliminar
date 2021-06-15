import Form from 'components/Form';
import withSession from 'lib/session';
import { getAgreementsOnly } from 'pages/api/agreements';

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get('user');

  if (!user) {
    return {
      redirect: {
        destination: '/update-form/login',
        permanent: false,
      },
    };
  }

  const agreements = await getAgreementsOnly();

  return {
    props: {
      user: req.session.get('user'),
      // Avoid _id objects not being serialized
      // https://github.com/vercel/next.js/issues/11993#issuecomment-617375501
      agreements: JSON.parse(JSON.stringify(agreements)),
    },
  };
});

export default Form;
