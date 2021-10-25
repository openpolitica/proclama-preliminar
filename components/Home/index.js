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
    <Styled.LogoText>Open Política</Styled.LogoText>
    <Styled.ImageBox>
      <Image
        src="/images/logos/200.svg"
        width="74"
        height="74"
        alt="logo de 200"
      />
    </Styled.ImageBox>
    <Styled.ImageBox>
      <Image
        src="/images/logos/transparencia.svg"
        width="156"
        height="74"
        alt="logo de transparencia"
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
          <Styled.Header>#Vigilantes</Styled.Header>
        </Link>
      </header>
      <Styled.Container>
        <Styled.Main>
          <Styled.Title>
            <Styled.Emphasis>12 acuerdos</Styled.Emphasis> esenciales que asumió
            el presidente Pedro Castillo mediante la proclama ciudadana
          </Styled.Title>
          <Styled.Subtitle>
            Conoce y hazle seguimiento a los 12 acuerdos a favor de la
            democracia que asumió el presidente Pedro Castillo
          </Styled.Subtitle>
          <Styled.EventTitle>
            ¿Qué ha hecho el Presidente con los acuerdos?
          </Styled.EventTitle>
          <Styled.EventSubtitle>
            Revisemos el historial de sus declaraciones que han ido a favor o en
            contra de alguno de los acuerdos.
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
          <Styled.AgreementTitle>Lista de Acuerdos</Styled.AgreementTitle>
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
              Descarga y comparte los acuerdos
            </Styled.TextLink>
          </Styled.Download>
        </Styled.SignatureContainer>
      </Styled.Signatures>
      <Styled.Organizers>
        Organizan
        <LogoList />
      </Styled.Organizers>
      <Footer />
    </Fragment>
  );
}
