import * as Styled from './styles';
import { Fragment } from 'react';
import Image from 'next/image';
import BasePage from 'components/BasePage';
import ImageBox from 'components/ImageBox';
import MainContent from 'components/MainContent';
import AgreementCard from 'components/AgreementCard';
import EventCard from 'components/EventCard';
import DownloadButton from 'components/DownloadButton';

const LogoList = () => (
  <Styled.Boxlogo>
    <ImageBox>
      <Image
        src="/images/logos/open-politica.svg"
        width="200"
        height="43"
        alt="logo de Open Política"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/transparencia.svg"
        width="130"
        height="65"
        alt="logo de Transparencia"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/200.svg"
        width="142"
        height="59"
        alt="logo de 200"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/cpp.svg"
        width="124"
        height="68"
        alt="logo de consejo de la prensa peruana"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/UPCH.svg"
        width="138"
        height="61"
        alt="logo de universidad peruana cayetano heredia"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/logito_copia.svg"
        width="131"
        height="65"
        alt="logo de impulso"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/IBC.svg"
        width="151"
        height="56"
        alt="logo de instituto bartolomé de las casas"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/internancia.svg"
        width="98"
        height="98"
        alt="logo de Internancia"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/perspectiva.svg"
        width="154"
        height="56"
        alt="logo de perspectiva constitucional"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/cipca.svg"
        width="81"
        height="104"
        alt="logo de cipca"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/pucp.svg"
        width="198"
        height="43"
        alt="logo de PUCP"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/ipae.svg"
        width="151"
        height="56"
        alt="logo de Ipae"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/foro-educativo.svg"
        width="145"
        height="58"
        alt="logo de Foro Educativo"
      />
    </ImageBox>
    <ImageBox>
      <Image
        src="/images/logos/proetica.svg"
        width="131"
        height="64"
        alt="logo de Proética"
      />
    </ImageBox>
  </Styled.Boxlogo>
);

export default function Home(props) {
  const agreements = props.agreements;
  const events = props.events?.slice(0, 3);

  return (
    <Fragment>
      <BasePage>
        <MainContent>
          <Styled.Title>
            <Styled.Emphasis>12 compromisos</Styled.Emphasis> esenciales que
            asumió el presidente Pedro Castillo
          </Styled.Title>
          <Styled.Subtitle>
            Conoce y hazle seguimiento a los 12 compromisos y sus indicadores
          </Styled.Subtitle>
          <Styled.AgreementTitle>
            Estado del cumplimiento de los compromisos
          </Styled.AgreementTitle>
          <Styled.List
            breakpointCols={{
              default: 3,
              900: 2,
              600: 1,
            }}>
            {agreements?.map(({ id, title, description, statuses }) => (
              <AgreementCard
                key={id}
                id={id}
                title={title}
                description={description}
                statuses={statuses}
              />
            ))}
          </Styled.List>
          <Styled.EventTitle>Últimas actualizaciones</Styled.EventTitle>
          <Styled.EventList>
            {events?.map(
              ({
                _id,
                agreement_id,
                indicator_id,
                title,
                description,
                created_At,
                status,
              }) => (
                <EventCard
                  key={_id}
                  date={created_At}
                  agreementId={agreement_id}
                  indicatorId={indicator_id}
                  title={title}
                  description={description}
                  status={status}
                />
              ),
            )}
          </Styled.EventList>
        </MainContent>
        <Styled.Reports>
          <Styled.ReportsContainer>
            <Styled.Info>
              <Styled.Message>
                Descarga nuestro informe sobre el seguimiento de los acuerdos en
                los 120 días de gobierno del presidente Pedro Castillo.
              </Styled.Message>
              <Styled.ButtonBox>
                <DownloadButton to="https://drive.google.com/uc?export=download&id=11o1y3Eed0q5QjWLVb0M6eaHO0e058EEJ">
                  Descargar reporte completo
                </DownloadButton>
                <DownloadButton to="https://drive.google.com/uc?export=download&id=1K2mZ42uFlMieatGmScib4hTVv6M831vd">
                  Descargar resumen ejecutivo
                </DownloadButton>
              </Styled.ButtonBox>
            </Styled.Info>
            <Styled.PictureContainer>
              <Styled.ImagePortrait>
                <Image
                  src="/images/portrait.png"
                  width="329"
                  height="469"
                  alt="informe de 120 días"
                />
              </Styled.ImagePortrait>
            </Styled.PictureContainer>
          </Styled.ReportsContainer>
        </Styled.Reports>
        <Styled.Organizers>
          Promotores
          <LogoList />
        </Styled.Organizers>
      </BasePage>
    </Fragment>
  );
}
