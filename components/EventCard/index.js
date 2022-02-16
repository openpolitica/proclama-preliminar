import * as Styled from './styles';
import StatusCard from 'components/StatusCard';
import HeaderCard from 'components/HeaderCard';
import FormatDate from 'util/formatDate';
import Link from 'next/link';

const limitCharacters = (text, max) => {
  if (text.length < max) {
    return text;
  }
  const limitedText = text.substring(0, max);
  return `${limitedText.substring(0, limitedText.lastIndexOf(' '))}...`;
};

export default function EventCard({
  date,
  agreementId,
  indicatorId,
  title,
  description,
  status,
}) {
  const maxCharacters = 300;
  return (
    <StatusCard status={status}>
      <HeaderCard>
        <div>
          <Styled.Date>{FormatDate(date)}</Styled.Date>
          <Styled.HeaderTitle>
            <b>Compromiso #{agreementId} -</b> Indicador {indicatorId}
          </Styled.HeaderTitle>
        </div>
        <Styled.Alert status={status}></Styled.Alert>
      </HeaderCard>
      {title && <Styled.Title>{title}</Styled.Title>}
      <Styled.Description>
        {limitCharacters(description, maxCharacters)}
      </Styled.Description>
      <Link href={`compromiso/${agreementId}#indicador_${indicatorId}`}>
        <Styled.SeeMore>Ver más</Styled.SeeMore>
      </Link>
    </StatusCard>
  );
}
