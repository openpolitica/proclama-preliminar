import * as Styled from './styles';
import React from 'react';
import Router from 'next/router';
import ErrorPage from 'next/error';
import BasePage from 'components/BasePage';
import MainContent from 'components/MainContent';
import IndicatorCard from 'components/IndicatorCard';

export default function Agreement(props) {
  React.useEffect(() => {
    if (!props.page) {
      Router.push('/');
    }
  });

  const page = props.page;
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }
  const info = props.agreementInfo;
  const maxPage = props.agreementsCount;
  return (
    <BasePage>
      <MainContent>
        <Styled.TitleBox>
          <Styled.PrevButton
            disabled={+page === 1}
            to={`/compromiso/${+page - 1}`}
          />
          <Styled.TitleContent>
            <Styled.HeaderTitle>Compromiso #{info.id}</Styled.HeaderTitle>
            <Styled.Title>{info.title}</Styled.Title>
          </Styled.TitleContent>
          <Styled.NextButton
            disabled={+page === +maxPage}
            to={`/compromiso/${+page + 1}`}
          />
        </Styled.TitleBox>
        <strong>Número de indicadores:</strong> {}
        {props.indicatorsCount}
        <Styled.IndicatorList>
          {info?.indicators.map(({ _id, description, events }) => {
            const lastEvent = events[0];
            return (
              <IndicatorCard
                key={_id}
                indicatorDescription={description}
                eventDescription={lastEvent?.description}
                status={lastEvent?.status}
                source={lastEvent?.data_source}
                sourceUrl={lastEvent?.source_url}></IndicatorCard>
            );
          })}
        </Styled.IndicatorList>
      </MainContent>
    </BasePage>
  );
}
