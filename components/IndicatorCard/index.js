import * as Styled from './styles';
import StatusCard from 'components/StatusCard';
import { Fragment } from 'react';

export default function IndicatorCard({
  indicatorDescription,
  eventDescription,
  status,
  source,
  sourceUrl,
}) {
  return (
    <StatusCard status={status}>
      <Styled.Header underline={status ? true : false}>
        <Styled.AlertBox>
          <Styled.Alert status={status}></Styled.Alert>
        </Styled.AlertBox>
        <div>
          <Styled.Label>Indicador</Styled.Label>
          <Styled.HeaderTitle>{indicatorDescription}</Styled.HeaderTitle>
        </div>
      </Styled.Header>
      {eventDescription && (
        <Fragment>
          <Styled.Label>¿Qué pasó?</Styled.Label>
          <Styled.Description>{eventDescription}</Styled.Description>
          <Styled.Source to={sourceUrl}>
            <Styled.ArrowRight />
            <strong>Fuente </strong>
            {source}
          </Styled.Source>
        </Fragment>
      )}
    </StatusCard>
  );
}
