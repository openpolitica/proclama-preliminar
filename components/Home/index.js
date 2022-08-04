import * as Styled from './styles';
import { Fragment } from 'react';
import Image from 'next/image';
import BasePage from 'components/BasePage';
import ImageBox from 'components/ImageBox';
import MainContent from 'components/MainContent';
import AgreementCard from 'components/AgreementCard';
import EventCard from 'components/EventCard';
import DownloadButton from 'components/DownloadButton';
import Link from 'components/LinkWithFallback';

const Logos = [
  {
    source: '/images/logos/open-politica.svg',
    width: 200,
    height: 43,
    alternate: 'logo de Open Política',
    url: 'https://openpolitica.com/',
  },
  {
    source: '/images/logos/transparencia.svg',
    width: 130,
    height: 65,
    alternate: 'logo de Transparencia',
    url: 'https://www.transparencia.org.pe/',
  },
  {
    source: '/images/logos/cpp.svg',
    width: 124,
    height: 68,
    alternate: 'logo de consejo de la prensa peruana',
    url: 'http://consejoprensaperuana.org.pe/',
  },
  {
    source: '/images/logos/innovalab.png',
    width: 138,
    height: 55,
    alternate: 'logo de laboratorio de innovación en Salud - UPCH',
    url: 'https://investigacion.cayetano.edu.pe/catalogo/biotecnologia/innov-lab',
  },
  {
    source: '/images/logos/logito_copia.svg',
    width: 131,
    height: 65,
    alternate: 'logo de impulso país',
    url: 'https://impulsopais.pe/',
  },
  {
    source: '/images/logos/logo_cbc.png',
    width: 151,
    height: 37,
    alternate: 'logo de centro bartolomé de las casas',
    url: 'https://cbc.org.pe/',
  },
  {
    source: '/images/logos/internancia.svg',
    width: 98,
    height: 98,
    alternate: 'logo de Internancia',
    url: 'https://www.facebook.com/internacia.pucp/',
  },
  {
    source: '/images/logos/perspectiva.svg',
    width: 154,
    height: 56,
    alternate: 'logo de perspectiva constitucional',
    url: 'https://www.facebook.com/Perspectiva-Constitucional-851877291597271/',
  },
  {
    source: '/images/logos/cipca.svg',
    width: 81,
    height: 104,
    alternate: 'logo de cipca',
    url: 'http://www.cipca.org.pe/',
  },
  {
    source: '/images/logos/logo_pucp.png',
    width: 198,
    height: 43,
    alternate:
      'logo de grupo interdisciplinado de prospectiva de políticas públicas de la pucp',
    url: 'https://investigacion.pucp.edu.pe/grupos/GI3P/',
  },
  {
    source: '/images/logos/ipae.svg',
    width: 151,
    height: 56,
    alternate: 'logo de ipae',
    url: 'https://www.ipae.pe/',
  },
  {
    source: '/images/logos/foro-educativo.png',
    width: 145,
    height: 58,
    alternate: 'logo de foro educativo',
    url: 'http://foroeducativo.org/',
  },
  {
    source: '/images/logos/proetica.svg',
    width: 131,
    height: 64,
    alternate: 'logo de proética',
    url: 'https://www.proetica.org.pe/',
  },
  {
    source: '/images/logos/logo-recambio.png',
    width: 151,
    height: 31,
    alternate: 'logo de recambio',
    url: 'https://www.proetica.org.pe/',
  },
];

const LogoList = () => (
  <Styled.Boxlogo>
    {Logos.map(({ source, width, height, alternate, url }, i) => {
      return (
        <ImageBox key={i} to={url}>
          <Image src={source} width={width} height={height} alt={alternate} />
        </ImageBox>
      );
    })}
  </Styled.Boxlogo>
);

export default function Home(props) {
  const agreements = props.agreements;
  const events = props.events?.slice(0, 3);
  const lastReport = props.lastReport;

  return (
    <Fragment>
      <BasePage>
        <MainContent>
          <Styled.Title>
            <Styled.Emphasis>12 compromisos</Styled.Emphasis> esenciales para la
            democracia y el desarrollo
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
                <DownloadButton to={lastReport?.url}>
                  Descargar reporte {lastReport?.title}
                </DownloadButton>
              </Styled.ButtonBox>
              <Styled.LinkBox>
                <Link to="reportes/" target="_self">
                  <Styled.DownloadAll>
                    Ver todos los reportes
                  </Styled.DownloadAll>
                </Link>
              </Styled.LinkBox>
            </Styled.Info>
            <Styled.PictureContainer>
              <Styled.ImagePortrait>
                <Image
                  src="/images/icons/img_report_big.svg"
                  width="390"
                  height="283"
                  alt="ícono de informe"
                />
              </Styled.ImagePortrait>
            </Styled.PictureContainer>
          </Styled.ReportsContainer>
        </Styled.Reports>
        <Styled.Organizers>
          <Styled.OrganizersTitle>Promotores</Styled.OrganizersTitle>
          <LogoList />
        </Styled.Organizers>
      </BasePage>
    </Fragment>
  );
}
