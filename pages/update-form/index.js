import Form from 'components/Form';
import withSession from 'lib/session';

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

  return {
    props: { user: req.session.get('user') },
  };
});

export default Form;
