import * as Styled from './styles';
import StatusCard from 'components/StatusCard';
import HeaderCard from 'components/HeaderCard';
import FormatDate from 'util/formatDate';

export default function EventCard({
  date,
  agreementId,
  agreementTitle,
  title,
  description,
  status,
  url,
}) {
  return (
    <StatusCard status={status}>
      <HeaderCard>
        <div>
          <Styled.Date>{FormatDate(date)}</Styled.Date>
          <Styled.HeaderTitle>
            <b>Compromiso #{agreementId}:</b> {agreementTitle}
          </Styled.HeaderTitle>
        </div>
        <Styled.Alert status={status}></Styled.Alert>
      </HeaderCard>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.SourceLink href={url} target="_blank" rel="noopener noreferrer">
        <Styled.ArrowRight />
        Referencia
      </Styled.SourceLink>
    </StatusCard>
  );
}
