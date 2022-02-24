import * as Styled from './styles';
import { useEffect } from 'react';
import Router from 'next/router';
import ErrorPage from 'next/error';
import BasePage from 'components/BasePage';
import IndicatorCard from 'components/IndicatorCard';

export default function Agreement(props) {
  useEffect(() => {
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
      <Styled.Content>
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
        <Styled.Counter>
          <strong>Número de indicadores:</strong> {props.indicatorsCount}
        </Styled.Counter>
        <Styled.IndicatorList>
          {info?.indicators.map(
            ({ _id, indicator_id, description, events }) => {
              const lastEvent = events[0];
              return (
                <IndicatorCard
                  key={_id}
                  id={`indicador_${indicator_id}`}
                  date={lastEvent?.created_At}
                  indicatorId={indicator_id}
                  indicatorDescription={description}
                  eventDescription={lastEvent?.description}
                  eventTitle={lastEvent?.title}
                  status={lastEvent?.status}
                  source={lastEvent?.data_source}
                  sourceUrl={lastEvent?.data_source_url}></IndicatorCard>
              );
            },
          )}
        </Styled.IndicatorList>
      </Styled.Content>
    </BasePage>
  );
}
