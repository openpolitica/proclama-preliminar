import * as Styled from './styles';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from 'components/Footer';
import AgreementCard from 'components/AgreementCard';
import { agreements } from 'data/agreements';
import SignatureCount from 'components/SignatureCount';

const LogoList = () => (
  <Styled.Boxlogo>
    <Styled.LogoText>Open Política</Styled.LogoText>
    <Image
      src="/images/logos/200.svg"
      width="74"
      height="74"
      alt="logo de 200"
    />
    <Image
      src="/images/logos/transparencia.svg"
      width="156"
      height="74"
      alt="logo de transparencia"
    />
  </Styled.Boxlogo>
);

const Home = props => {
  return (
    <Fragment>
      <header>
        <Link href="/">
          <Styled.Header>#ProclamaCiudadana</Styled.Header>
        </Link>
        <hr />
      </header>
      <Styled.Container>
        <Styled.Main>
          <Styled.Title>
            Conoce y hazle seguimiento a los{' '}
            <Styled.Emphasis>12 acuerdos democráticos</Styled.Emphasis> que han
            firmado los candidatos a la segunda vuelta
          </Styled.Title>
          <Styled.Subtitle>
            El Perú nació bajo el espíritu de la libertad. Al llegar el
            Bicentenario, toca a su pueblo defenderla porque ella solo es
            posible en democracia. En el Perú, sabemos lo que es perderla y{' '}
            <Styled.Emphasis>
              sabemos también lo que es recuperarla.
            </Styled.Emphasis>
          </Styled.Subtitle>
          <Styled.List
            breakpointCols={{
              default: 3,
              900: 2,
              600: 1,
            }}>
            {agreements.map(({ ...item }) => (
              <AgreementCard key={item.id} {...item} />
            ))}
          </Styled.List>
        </Styled.Main>
        <Styled.Signatures>
          <SignatureCount count={props.signatures} />
          <Styled.Text>
            Firma tú también en:{' '}
            <Styled.TextLink href="https://www.change.org/p/actransparencia-keikofujimori-pedrocastillote-canaln-que-los-candidatos-pedro-castillo-y-keiko-fujimori-firmen-la-siguiente-proclama-ciudadana">
              change.org
            </Styled.TextLink>
          </Styled.Text>
          <Styled.Download>
            <Image
              src="/images/icons/download-icon.svg"
              width="24"
              height="24"
              alt="icono de descarga"
            />
            <Styled.TextLink href="https://drive.google.com/drive/folders/1hFH0XfkHCktmDQkuuRXICPa_FgcsGaA_">
              Descarga y comparte los acuerdos
            </Styled.TextLink>
          </Styled.Download>
        </Styled.Signatures>
        <Styled.Organizers>
          Organizan
          <LogoList />
        </Styled.Organizers>
      </Styled.Container>
      <Footer />
    </Fragment>
  );
};

export default Home;
