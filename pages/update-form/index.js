import { useState, useEffect } from 'react';
import Form from 'components/Form';

export async function getServerSideProps() {
  const UPDATE_PWD = process.env.UPDATE_PWD || 'pass';
  return {
    props: { update_password: UPDATE_PWD },
  };
}

const UpdateForm = props => {
  const [isAutenticated, setAutenticated] = useState(false);
  useEffect(() => {
    if (!isAutenticated) {
      var answer = prompt('Ingresa la contraseña:', '');
      if (answer === props.update_password) {
        setAutenticated(true);
      } else {
        setAutenticated(false);
        alert('Contaseña incorrecta');
      }
    }
  }, [isAutenticated]);

  if (isAutenticated) {
    return <Form />;
  } else {
    return null;
  }
};

export default UpdateForm;
