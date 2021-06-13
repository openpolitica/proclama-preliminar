import * as Styled from './styles';
import Button from 'components/Button';
import TextInput from 'components/TextInput';
import { useState } from 'react';
import fetchJson from 'lib/fetchJson';
import Router from 'next/router';
import FooterInfo from 'components/FooterInfo';

const Login = () => {
  const [errorMsg, setErrorMsg] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    const body = {
      password: e.currentTarget.password.value,
    };

    try {
      await fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      Router.push('/update-form');
    } catch (error) {
      setErrorMsg(error.data.message);
    }
  }
  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.Title>Acceso Proclama Ciudadana</Styled.Title>
        <Styled.Info>
          Ingrese la contraseña para acceder al formulario de actualización{' '}
        </Styled.Info>
        <form onSubmit={handleLogin}>
          <Styled.InputContainer>
            <TextInput
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required
            />
          </Styled.InputContainer>
          {errorMsg ? <Styled.Message>{errorMsg}</Styled.Message> : null}
          <Styled.ButtonBox>
            <Button type="submit" primary>
              Acceder
            </Button>
          </Styled.ButtonBox>
        </form>
        <FooterInfo />
      </Styled.Main>
    </Styled.Container>
  );
};

export default Login;
