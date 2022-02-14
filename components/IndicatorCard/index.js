import * as Styled from './styles';
import StatusCard from 'components/StatusCard';
import { Fragment } from 'react';

export default function IndicatorCard({
  indicatorDescription,
  indicatorId,
  eventDescription,
  eventTitle,
  status,
  source,
  sourceUrl,
  ...props
}) {
  return (
    <StatusCard status={status} {...props}>
      <Styled.Header underline={!!status}>
        <Styled.AlertBox>
          <Styled.Alert status={status}></Styled.Alert>
        </Styled.AlertBox>
        <div>
          <Styled.Label>Indicador {indicatorId}</Styled.Label>
          <Styled.HeaderTitle>{indicatorDescription}</Styled.HeaderTitle>
        </div>
      </Styled.Header>
      {eventDescription && (
        <Fragment>
          <Styled.Label>¿Cómo vamos?</Styled.Label>
          {eventTitle && <Styled.EventTitle> {eventTitle} </Styled.EventTitle>}
          <Styled.Description underline={!!source}>
            {eventDescription}
          </Styled.Description>
          {source && (
            <Styled.Source to={sourceUrl}>
              <Styled.Icon>
                <Styled.ArrowRight />
              </Styled.Icon>
              <Styled.SourceLabel>Fuente</Styled.SourceLabel>
              {source}
            </Styled.Source>
          )}
        </Fragment>
      )}
    </StatusCard>
  );
}
