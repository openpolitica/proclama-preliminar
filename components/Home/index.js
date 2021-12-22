import * as Styled from './styles';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from 'components/Footer';
import AgreementCard from 'components/AgreementCard';
import SignatureCount from 'components/SignatureCount';
import EventCard from 'components/EventCard';

const LogoList = () => (
  <Styled.Boxlogo>
    <Styled.ImageBox>
      <Image
        src="/images/logos/open-politica.svg"
        width="200"
        height="43"
        alt="logo de Open Política"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/transparencia.svg"
        width="130"
        height="65"
        alt="logo de Transparencia"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/200.svg"
        width="142"
        height="59"
        alt="logo de 200"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/cpp.svg"
        width="124"
        height="68"
        alt="logo de consejo de la prensa peruana"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/UPCH.svg"
        width="138"
        height="61"
        alt="logo de universidad peruana cayetano heredia"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/logito_copia.svg"
        width="131"
        height="65"
        alt="logo de impulso"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/IBC.svg"
        width="151"
        height="56"
        alt="logo de instituto bartolomé de las casas"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/internancia.svg"
        width="98"
        height="98"
        alt="logo de Internancia"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/perspectiva.svg"
        width="154"
        height="56"
        alt="logo de perspectiva constitucional"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/cipca.svg"
        width="81"
        height="104"
        alt="logo de cipca"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/pucp.svg"
        width="198"
        height="43"
        alt="logo de PUCP"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/ipae.svg"
        width="151"
        height="56"
        alt="logo de Ipae"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/foro-educativo.svg"
        width="145"
        height="58"
        alt="logo de Foro Educativo"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/proetica.svg"
        width="131"
        height="64"
        alt="logo de Proética"
      />
    </Styled.ImageBox>
  </Styled.Boxlogo>
);

export default function Home(props) {
  const agreements = props.agreements;
  const events = props.events?.slice(0, 3);

  return (
    <Fragment>
      <header>
        <Link href="/">
          <Styled.Header>
            <Styled.ImageBox header>
              <Image
                src="/images/logos/vigilantes.svg"
                width="208px"
                height="48px"
                alt="logo de Vigilantes"
              />
            </Styled.ImageBox>
          </Styled.Header>
        </Link>
      </header>
      <Styled.Container>
        <Styled.Main>
          <Styled.Title>
            <Styled.Emphasis>12 compromisos</Styled.Emphasis> por la democracia
            que asumió el presidente Pedro Castillo
          </Styled.Title>
          <Styled.Subtitle>
            Conoce y hazle seguimiento a los 12 compromisos y sus indicadores
          </Styled.Subtitle>
          <Styled.EventTitle>
            ¿Qué ha hecho el Presidente con los compromisos?
          </Styled.EventTitle>
          <Styled.EventSubtitle>
            Revisemos el historial de sus declaraciones que han ido a favor o en
            contra de alguno de los compromisos.
          </Styled.EventSubtitle>
          <Styled.EventList>
            {events?.map(
              ({
                _id,
                agreement_id,
                title,
                description,
                created_At,
                data_source,
                status,
              }) => (
                <EventCard
                  key={_id}
                  date={created_At}
                  agreementId={agreement_id}
                  agreementTitle={
                    agreements.find(element => element.id === agreement_id)
                      .title
                  }
                  title={title}
                  description={description}
                  url={data_source}
                  status={status}
                />
              ),
            )}
          </Styled.EventList>
          <Styled.AgreementTitle>Lista de Compromisos</Styled.AgreementTitle>
          <Styled.List
            breakpointCols={{
              default: 3,
              900: 2,
              600: 1,
            }}>
            {agreements?.map(({ id, title, description, events }) => (
              <AgreementCard
                key={id}
                id={id}
                title={title}
                description={description}
                status={events[events.length - 1]?.status}
              />
            ))}
          </Styled.List>
        </Styled.Main>
      </Styled.Container>
      <Styled.Signatures>
        <Styled.SignatureContainer>
          <SignatureCount count={props.signatures} />
          <Styled.Text>
            Fuente:{' '}
            <Styled.TextLink href="https://www.change.org/p/actransparencia-keikofujimori-pedrocastillote-canaln-que-los-candidatos-pedro-castillo-y-keiko-fujimori-firmen-la-siguiente-proclama-ciudadana">
              change.org
            </Styled.TextLink>
          </Styled.Text>
          <Styled.Download>
            <Styled.ImageDownload>
              <Image
                src="/images/icons/download-icon.svg"
                width="24"
                height="24"
                alt="icono de descarga"
              />
            </Styled.ImageDownload>
            <Styled.TextLink href="https://drive.google.com/drive/folders/1hFH0XfkHCktmDQkuuRXICPa_FgcsGaA_">
              Descarga y comparte los compromisos
            </Styled.TextLink>
          </Styled.Download>
        </Styled.SignatureContainer>
      </Styled.Signatures>
      <Styled.Organizers>
        Promotores
        <LogoList />
      </Styled.Organizers>
      <Footer />
    </Fragment>
  );
}
