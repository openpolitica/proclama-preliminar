import * as Styled from './styles';
import Link from 'next/link';
import Image from 'next/image';
import Footer from 'components/Footer';

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

const Home = () => {
  return (
    <Styled.Container>
      <header>
        <Link href="/">
          <Styled.Header>#ProclamaCiudadana</Styled.Header>
        </Link>
        <hr />
      </header>
      <Styled.Main>
        <Styled.Title>
          Conoce y hazle seguimiento a los{' '}
          <Styled.Emphasis>12 acuerdos democráticos</Styled.Emphasis> que han
          firmado los candidatos a la segunda vuelta
        </Styled.Title>
        <Styled.Subtitle>
          El Perú nació bajo el espíritu de la libertad. Al llegar el
          Bicentenario, toca a su pueblo defenderla porque ella solo es posible
          en democracia. En el Perú, sabemos lo que es perderla y{' '}
          <Styled.Emphasis>
            sabemos también lo que es recuperarla.
          </Styled.Emphasis>
        </Styled.Subtitle>
      </Styled.Main>
      <Styled.SignatureSection>
        <Styled.SignatureTitle>Firman</Styled.SignatureTitle>
        <Styled.CountText>+20,000 personas</Styled.CountText>
        <Styled.Text>
          Firma tú también en:{' '}
          <Styled.TextLink href="https://www.change.org/">
            change.org
          </Styled.TextLink>
        </Styled.Text>
        <Styled.DownloadContent>
          <Image
            src="/images/icons/download-icon.svg"
            width="24"
            height="24"
            alt="icono de descarga"
          />
          <Styled.TextLink href="">
            Descarga el documento completo
          </Styled.TextLink>
        </Styled.DownloadContent>
      </Styled.SignatureSection>
      <Styled.OrganizersSection>
        Organizan
        <LogoList />
      </Styled.OrganizersSection>
      <Footer />
    </Styled.Container>
  );
};

export default Home;
