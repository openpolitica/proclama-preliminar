import * as Styled from './styles';
import { Fragment } from 'react';
import Image from 'next/image';
import BasePage from 'components/BasePage';
import MainContent from 'components/MainContent';
import AgreementCard from 'components/AgreementCard';
import EventCard from 'components/EventCard';
import DownloadButton from 'components/DownloadButton';
import Link from 'components/LinkWithFallback';
import LogoList from 'components/LogoList';

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
