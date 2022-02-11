import * as Styled from './styles';
import BasePage from 'components/BasePage';
import MainContent from 'components/MainContent';
import IndicatorCard from 'components/IndicatorCard';

export default function Agreement(props) {
  const info = props.agreementInfo;
  return (
    <BasePage>
      <MainContent>
        <Styled.TitleBox>
          <Styled.HeaderTitle>Compromiso #{info.id}</Styled.HeaderTitle>
          <Styled.Title>{info.title}</Styled.Title>
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
